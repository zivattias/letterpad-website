import Image from "next/image";

const Footer = () => {
  return (
    <footer className='bg-black border-gray-200 border-t mt-20 py-8 text-gray-300 text-sm'>
      <div className='mx-auto lg:w-4/5'>
        <div className='container flex flex-col flex-wrap mx-auto px-4 md:flex-nowrap md:flex-row md:items-center lg:items-start'>
          <div className='flex-shrink-0 mx-auto text-center w-80 md:mx-0 md:text-left'>
            <a className='flex font-bold items-center justify-center text-2xl text-gray-600 md:justify-start'>
              <Image
                src='/images/logos/lp-white.svg'
                width={40}
                height={40}
                alt='logo'
              />
            </a>
          </div>
          <div className='justify-end text-center w-full lg:flex lg:text-left'>
            <div className='px-4 w-full md:w-1/2 lg:w-2/3'>
              <p>
                Letterpad is a blogging platform focused on speed, ease of use
                and versatility. It has been openly developed from the ground up
                to enable anyone to share their creativity online.
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
