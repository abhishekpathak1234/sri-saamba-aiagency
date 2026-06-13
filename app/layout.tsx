import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sri Saamba AI Agency | Intelligent Automation Solutions",
  description:
    "Sri Saamba AI Agency builds custom AI voice agents, chatbots, and workflow automation that save time, qualify leads, and grow revenue for modern businesses.",
  keywords: [
    "AI agency",
    "AI voice agents",
    "chatbots",
    "workflow automation",
    "CRM integration",
    "lead qualification",
  ],
  openGraph: {
    title: "Sri Saamba AI Agency | Intelligent Automation Solutions",
    description:
      "Custom AI agents and automation workflows that transform your business operations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
