import React from 'react';

import Tailwind from "../images/logos/tailwind.svg";
import Nextjs from "../images/logos/nextjs.svg";
import Prisma from "../images/logos/prisma.svg";
import Graphql from "../images/logos/graphql.svg";
import Apollo from "../images/logos/apollo.svg";
import Tinymce from "../images/logos/tinymce.svg";


function PressLogos() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 border-b border-gray-800">
          <div className="max-w-sm md:max-w-6xl mx-auto grid gap-2 grid-cols-3">
            <div className="flex items-center justify-center py-2 col-auto" data-aos="zoom-out">
              <img src={Nextjs} width={70} />
            </div>
            <div className="flex items-center justify-center py-2 col-auto" data-aos="zoom-out" data-aos-delay="400">
              <img src={Tailwind} width={110} />
            </div>
            <div className="flex items-center justify-center py-2 col-auto" data-aos="zoom-out" data-aos-delay="100">
              <img src={Prisma} width={70} />
            </div>
            <div className="flex items-center justify-center py-2 col-auto" data-aos="zoom-out" data-aos-delay="200">
              <img src={Graphql} width={50} />
            </div>
            <div className="flex items-center justify-center py-2 col-auto" data-aos="zoom-out" data-aos-delay="300">
              <img src={Apollo} width={100} />
            </div>
            <div className="flex items-center justify-center py-2 col-auto" data-aos="zoom-out" data-aos-delay="400">
              <img src={Tinymce} width={70} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PressLogos;
