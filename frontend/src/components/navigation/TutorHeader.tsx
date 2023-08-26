import Link from 'next/link';
import type { ReactNode } from 'react';
import React, {useState} from 'react'

type TutorHeaderProps = {
  logo: ReactNode;
};

function TutorHeader({logo}: TutorHeaderProps){
  const [dropdownOpen, setdropdownOpen] = useState(false);

  const handleChange = () =>{
    setdropdownOpen(!dropdownOpen);
  }

  const MenuDisplay = () =>{
    if(dropdownOpen){
      return(
        <div className="top-full opacity-100 visible">
          <Link href="/"
              className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary">
              Dashboard
          </Link>
          <Link href="/"
              className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary">
              Settings
          </Link>
          <Link href="/"
              className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary">
              Earnings
          </Link>
          <Link href="/"
              className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary">
              Logout
          </Link>
        </div>
      )
    }else{
      return (
        <div>My Account</div>
      )
    }
  }

  return(
  <div className="flex flex-wrap items-center justify-between">
      <div>
        <nav>
          <ul className="navbar flex items-center text-xs font-medium text-gray-800">
            <Link className="" href="/">{logo}</Link>
              <li>
                  <Link href="/">Pick My Availability </Link>
              </li>
              <li>
                  <Link href="/">View Appointment Requests</Link>
              </li>
              <li>
                  <Link href="/">Upcoming Appointments</Link>
              </li>
              <li>
                  <Link href="/">View Wallet</Link>
              </li>
              <li>
                  <Link href="/">View History</Link>
              </li>
              <li>
                  <Link href="/">View Messages</Link>
              </li>
              <li>
                <button onClick={()=>{handleChange}}> 
                {MenuDisplay()}
                </button>
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

export { TutorHeader };
