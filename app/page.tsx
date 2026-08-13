
import Hero from "@/components/Hero";
import HappyClient from "@/components/HappyClient";
import LatestProjects from "@/components/LatestProjects";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeHelp from "@/components/WhatWeHelp";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";


export default function Home() {
  return (
    <>
      <Hero />
      <HappyClient />
      <LatestProjects />
      <WhoWeAre />
      <WhatWeHelp />
      <Testimonials />
      <FAQSection />
      </>
  );
}
