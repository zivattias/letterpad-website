import React from 'react';

import Header from '../partials/Header';
import AboutHero from '../partials/HeroAbout';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="grow">
        <AboutHero />
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-20 border-b border-gray-800">
              <div class="text-center pb-12 md:pb-20">
                <h2 class="h2 font-uncut-sans aos-init aos-animate" data-aos="zoom-out">
                  Why Letterpad ?
                </h2>
                <p className=' mb-2'>( From the Author )</p>
              </div>
              <div className="max-w-sm md:max-w-3xl mx-auto text-xl text-gray-400 mb-10 aos-init aos-animate font-uncut-sans font-extralight">
                As passionate blogger myself, I was never fully satisfied with the blogging platforms that were available to us. I found that many of them were not performant, had paywalls, were overly complicated, not maintained, no code-blocks for technical articles or didn't allow for domain mapping. Dissatisfied with these limitations, I set out to create my own platform that addressed all of these issues.
                <br />
                <br />
                And thus, Letterpad was born.
                <br />
                <br />
                Letterpad is fast and efficient, with a clean and user-friendly interface. There are no paywalls or hidden fees – I believe that bloggers should be able to share their content freely and without hindrance.

                I also made sure to include the ability for users to map their own domains to their blogs. This is a crucial feature for many bloggers, as it allows them to have a professional and personalized presence on the web.

                <br />
                <br />
                I felt the need of composing stories which had more visual content with images. Something that would allow me to connect with my audience on an emotional level. Pictures have the power to evoke feelings and memories, and when combined with a well-written story, they can create a truly immersive and powerful experience. Thats how Creatives was added.
                <br />
                <br />

                By making Letterpad open source, I could not only allow others to contribute to the development of the platform, but we could also build a community of users who are passionate about blogging and open source.

                We believe that open source is more than just a development model – it's a philosophy that values collaboration, transparency, and inclusivity. By making Letterpad open source, we can ensure that it remains true to these values and that it is always evolving and improving.

                <br />
                <br />
                But thats not all, I am constantly working on improving and adding new features to Letterpad. Our goal is to provide the best possible experience for our users, and we're excited to see where this journey takes us.
                <br />
                <br />
                Thank you for choosing our platform and being a part of our story.
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />

    </div>
  );
}

export default Home;