import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alice",
  description: "Private Telegram • Instagram",
  openGraph: {
    title: "Alice",
    description: "Private Telegram • Instagram",
    type: "website",
    siteName: "Alice",
  },
  twitter: {
    card: "summary",
    title: "Alice",
    description: "Private Telegram • Instagram",
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
  themeColor: "#07020d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
