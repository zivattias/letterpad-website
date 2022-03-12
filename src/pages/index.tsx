import * as React from "react";

import { Features } from "@/components/features/features";
import Hero from "@/components/hero/hero";
import Seo from "@/components/Seo";
import { TechnologyLogos } from "@/components/technologies/technologies";
import WhyLetterpad from "@/components/whyletterpad/whyletterpad";

export default function Homepage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <Hero />
        <Features />
        <WhyLetterpad />
        <TechnologyLogos />
      </main>
    </>
  );
}
