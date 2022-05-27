import Image from "next/image";

import { EventAction } from "@/lib/track";
import { useTracking } from "@/hooks/usetracking";

import ButtonLink from "@/components/links/ButtonLink";

const Hero = () => {
  const track = useTracking();
  return (
    <section className='bg-white'>
      <div className='container flex flex-col gap-8 items-center mx-auto my-12 md:flex-row md:my-24'>
        {/* <!--Left Col--> */}
        <div className='w-full text-center lg:py-6 lg:w-1/2'>
          <div className='shadow-lg'>
            <Image
              src='/images/hero1.png'
              alt='Demo Image'
              width={780}
              height={440}
              layout='responsive'
              objectFit='fill'
            />
          </div>
        </div>
        {/* <!--Right Col--> */}
        <div className='flex flex-col justify-center items-start px-4 pt-12 pb-24 w-full lg:w-1/2'>
          <p className='tracking-loose uppercase'></p>
          <h1 className='my-4 text-3xl font-medium'>
            Letterpad is a blogging platform focussed on speed, ease of use and
            versatility.
          </h1>
          <p className='mb-4 leading-normal'>
            Letterpad has a minimal footprint in terms of features and are best
            suited for personal blogs.
          </p>
          <div className='flex gap-2 items-center mt-6'>
            <ButtonLink
              href='/admin/login'
              variant='outline'
              target='_blank'
              className='text-sm uppercase rounded-none'
              onClick={() => {
                track({
                  eventAction: EventAction.Click,
                  eventCategory: "login",
                  eventLabel: `Hero-CTA`,
                });
              }}
            >
              Login
            </ButtonLink>
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
            <div>
              <a
                href='https://www.producthunt.com/posts/letterpad?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-letterpad'
                target='_blank'
                rel='noreferrer'
                className='mt-1'
              >
                <Image
                  src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=336840&theme=light'
                  alt='Letterpad - A&#0032;Blogging&#0032;Platform&#0032;without&#0032;any&#0032;paywall&#0032;and&#0032;distractions&#0046; | Product Hunt'
                  // style={{ width: 250, height: 54 }}
                  width={176}
                  height={40}
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
