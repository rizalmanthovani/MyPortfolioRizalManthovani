import React from 'react';
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/lib/ThemeProvider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rizal Manthovani – Full‑Stack Developer",
    template: "%s | Rizal Manthovani",
  },
  description:
    "Full‑stack developer berfokus pada React, Next.js, TypeScript, dan UI/UX premium. Lihat proyek‑proyek terbaik saya dan hubungi untuk kolaborasi.",
  metadataBase: new URL("https://rizalmanthovani.com"),
  openGraph: {
    title: "Rizal Manthovani – Portfolio",
    description:
      "Full‑stack developer – showcase proyek React & Next.js yang berorientasi pada hasil bisnis.",
    url: "https://rizalmanthovani.com",
    siteName: "Rizal Manthovani Portfolio",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Rizal Manthovani – Full‑Stack Developer",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizal Manthovani – Portfolio",
    description:
      "Full‑stack developer – showcase proyek React & Next.js yang berorientasi pada hasil bisnis.",
    images: ["/images/hero-bg.jpg"],
    creator: "@rizalmanthovani",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="light">
      <head />
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
