import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

function Header() {
  return (
    <header className='absolute w-full z-30'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Site branding */}
          <div className='shrink-0 mr-4'>
            {/* Logo */}
            <Link className='block' to='/' aria-label='Letterpad'>
              <img
                className='mx-auto md:max-w-none'
                width={40}
                src={Logo}
                alt='Letterpad'
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className='flex grow'>
            {/* Desktop sign in links */}
            <ul className='flex grow justify-end flex-wrap items-center'>
              <li>
                <Link
                  className='font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'
                  to='/admin/login'
                  onClick={() => {
                    track({
                      eventAction: EventAction.Click,
                      eventCategory: "navbar",
                      eventLabel: `login`,
                    });
                  }}
                >
                  Sign in
                </Link>
              </li>
              <li>
                <a
                  className='font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'
                  href='https://demo.letterpad.app'
                  target="_blank"
                  onClick={() => {
                    track({
                      eventAction: EventAction.Click,
                      eventCategory: "navbar",
                      eventLabel: `demo`,
                    });
                  }}
                >
                  Demo
                </a>
              </li>
              <li className='ml-3'>
                <Link
                  className='btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group'
                  to='/admin/register'
                  onClick={() => {
                    track({
                      eventAction: EventAction.Click,
                      eventCategory: "navbar",
                      eventLabel: `register`,
                    });
                  }}
                >
                  Get Started{" "}
                  <span className='tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1'>
                    -&gt;
                  </span>
                </Link>
              </li>
              
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
