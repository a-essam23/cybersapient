import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import denton from "@styles/fonts/denton";
import gilroy from "@styles/fonts/gilroy";
import "./globals.css";
import Footer from "@components/layout/footer";
import { userAgent } from "next/server";
import { headers } from "next/headers";
import Providers from "@/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRED - Cards",
  description:
    "designed for those who expect nothing less than absolute, frictionless control.",

  openGraph: {
    images: [
      "https://web-images.credcdn.in/v2/_next/assets/images/cards/cm-og-img.jpg",
    ],
    type: "website",
    title: "credit card management. reimagined.",
    description:
      "designed for those who expect nothing less than absolute, frictionless control.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`select-none ${geistSans.variable} ${geistMono.variable} ${denton.variable} ${gilroy.className} antialiased`}
      >
        <Navbar />
        <main className="flex flex-col">{children}</main>
        <Footer />
        <Providers />
      </body>
    </html>
  );
}
