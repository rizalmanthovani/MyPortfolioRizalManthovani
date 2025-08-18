import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import Navbar from "@/components/Navbar";
import StarBackground from "@/components/StarBackground";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-orbitron', // Membuat CSS variable bernama --font-orbitron
});

export const metadata: Metadata = {
  title: "Portfolio Rizal Manthovani",
  description: "Selamat datang di portofolio Rizal Manthovani!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${orbitron.variable} bg-gray-900 text-white font-sans`}>
        <StarBackground />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
