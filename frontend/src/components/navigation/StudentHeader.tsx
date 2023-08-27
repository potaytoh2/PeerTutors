import Link from 'next/link';
import type { ReactNode } from 'react';
import React, {useState} from 'react'
import dropdownlist from './MyAccount/dropdownlist.json';
import {Button} from '../button/Button'

type StudentHeaderProps = {
  logo: ReactNode;
};

function StudentHeader({logo}: StudentHeaderProps){
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const handleToggleDropdown = () => {
    setdropdownOpen(prev => !prev); // Toggle the value using the previous value
  };

  {console.log(dropdownOpen)}
  return(
  <div className="flex flex-wrap items-center justify-between">
      <div>
        <nav>
          <ul className="navbar flex items-center text-xs font-medium text-gray-800">
            <Link className="" href="/">{logo}</Link>
              <li>
                  <Link href="/">Search for Tutors </Link>
              </li>
              <li>
                  <Link href="/">View Appointment Requests</Link>
              </li>
              <li>
                  <Link href="/">Upcoming Appointments</Link>
              </li>
              <li>
                  <Link href="/">View History</Link>
              </li>
              <li>
                  <Link href="/">View Messages</Link>
              </li>
              <li>
              <Button onClick={handleToggleDropdown}>
                My Account
              </Button>
              {dropdownOpen && 
                <div className='absolute overflow-hidden'>
                  <ul>
                  {dropdownlist.map((item)=>(
                    <li key={item.page} 
                    className="px-4 py-2 hover:bg-primary-300 bg-primary-100 cursor-pointer min-w-full max-w-md">
                      <h3>{item.page}</h3>
                    </li>
                  ))}
                  </ul>
                </div>
                }
              </li>
          </ul>
        </nav>
        
                
      </div>

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
  )
};

export { StudentHeader };
