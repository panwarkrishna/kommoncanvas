import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, Instrument_Serif } from "next/font/google";
// import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "./globals.css";
import Header from "@/components/layout/Header";

const fontDisplay = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontAccent = Instrument_Serif({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kommon Canvas",
  description: "From concept to creation.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf8f4",
  colorScheme: "light",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontAccent.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">

          {/* <Header /> */}

          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
