import Image from "next/image";

const Header = () => {
  return (
    <nav className='flex flex-wrap justify-between items-center p-6'>
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
      <div className='block lg:hidden'>
        <button className='text-slate-700 flex items-center px-3 py-2 rounded border border-teal-400 hover:text-slate-900 hover:border-white'>
          <svg
            className='w-3 h-3 fill-current'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className='block flex-grow w-full lg:flex lg:justify-end lg:items-center lg:w-auto'>
        <div className='text-sm'>
          <a
            href='https://letterpad.app/admin/register'
            className='text-slate-700 block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-slate-900'
          >
            Register
          </a>
          <a
            href='https://letterpad.app/admin/login'
            className='text-slate-700 block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-slate-900'
          >
            Login
          </a>
          <a
            href='https://demo.letterpad.app'
            className='text-slate-700 block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-slate-900'
          >
            Demo Blog
          </a>
        </div>
        <div>
          <a
            href='#'
            className='inline-block px-4 py-2 mt-4 text-sm leading-none text-green-700 rounded border border-white lg:mt-0 hover:text-teal-500 hover:bg-white hover:border-transparent'
          ></a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
