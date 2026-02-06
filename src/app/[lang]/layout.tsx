import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "../globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saudi Real Estate Platform",
  description: "Premium Real Estate in Saudi Arabia",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dir = lang === "ar" ? "rtl" : "ltr";
  
  // Cast lang to 'en' | 'ar' for Navbar types if needed, or update Navbar to accept string
  const validLang = (lang === "ar" ? "ar" : "en") as "en" | "ar";

  return (
    <html lang={lang} dir={dir}>
      <body
        className={`${cairo.variable} ${inter.variable} antialiased font-cairo bg-background text-foreground`}
      >
        <Navbar lang={validLang} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
