import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import { UserProvider } from '@auth0/nextjs-auth0';
import { NextUIProvider } from '@nextui-org/react';
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <NextUIProvider>
        <div className='h-screen md:bg-sky-100 flex justify-center items-center'>
          <Component {...pageProps} />
          <Navbar/>
        </div>
      </NextUIProvider>
    </UserProvider>
  );
}

export default MyApp
