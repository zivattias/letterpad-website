import { EventAction, track } from "@/lib/track";

import ButtonLink from "../links/ButtonLink";

export const Creatives = () => {
  return (
    <div className='pb-20 mt-32 w-full md:w-full'>
      <h3 className='px-4 font-medium'>Creatives</h3>
      <div className='flex flex-wrap p-4 pt-0 font-normal text-gray-700'>
        <div className='mt-6 w-full md:pr-6 md:w-1/2'>
          Creatives are a way to create custom landing pages for your blog and
          also to showcase portfolios, events, art, tutorials and more. Its a
          way to create more image dominant pages. It provides you with a set of
          tools with which you can add blocks to your page and customize them.
          It has inbuilt parallax which vastly enhances the page with more
          immersive experience.
          <br />
          <br />
          You can try it out in the Creatives Playground by clicking on the
          button below.
          <br />
          <br />
          <ButtonLink
            href='https://letterpad.app/admin/try-creatives'
            variant='dark'
            target='_blank'
            className='text-sm uppercase rounded-none'
            onClick={() => {
              track({
                eventAction: EventAction.Click,
                eventCategory: "creatives",
                eventLabel: "try-creatives",
              });
            }}
          >
            Try Creatives
          </ButtonLink>
          <br />
        </div>
        <div className='flex flex-col flex-1 justify-center items-center mt-14 w-full lg:mt-0'>
          <div
            style={{ height: 340, overflowY: "scroll" }}
            className='mx-10 w-full'
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/images/creatives.jpg' alt='creatives' />
            <br />
            <br />
          </div>
          <i className='mt-2'>Scrollable image</i>
        </div>
      </div>
    </div>
  );
};
