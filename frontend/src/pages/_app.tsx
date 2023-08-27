import { useState } from 'react';
import '../styles/global.css';
// import { AuthProvider } from "react-auth-kit";

import type { AppProps } from 'next/app';

// const MyApp = ({ Component, pageProps }: AppProps) => (
//   // <AuthProvider authType={"cookie"}
//   // authName={"_auth"}
//   // cookieDomain={window.location.hostname}
//   // cookieSecure={false}>
//     <Component {...pageProps} />
//   // </AuthProvider> 
// );

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState([]);
  return (
    <div>
      <Component {...pageProps}>
    {/* <AuthProvider authType="cookie" authName="_auth" cookieDomain={window.location.hostname} cookieSecure={false}>
    </AuthProvider> */}
    </Component>

    </div>
  );
}

export default MyApp;
