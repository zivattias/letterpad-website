const Footer = () => {
  return (
    <footer className='border-gray-200 border-t mt-40'>
      <div className='container flex flex-col flex-wrap mx-auto px-4 py-8 md:flex-nowrap md:flex-row md:items-center lg:items-start'>
        <div className='flex-shrink-0 mx-auto text-center w-64 md:mx-0 md:text-left'>
          <a className='flex font-bold items-center justify-center text-2xl text-gray-600 md:justify-start'>
            Letterpad
          </a>
          <p className='mt-2 text-gray-500 text-sm'>Licensed under MIT.</p>
        </div>
        <div className='justify-end mt-4 text-center w-full lg:flex lg:text-left'>
          <div className='px-4 w-full md:w-1/2 lg:w-1/3'>
            <ul className='list-none mb-8 space-y-2 text-sm'>
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
