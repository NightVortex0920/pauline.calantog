import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pauline | Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer specializing in Web, Mobile, Blockchain, and AI. I help startups and businesses transform bold ideas into secure, scalable, and high-performing digital solutions. From initial concept and system architecture to final deployment, I bridge the gap between complex tech and business goals. Whether building decentralized apps, integrating advanced AI models, or crafting seamless cross-platform experiences, I deliver robust, future-proof products. Let's turn your bold vision into a scalable reality and build the future of digital innovation together starting today.",
  keywords: [
    "Full Stack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Frontend",
    "Backend",
    "Node.js",
    "Supabase",
  ],
  authors: [{ name: "Pauline" }],
  openGraph: {
    title: "Pauline | Full Stack Engineer",
    description:
      "Senior Full Stack Engineer specializing in Web, Mobile, Blockchain, and AI. I help startups and businesses transform bold ideas into secure, scalable, and high-performing digital solutions. From initial concept and system architecture to final deployment, I bridge the gap between complex tech and business goals. Whether building decentralized apps, integrating advanced AI models, or crafting seamless cross-platform experiences, I deliver robust, future-proof products. Let's turn your bold vision into a scalable reality and build the future of digital innovation together starting today.",
    type: "website",
  },
  icons: {
    icon: "/projects/avatar.jpg",
    shortcut: "/projects/avatar.jpg",
    apple: "/projects/avatar.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        {/* Global SVG glow filter for neon gradient borders */}
        <svg
          width="0"
          height="0"
          aria-hidden="true"
          style={{ position: "fixed" }}
        >
          <defs>
            <filter id="flip-glow" x="-0.25" y="-0.25" width="1.5" height="1.5">
              <feComponentTransfer>
                <feFuncA type="table" tableValues="0 2 0" />
              </feComponentTransfer>
              <feGaussianBlur stdDeviation="2" />
              <feComponentTransfer result="rounded">
                <feFuncA type="table" tableValues="-2 3" />
              </feComponentTransfer>
              <feMorphology operator="dilate" radius="3" />
              <feGaussianBlur stdDeviation="6" />
              <feBlend in="rounded" result="glow" />
              <feComponentTransfer in="SourceGraphic">
                <feFuncA type="table" tableValues="0 0 1" />
              </feComponentTransfer>
              <feBlend in2="glow" />
            </filter>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
