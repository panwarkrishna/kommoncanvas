import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { Statement } from "@/components/services/statement";
import { ServicesList } from "@/components/services/services-list";
import { ProcessDetail } from "@/components/services/process-detail";
import { WorkTeaser } from "@/components/services/work-teaser";
import { Cta } from "@/components/sections/cta";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: `Brand identity, packaging design, and creative partnership plans from ${siteConfig.name} — strategy-led design built to lead a category.`,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Services — ${siteConfig.name}`,
    description: `Brand identity, packaging design, and creative partnership plans from ${siteConfig.name} — strategy-led design built to lead a category.`,
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Statement />
      <ServicesList />
      <ProcessDetail />
      <WorkTeaser />
      <Cta />
    </>
  );
}
