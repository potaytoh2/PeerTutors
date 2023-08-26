import Link from 'next/link';
import type { ReactNode } from 'react';

type TutorHeaderProps = {
  logo: ReactNode;
};

const TutorHeader = (props: TutorHeaderProps) => (

  <div className="flex flex-wrap items-center justify-between">
    <div>
      <nav>
        <ul className="navbar flex items-center text-xs font-medium text-gray-800">
          <Link className="" href="/">{props.logo}</Link>
            <li>
                <Link href="/">My Account</Link>
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
);

export { TutorHeader };
