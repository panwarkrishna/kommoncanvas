import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = "https://aditechinfo.com/kommoncanvas";
const siteTitle = "Kommon Canvas | Packaging & Brand Design Studio";
const siteDescription =
  "Kommon Canvas is a creative design studio specializing in brand strategy, brand identity, packaging design, and digital experience — from concept to creation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Kommon Canvas",
  },
  description: siteDescription,
  keywords: [
    "packaging design",
    "packaging design company",
    "packaging design agency",
    "brand identity design",
    "brand strategy",
    "logo design",
    "label design",
    "dieline design",
    "product packaging design",
    "UI UX design",
    "web design agency",
    "creative design studio",
    "Kommon Canvas",
  ],
  authors: [{ name: "Kommon Canvas" }],
  creator: "Kommon Canvas",
  publisher: "Kommon Canvas",
  applicationName: "Kommon Canvas",
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "any" },
      { url: `${basePath}/favicon.png`, type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: `${basePath}/apple-touch-icon.png`, sizes: "180x180" }],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Kommon Canvas",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: `${basePath}/favicon-512.png`,
        width: 512,
        height: 512,
        alt: "Kommon Canvas",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: [`${basePath}/favicon-512.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
