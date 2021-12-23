import Image from 'next/image';

const Header = () => {
  return (
    <nav className='flex flex-wrap items-center justify-between p-6'>
      <div className='flex flex-shrink-0 items-center mr-6'>
        <Image
          src='https://res.cloudinary.com/abhisheksaha/image/upload/v1637920329/blog-images/f1exwgzylshcklpdsrxw.png'
          alt='Logo'
          width={36}
          height={36}
        />
        <span className='font-semibold ml-2 text-xl tracking-tight'>
          Letterpad
        </span>
      </div>
      <div className='block lg:hidden'>
        <button className='border border-teal-400 flex items-center px-3 py-2 rounded text-slate-700 hover:border-white hover:text-slate-900'>
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className='block flex-grow w-full lg:flex lg:items-center lg:justify-end lg:w-auto'>
        <div className='text-sm'>
          <a
            href='https://github.com/letterpad/letterpad'
            className='block mr-4 mt-4 text-slate-700 lg:inline-block lg:mt-0 hover:text-slate-900'
          >
            Github
          </a>
          <a
            href='https://demo.letterpad.app'
            className='block mr-4 mt-4 text-slate-700 lg:inline-block lg:mt-0 hover:text-slate-900'
          >
            Demo Blog
          </a>
        </div>
        <div>
          <a
            href='#'
            className='border border-white inline-block leading-none mt-4 px-4 py-2 rounded text-green-700 text-sm lg:mt-0 hover:bg-white hover:border-transparent hover:text-teal-500'
          ></a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
