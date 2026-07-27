import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { Services } from "@/components/sections/services";
import { Statistics } from "@/components/sections/statistics";
import { Testimonials } from "@/components/sections/testimonials";
import { Clients } from "@/components/sections/clients";
import { Principles } from "@/components/sections/principles";
import { Faq } from "@/components/sections/faq";
import { Articles } from "@/components/sections/articles";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Statistics />
      <Testimonials />
      <Clients />
      <Principles />
      <Faq />
      <Articles />
      <Cta />
    </>
  );
}
