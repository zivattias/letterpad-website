import Image from 'next/image';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

function HomePage1() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='flex flex-col items-center justify-center layout min-h-screen text-center'>
            <h1>Letterpad is a blog publishing platform.</h1>
            <p className='mt-2 text-gray-800 text-sm'>
              It is also an opensource project.
            </p>
            <p className='mt-2 text-gray-700 text-sm'>
              <ArrowLink href='https://github.com/letterpad/letterpad'>
                See the repository
              </ArrowLink>
            </p>

            <ButtonLink
              className='mt-6'
              href='/demo'
              variant='light'
              target='_blank'
            >
              Demo
            </ButtonLink>
          </div>

          <Image
            src='/images/hero.png'
            alt='Demo Image'
            width={800}
            height={500}
            objectFit='cover'
          />
        </section>
      </main>
    </>
  );
}

export default function Homepage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='container flex flex-col items-center mx-auto my-12 md:flex-row md:my-24'>
            {/* <!--Left Col--> */}
            <div className='flex flex-col items-start justify-center pb-24 pt-12 px-4 w-full lg:w-1/2'>
              <p className='tracking-loose uppercase'>Open Source</p>
              <h1 className='font-bold my-4 text-3xl'>
                Letterpad is a blog publishing platform.
              </h1>
              <p className='leading-normal mb-4'>
                Letterpad has a minimal footprint in terms of features and are
                best suited for personal blogs.
              </p>
              <ButtonLink
                className='mt-6'
                href='/demo'
                variant='light'
                target='_blank'
              >
                Demo
              </ButtonLink>
            </div>
            {/* <!--Right Col--> */}
            <div className='text-center w-full lg:py-6 lg:w-1/2'>
              <Image
                src='/images/hero.png'
                alt='Demo Image'
                width={800}
                height={520}
                objectFit='contain'
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
