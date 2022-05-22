import Image from "next/image";

const Header = () => {
  return (
    <nav className='p-4 shadow-md'>
      <div className='flex flex-wrap items-center justify-between mx-auto lg:w-4/5'>
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
        <div className='flex flex-grow items-center justify-end'>
          <div className='font-bold text-sm'>
            <a
              href='https://github/letterpad/letterpad'
              className='font-normal inline-block mr-4 text-slate-700 hover:text-slate-800'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='https://docs.letterpad.app'
              className='font-normal inline-block mr-4 text-slate-700 hover:text-slate-800'
              target='_blank'
              rel='noreferrer'
            >
              Docs
            </a>
            <a
              href='https://letterpad.app/admin/register'
              className='font-normal inline-block mr-4 text-slate-700 hover:text-slate-800'
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
