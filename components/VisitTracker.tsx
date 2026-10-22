"use client";

import { useEffect, useRef } from "react";

export default function VisitTracker() {
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    if (hasTrackedRef.current) return;
    hasTrackedRef.current = true;

    const trackVisit = async () => {
      try {
        let location: Record<string, string> = {};

        try {
          const response = await fetch("https://ipapi.co/json/");
          if (response.ok) {
            location = await response.json();
          }
        } catch {
          // Ignore location lookup failures; we still send timezone info.
        }

        const payload = {
          fallbackLocation: {
            city: location.city || null,
            region: location.region || null,
            country: location.country_name || location.country || null,
            countryCode: location.country_code || null,
            ip: location.ip || null,
          },
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
        };

        const response = await fetch("/api/visit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const result = await response.json().catch(() => null);
          console.error(
            "Visitor notification failed:",
            result?.error || response.statusText,
          );
        }
      } catch (error) {
        console.error("Failed to track visitor:", error);
      }
    };

    trackVisit();
  }, []);

  return null;
}
