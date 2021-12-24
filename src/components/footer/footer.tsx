const Footer = () => {
  return (
    <footer className='mt-20 border-t border-gray-200'>
      <div className='container flex flex-col flex-wrap px-4 py-8 mx-auto md:flex-row md:flex-nowrap md:items-center lg:items-start'>
        <div className='flex-shrink-0 mx-auto w-64 text-center md:mx-0 md:text-left'>
          <a className='flex justify-center items-center text-2xl font-bold text-gray-600 md:justify-start'>
            Letterpad
          </a>
          <p className='mt-2 text-sm text-gray-500'>Licensed under MIT.</p>
        </div>
        <div className='justify-end mt-4 w-full text-center lg:flex lg:text-left'>
          <div className='px-4 w-full md:w-1/2 lg:w-1/3'>
            <ul className='mb-8 space-y-2 text-sm list-none'>
              <li>
                <a
                  className='text-gray-600 hover:text-gray-800'
                  href='https://gihub.com/letterpad/letterpad'
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className='text-gray-600 hover:text-gray-800'
                  href='https://github.com/letterpad/editor'
                >
                  Letterpad Editor
                </a>
              </li>
              <li>
                <a
                  className='text-gray-600 hover:text-gray-800'
                  href='https://github.com/letterpad/letterpad-client'
                >
                  Letterpad Client
                </a>
              </li>
              <li>
                <a
                  className='text-gray-600 hover:text-gray-800'
                  href='https://demo.letterpad.app'
                >
                  Demo Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <p className='text-base text-gray-400'></p>
      </div>
    </footer>
  );
};

export default Footer;
