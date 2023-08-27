import Link from 'next/link';
import { useState, ReactNode } from 'react';
import { isAuthenticated } from '@/utils/auth';
import dropdownlist from './MyAccount/dropdownlist.json';
import { Button } from '@/button/Button';

type INavbarProps = {
  logo: ReactNode;
};

function NavbarTwoColumns({ logo }: INavbarProps) {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const handleToggleDropdown = () => {
    setdropdownOpen(prev => !prev); // Toggle the value using the previous value
  };

  console.log(dropdownOpen);

  return (
    <div className="flex flex-wrap items-center justify-between">
      <div>
        <Link href="/">{logo}</Link>
      </div>

      <nav>
        <ul className="navbar flex items-center text-xl font-medium text-gray-800">
          <li>
            <Link href="/">Home</Link>
          </li>
          {isAuthenticated() ? (
            <li>
            <Link href="./student">Student</Link>
            </li>
          ) : (<div></div>)}
          {isAuthenticated() ? (
            <li>
            <Link href="./tutor">Tutor</Link>
            </li>
          ) : (<div></div>)}
          {isAuthenticated() ? (
            <div>
            <li className="w-full inline-block">
              <Button onClick={handleToggleDropdown}>
                My Account
              </Button>
              {dropdownOpen &&
                <div className='absolute overflow-hidden'>
                  <ul>
                    {dropdownlist.map((item) => (
                      <a href={item.href}>
                        <li key={item.page}
                          className="px-4 py-2 hover:bg-primary-300 bg-primary-100 text-xs cursor-pointer w-full">
                          <h3>{item.page}</h3>
                        </li>
                      </a>
                    ))}
                  </ul>
                </div>
              }
            </li>
            </div>
          ) : (
            <li>
              <Link href="/login">Sign in</Link>
            </li>
          )}
        </ul>
      </nav>

      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply mr-5;
          }
        `}
      </style>
    </div>
  );
}

export { NavbarTwoColumns };