import * as React from "react";

// import AiEditor from "@/components/ai-editor/AiEditor";
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
        <div className='translate-x-0 lg:-translate-x-28'>
          <Hero />
        </div>
        <div className='mx-auto -mt-20 lg:w-4/5'>
          <Features />
        </div>

        <div className='relative z-10'>
          <PostImage />
        </div>
        <div className='-mb-28 bg-gray-50 -translate-y-52'>
          <div className='pt-24'>
            <div className='mx-auto lg:w-4/5'>
              <WhyLetterpad />
            </div>
          </div>
        </div>
        <div className='mx-auto lg:w-4/5'>
          <div className='mb-20'>
            <Comparison />
          </div>
        </div>
        {/* <div className='bg-gray-50'>
          <div className='mx-auto py-10 md:py-20 lg:w-4/5'>
            <AiEditor />
          </div>
        </div> */}
        <div className='mx-auto lg:w-4/5'>
          <div className='my-10 md:my-20'>
            <TechnologyLogos />
          </div>
        </div>
      </main>
    </>
  );
}
