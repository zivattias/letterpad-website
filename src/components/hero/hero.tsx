import Image from "next/image";

import { EventAction } from "@/lib/track";
import { useTracking } from "@/hooks/usetracking";

import ButtonLink from "@/components/links/ButtonLink";

import HeroImage from "./heroimage.svg";

const Hero = () => {
  const track = useTracking();
  return (
    <section className='bg-white'>
      <div className='container flex flex-col-reverse gap-8 items-start lg:flex-row lg:mx-auto'>
        {/* <!--Left Col--> */}
        <div className='hidden w-full text-center lg:block lg:py-6 lg:w-1/2'>
          <div className=''>
            <Image
              src={HeroImage}
              alt='Demo Image'
              width={400}
              height={400}
              layout='responsive'
              objectFit='contain'
              objectPosition='-30px -20px'
            />
          </div>
        </div>
        {/* <!--Right Col--> */}
        <div className='pb-18 flex flex-col justify-center items-start px-4 pt-12 w-full lg:w-1/2'>
          <p className='tracking-loose uppercase'></p>
          <h1
            className='my-4 text-3xl font-semibold'
            style={{ fontSize: "28px", lineHeight: "43.48px" }}
          >
            Letterpad is a free blog publishing platform. It provides
            distraction free writing and uses language tool to help you write
            better.
          </h1>
          <p
            className='mb-4 leading-normal'
            style={{ fontSize: "20px", lineHeight: "31px" }}
          >
            Best suited for personal blogs.
          </p>
          <div className='flex gap-2 items-center mt-6'>
            <ButtonLink
              href='/admin/register'
              variant='dark'
              target='_blank'
              className='text-sm uppercase rounded-none'
              onClick={() => {
                track({
                  eventAction: EventAction.Click,
                  eventCategory: "register",
                  eventLabel: `Hero-CTA`,
                });
              }}
            >
              Register
            </ButtonLink>
            <div className='mt-2'>
              <a
                href='https://www.producthunt.com/posts/letterpad?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-letterpad'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=336840&theme=light'
                  alt='Letterpad - A&#0032;Blogging&#0032;Platform&#0032;without&#0032;any&#0032;paywall&#0032;and&#0032;distractions&#0046; | Product Hunt'
                  // style={{ width: 250, height: 54 }}
                  width={176}
                  height={40}
                  className='grayscale'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
