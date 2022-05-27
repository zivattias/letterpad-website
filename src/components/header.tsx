import Image from "next/image";

import { EventAction } from "@/lib/track";
import { useTracking } from "@/hooks/usetracking";

const Header = () => {
  const track = useTracking();
  return (
    <nav className='p-4 shadow-md'>
      <div className='flex flex-wrap justify-between items-center mx-auto lg:w-4/5'>
        <div className='flex flex-shrink-0 items-center mr-6'>
          <Image
            src='https://res.cloudinary.com/abhisheksaha/image/upload/v1637920329/blog-images/f1exwgzylshcklpdsrxw.png'
            alt='Logo'
            width={36}
            height={36}
          />
          <span className='ml-2 text-xl font-semibold tracking-tight'>
            Letterpad
          </span>
        </div>
        <div className='flex flex-grow justify-end items-center'>
          <div className='text-sm font-bold'>
            <a
              href='https://github/letterpad/letterpad'
              className='text-slate-700 inline-block mr-4 font-normal hover:text-slate-800'
              target='_blank'
              rel='noreferrer'
              onClick={() => {
                track({
                  eventAction: EventAction.Click,
                  eventCategory: "github",
                  eventLabel: `header`,
                });
              }}
            >
              Github
            </a>
            <a
              href='https://docs.letterpad.app'
              className='text-slate-700 inline-block mr-4 font-normal hover:text-slate-800'
              target='_blank'
              rel='noreferrer'
              onClick={() => {
                track({
                  eventAction: EventAction.Click,
                  eventCategory: "docs",
                  eventLabel: `header`,
                });
              }}
            >
              Docs
            </a>
            <a
              href='https://letterpad.app/admin/register'
              className='text-slate-700 inline-block mr-4 font-normal hover:text-slate-800'
              onClick={() => {
                track({
                  eventAction: EventAction.Click,
                  eventCategory: "register",
                  eventLabel: `header`,
                });
              }}
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
