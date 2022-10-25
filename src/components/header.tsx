import Image from "next/image";
import { useState } from "react";
import { ImGithub } from "react-icons/im";

import { EventAction } from "@/lib/track";
import { useTracking } from "@/hooks/usetracking";

import ButtonLink from "./links/ButtonLink";

const Header = () => {
  const track = useTracking();
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className='fixed top-0 z-20 p-4 px-2 py-5 w-full bg-white rounded border-gray-200 shadow-md sm:px-4'>
      <div className='container flex flex-wrap justify-between items-center mx-auto lg:w-4/5'>
        <a href='https://flowbite.com' className='flex items-center'>
          <Image
            src='/images/logos/lp-dark.svg'
            alt='Logo'
            width={36}
            height={36}
          />
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Letterpad
          </span>
        </a>
        <button
          data-collapse-toggle='mobile-menu'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none'
          aria-controls='mobile-menu'
          aria-expanded='false'
          onClick={() => setOpen(!isOpen)}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
          <svg
            className='hidden w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${!isOpen && "hidden"}`}
          id='mobile-menu'
        >
          <ul className='flex flex-col mt-4 md:flex-row md:mt-0 md:space-x-8 md:text-sm md:font-medium'>
            <li className='flex justify-center items-center py-4 md:py-0'>
              <a
                href='https://letterpad.app/admin/register'
                className='text-slate-700 inline-block mr-0 font-normal md:mr-4 hover:text-slate-800'
                target='_blank'
                rel='noreferrer'
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
            </li>

            <li className='flex justify-center items-center py-4 md:py-0'>
              <a
                href='https://docs.letterpad.app'
                className='text-slate-700 inline-block mr-0 font-normal md:mr-4 hover:text-slate-800'
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
            </li>
            <li className='flex justify-center items-center py-4 md:py-0'>
              <a
                href='https://github.com/letterpad/letterpad'
                className='text-slate-700 inline-block mr-0 font-normal md:mr-4 hover:text-slate-800'
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
                <ImGithub size={20} />
              </a>
            </li>
            <li className='flex justify-center items-center py-4 md:py-0'>
              <ButtonLink
                href='/admin/login'
                variant='dark'
                target='_blank'
                className='text-xs uppercase rounded-none'
                onClick={() => {
                  track({
                    eventAction: EventAction.Click,
                    eventCategory: "login",
                    eventLabel: `header`,
                  });
                }}
              >
                Login
              </ButtonLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
