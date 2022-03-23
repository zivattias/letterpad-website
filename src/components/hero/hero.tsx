import Image from "next/image";

import ButtonLink from "@/components/links/ButtonLink";

const Hero = () => {
  return (
    <section className='bg-white'>
      <div className='container flex flex-col items-center mx-auto my-12 md:flex-row md:my-24'>
        {/* <!--Left Col--> */}
        <div className='flex flex-col items-start justify-center pb-24 pt-12 px-4 w-full lg:w-1/2'>
          <p className='tracking-loose uppercase'></p>
          <h1 className='font-bold my-4 text-3xl'>
            Letterpad is a blog publishing platform.
          </h1>
          <p className='leading-normal mb-4'>
            Letterpad has a minimal footprint in terms of features and are best
            suited for personal blogs.
          </p>
          <p className='flex gap-2'>
            <ButtonLink
              className='mt-6'
              href='/admin/login'
              variant='outline'
              target='_blank'
            >
              Login
            </ButtonLink>
            <ButtonLink
              className='mt-6'
              href='/admin/register'
              variant='dark'
              target='_blank'
            >
              Register
            </ButtonLink>
          </p>
          <p className='mt-20'>
            <a
              href='https://www.producthunt.com/posts/letterpad?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-letterpad'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=336840&theme=light'
                alt='Letterpad - A&#0032;Blogging&#0032;Platform&#0032;without&#0032;any&#0032;paywall&#0032;and&#0032;distractions&#0046; | Product Hunt'
                // style={{ width: 250, height: 54 }}
                width={250}
                height={54}
              />
            </a>
          </p>
        </div>
        {/* <!--Right Col--> */}
        <div className='text-center w-full lg:py-6 lg:w-1/2'>
          <Image
            src='/images/demo.png'
            alt='Demo Image'
            width={800}
            height={520}
            objectFit='contain'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
