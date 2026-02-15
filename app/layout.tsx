import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        {children}
      </body>
    </html>
  );
}
