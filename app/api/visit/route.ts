import { NextResponse } from "next/server";
import { Resend } from "resend";
import { headers } from "next/headers";
import { isIP } from "node:net";

const resend = new Resend(process.env.RESEND_API_KEY);

function getClientIp(headerValues: Headers) {
  const forwardedFor = headerValues.get("x-forwarded-for");
  const candidate =
    forwardedFor?.split(",")[0]?.trim() ||
    headerValues.get("x-real-ip") ||
    headerValues.get("cf-connecting-ip") ||
    null;

  return candidate && isIP(candidate) ? candidate : null;
}

function isPublicIp(ip: string | null) {
  if (!ip) return false;

  const normalizedIp = ip.toLowerCase().replace(/^::ffff:/, "");
  if (isIP(normalizedIp) === 4) {
    const [first, second] = normalizedIp.split(".").map(Number);
    return !(
      first === 0 ||
      first === 10 ||
      first === 127 ||
      (first === 100 && second >= 64 && second <= 127) ||
      (first === 169 && second === 254) ||
      (first === 172 && second >= 16 && second <= 31) ||
      (first === 192 && second === 168) ||
      first >= 224
    );
  }

  return !(
    normalizedIp === "::" ||
    normalizedIp === "::1" ||
    normalizedIp.startsWith("fc") ||
    normalizedIp.startsWith("fd") ||
    normalizedIp.startsWith("fe8") ||
    normalizedIp.startsWith("fe9") ||
    normalizedIp.startsWith("fea") ||
    normalizedIp.startsWith("feb")
  );
}

function escapeHtml(value: string) {
  return value.replace(/[&<>\"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '\"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const fallbackLocation = body?.fallbackLocation || {};
    const requestHeaders = headers();
    const ip = getClientIp(requestHeaders);
    let visitorIp = isPublicIp(ip) ? ip : null;
    const timezone =
      typeof body?.timezone === "string" ? body.timezone.slice(0, 100) : null;
    const userAgent = requestHeaders.get("user-agent")?.slice(0, 500) || null;

    const toEmail = process.env.CONTACT_EMAIL;

    if (!process.env.RESEND_API_KEY || !toEmail) {
      return NextResponse.json(
        { error: "Email configuration is missing." },
        { status: 500 },
      );
    }

    let location = fallbackLocation;

    if (ip && isPublicIp(ip)) {
      try {
        const response = await fetch(
          `https://ipapi.co/${encodeURIComponent(ip)}/json/`,
          { signal: AbortSignal.timeout(5000), cache: "no-store" },
        );
        if (response.ok) {
          const result = await response.json();
          if (!result.error) {
            visitorIp =
              typeof result.ip === "string" && isIP(result.ip)
                ? result.ip
                : ip;
            location = {
              city: result.city,
              region: result.region,
              country: result.country_name || result.country,
              countryCode: result.country_code,
              ip: result.ip || ip,
            };
          }
        }
      } catch (error) {
        console.warn("Visitor IP geolocation lookup failed:", error);
      }
    }

    const city = typeof location.city === "string" ? location.city.slice(0, 100) : null;
    const region = typeof location.region === "string" ? location.region.slice(0, 100) : null;
    const country = typeof location.country === "string" ? location.country.slice(0, 100) : null;
    const countryCode = typeof location.countryCode === "string" ? location.countryCode.slice(0, 10) : null;
    if (!visitorIp && typeof location.ip === "string" && isIP(location.ip)) {
      visitorIp = location.ip;
    }
    const locationText = [city, region, country].filter(Boolean).join(", ") || "Unknown";
    const safeLocationText = escapeHtml(locationText);

    const { data, error } = await resend.emails.send({
      from: "⚠️Portfolio Visitor <onboarding@resend.dev>",
      to: [toEmail],
      subject: `New portfolio visit from ${locationText}`,
      text: [
        "New portfolio visit detected.",
        `Location: ${locationText}`,
        `Country Code: ${countryCode || "Unknown"}`,
        `Time Zone: ${timezone || "Unknown"}`,
        `IP Address: ${visitorIp || "Unknown"}`,
        `User Agent: ${userAgent || "Unknown"}`,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin-bottom: 12px;">New portfolio visit</h2>
          <p><strong>Location:</strong> ${safeLocationText}</p>
          <p><strong>Country Code:</strong> ${escapeHtml(countryCode || "Unknown")}</p>
          <p><strong>Time Zone:</strong> ${escapeHtml(timezone || "Unknown")}</p>
          <p><strong>IP Address:</strong> ${escapeHtml(visitorIp || "Unknown")}</p>
          <p><strong>User Agent:</strong> ${escapeHtml(userAgent || "Unknown")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend visitor email failed:", error);
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Visitor email error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to send visitor notification.",
      },
      { status: 500 },
    );
  }
}
