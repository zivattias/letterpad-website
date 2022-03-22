import Image from "next/image";

const Header = () => {
  return (
    <nav className='flex flex-wrap justify-between items-center p-4'>
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
            href='https://letterpad.app/admin/register'
            className='inline-block mr-4 text-cyan-500 hover:text-cyan-700'
          >
            Register
          </a>
          <a
            href='https://letterpad.app/admin/login'
            className='inline-block text-cyan-500 hover:text-cyan-700'
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
