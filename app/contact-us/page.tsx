import type { Metadata } from "next";
import { ContactFormHero } from "@/components/contact/contact-form-hero";
import { ScheduleBand } from "@/components/contact/schedule-band";
import { Cta } from "@/components/sections/cta";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} — tell us about your project and we'll set up a brief call to explore how we can help.`,
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: `Contact Us — ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.name} — tell us about your project and we'll set up a brief call to explore how we can help.`,
    url: "/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <ContactFormHero />
      <ScheduleBand />
      <Cta />
    </>
  );
}
