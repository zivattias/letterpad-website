import React from 'react';

import Illustration from '../images/hero-illustration.svg';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Bg gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <img src={Illustration} className="max-w-none" width="2143" height="737" alt="Hero Illustration" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:text-left">
            <h1 className="h1 font-uncut-sans mb-6" data-aos="zoom-out" data-aos-delay="100">
              <em className="font-italic">About</em>
            </h1>
            <p className="text-xl text-gray-400 mb-10" data-aos="zoom-out" data-aos-delay="200">
              How it started and what we do
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
