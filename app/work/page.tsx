import type { Metadata } from "next";
import { WorkHero } from "@/components/work/work-hero";
import { WorkGrid } from "@/components/work/work-grid";
import { Cta } from "@/components/sections/cta";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Work",
  description: `A look at the brand identity, packaging, and digital design work ${siteConfig.name} has shipped across beauty, food & beverage, hospitality, and lifestyle.`,
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: `Our Work — ${siteConfig.name}`,
    description: `A look at the brand identity, packaging, and digital design work ${siteConfig.name} has shipped across beauty, food & beverage, hospitality, and lifestyle.`,
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkGrid />
      <Cta />
    </>
  );
}
