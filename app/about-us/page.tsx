import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { ValuesIntro } from "@/components/about/values-intro";
import { TeamCulture } from "@/components/about/team-culture";
import { DoDont } from "@/components/about/do-dont";
import { MeetTeam } from "@/components/about/meet-team";
import { Recognition } from "@/components/about/recognition";
import { Testimonials } from "@/components/sections/testimonials";
import { Cta } from "@/components/sections/cta";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet the team behind ${siteConfig.name} — an independent studio building brand identity and packaging design for founders who care about craft.`,
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: `About Us — ${siteConfig.name}`,
    description: `Meet the team behind ${siteConfig.name} — an independent studio building brand identity and packaging design for founders who care about craft.`,
    url: "/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <ValuesIntro />
      <TeamCulture />
      <DoDont />
      <MeetTeam />
      <Testimonials />
      <Recognition />
      <Cta />
    </>
  );
}
