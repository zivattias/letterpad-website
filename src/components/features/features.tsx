import Image from "next/image";

import CDNIcon from "./cdn.svg";
import ConnectionIcon from "./connection.svg";
import EyeIcon from "./eye.svg";
import FlashIcon from "./flash.svg";
import IntegratedIcon from "./integrated.svg";
import UsersIcon from "./users.svg";

export const Features = () => {
  return (
    <div className='w-full md:w-full'>
      <h3 className='px-4'>Features</h3>
      <div className='flex flex-wrap'>
        <div className='w-full md:w-4/12'>
          <div className='flex relative flex-col mt-4'>
            <div className='flex-auto px-4 py-5'>
              <h6 className='text-l flex gap-2 items-center mb-1 font-semibold'>
                <Image
                  src={FlashIcon}
                  width='24'
                  height='24'
                  alt='Fast and Flexible'
                />
                Fast and Flexible
              </h6>
              <p className='mt-3 mb-4 text-sm text-gray-500'>
                Letterpad uses Graphql which makes your blog faster due to
                minimal data fetching. This also makes it possible to create a
                client with any language.
              </p>
            </div>
          </div>
          <div className='flex relative flex-col items-center min-w-0'>
            <div className='flex-auto px-4 py-5'>
              <h6 className='text-l flex gap-2 items-center mb-1 font-semibold'>
                <Image src={CDNIcon} width='24' height='24' alt='Image CDN' />
                Image CDN
              </h6>
              <p className='mt-3 mb-4 text-sm text-gray-500'>
                Letterpad provides services like UnSplash and Cloudinary to
                provide optimsed images for screens of different size.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full md:w-4/12'>
          <div className='flex relative flex-col mt-4 min-w-0'>
            <div className='flex-auto px-4 py-5'>
              <h6 className='text-l flex gap-2 items-center mb-1 font-semibold'>
                <Image
                  src={IntegratedIcon}
                  width='24'
                  height='24'
                  alt='Integrations'
                />
                Integrations
              </h6>
              <p className='mt-3 mb-4 text-sm text-gray-500'>
                It can easily be integrated with Cloudinary for image cdn,
                Unsplash, Mysql, Postgress, Sqlite, Sentry, Google Analytics
                etc.
              </p>
            </div>
          </div>
          <div className='flex relative flex-col min-w-0'>
            <div className='flex-auto px-4 py-5'>
              <h6 className='text-l flex gap-2 items-center mb-1 font-semibold'>
                <Image
                  src={ConnectionIcon}
                  width='24'
                  height='24'
                  alt='AI Enabled Editor'
                />
                AI Enabled Editor
              </h6>
              <p className='mt-3 mb-4 text-sm text-gray-500'>
                Using the AI Enabled editor, you will be able to fix grammatical
                mistakes and take advantage of better suggestions.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full md:w-4/12'>
          <div className='flex relative flex-col mt-4 min-w-0'>
            <div className='flex-auto px-4 py-5'>
              <h6 className='text-l flex gap-2 items-center mb-1 font-semibold'>
                <Image
                  src={EyeIcon}
                  width='24'
                  height='24'
                  alt='Build audience'
                />
                Build audience
              </h6>
              <p className='mt-3 mb-4 text-sm text-gray-500'>
                With the subscribers features, you will be able to develop your
                audience with time. They will be notified with every post you
                publish.
              </p>
            </div>
          </div>
          <div className='flex relative flex-col min-w-0'>
            <div className='flex-auto px-4 py-5'>
              <h6 className='text-l flex gap-2 items-center mb-1 font-semibold'>
                <Image
                  src={UsersIcon}
                  width='24'
                  height='24'
                  alt='Multiuser Platform'
                />
                Multiuser Platform
              </h6>
              <p className='mt-3 mb-4 text-sm text-gray-500'>
                Letterpad allows multi registration which allows you to have
                multiple users with a single installation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
