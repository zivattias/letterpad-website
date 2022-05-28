import Image from "next/image";

import { EventAction } from "@/lib/track";
import { useTracking } from "@/hooks/usetracking";

const Footer = () => {
  const track = useTracking();
  return (
    <footer className='py-8 mt-20 text-sm text-gray-300 bg-black border-t border-gray-200'>
      <div className='mx-auto lg:w-4/5'>
        <div className='container flex flex-col flex-wrap px-4 mx-auto md:flex-row md:flex-nowrap md:items-center lg:items-start'>
          <div className='flex-shrink-0 pb-8 mx-auto w-80 text-center md:pb-0 md:mx-0 md:text-left'>
            <a className='flex justify-center items-center text-2xl font-bold text-gray-600 md:justify-start'>
              <Image
                src='/images/logos/lp-white.svg'
                width={40}
                height={40}
                alt='logo'
              />
            </a>
          </div>
          <div className='justify-end w-full text-center lg:flex lg:text-left'>
            <div className='px-4 w-full md:w-1/2 lg:w-2/3'>
              <p>
                Letterpad is an open source project liscensed under MIT. If you
                would like to contribute, visit our{" "}
                <a
                  href='https://github.com/letterpad/letterpad/issues'
                  target='_blank'
                  rel='noreferrer'
                  onClick={() => {
                    track({
                      eventAction: EventAction.Click,
                      eventCategory: "footer",
                      eventLabel: "github issues",
                    });
                  }}
                >
                  Github issues
                </a>{" "}
                page.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className='text-gray-500'>Copyright © 2022, Letterpad.</div>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <p className='text-base text-gray-400'></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
