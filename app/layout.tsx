import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { LoadingOverlay } from "@/components/LoadingOverlay";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteName = "European Cars";
const description =
  "Explore European car manufacturers — Germany, UK, Italy, and France.";

export const metadata: Metadata = {
  title: { default: siteName, template: `%s | ${siteName}` },
  description,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"
  ),
  openGraph: {
    title: siteName,
    description,
    type: "website",
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
  },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingOverlay />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
