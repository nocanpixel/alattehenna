import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import { UserProvider } from '@auth0/nextjs-auth0';
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <NextUIProvider>
        <div>
          <Component {...pageProps} />
        </div>
      </NextUIProvider>
    </UserProvider>
  );
}

export default MyApp
