import * as React from "react";

import { Comparison } from "@/components/comparison/comparison";
import { Features } from "@/components/features/features";
import Hero from "@/components/hero/hero";
import { PostImage } from "@/components/post-image/post-image";
import Seo from "@/components/Seo";
import { TechnologyLogos } from "@/components/technologies/technologies";
import WhyLetterpad from "@/components/whyletterpad/whyletterpad";

export default function Homepage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <div className='mx-auto lg:w-4/5'>
          <Hero />
          <Features />
        </div>

        <div className='relative z-10'>
          <PostImage />
        </div>
        <div className='-translate-y-28 bg-gray-50'>
          <div className='pt-24'>
            <div className='mx-auto lg:w-4/5'>
              <WhyLetterpad />
            </div>
          </div>
        </div>
        <div className='mx-auto lg:w-4/5'>
          <Comparison />
          <TechnologyLogos />
        </div>
      </main>
    </>
  );
}
