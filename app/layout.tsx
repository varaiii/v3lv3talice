import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const metadataBase = process.env.VERCEL_URL
  ? new URL(`https://${process.env.VERCEL_URL}`)
  : new URL("http://localhost:3000");

export const metadata: Metadata = {
  metadataBase,
  title: "Alice",
  description: "Welcome to my special place ✦",
  openGraph: {
    title: "Alice",
    description: "Welcome to my special place ✦",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alice",
      },
    ],
    type: "website",
    siteName: "Alice",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alice",
    description: "Welcome to my special place ✦",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f1d20",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
