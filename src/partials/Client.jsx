import React from 'react';

import FeaturesImage from '../images/theme-1.png';

function Client() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans mb-4" data-aos="zoom-out">A light weight website</h2>
            <div class="max-w-2xl mx-auto"><p class="text-xl text-gray-400">We have also designed the website to be lightweight and is powered by GraphQL. By using modern web technologies and best practices, we are able to deliver a fast and responsive website that loads quickly and efficiently, even on slower connections.</p></div>
          </div>

          <div className="md:px-20 pb-16" data-aos="zoom-out">
            <img src={FeaturesImage} width="1104" height="512" alt="Features" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
