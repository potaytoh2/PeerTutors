import { AppConfig } from '../utils/AppConfig';
import { useRouter } from 'next/router';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '35' : '28';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-3xl';

    const router = useRouter();
  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
        <img
        className="mr-1"
        src={`${router.basePath}/assets/images/logo.png`} 
        alt={AppConfig.site_name}
        width={size}
        height={size}
      />
      {/* <svg
        className="mr-1 stroke-current text-primary-500"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <rect x="3" y="12" width="6" height="8" rx="1" />
        <rect x="9" y="8" width="6" height="12" rx="1" />
        <rect x="15" y="4" width="6" height="16" rx="1" />
        <path d="M4 20h14" />
      </svg> */}

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
