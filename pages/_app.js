import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import { UserProvider } from '@auth0/nextjs-auth0';
import { NextUIProvider } from '@nextui-org/react';

import { StateMachineProvider, createStore } from 'little-state-machine';


createStore({})

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <NextUIProvider>
        <StateMachineProvider>
          <div>
            <Component {...pageProps} />
          </div>
        </StateMachineProvider>
      </NextUIProvider>
    </UserProvider>
  );
}

export default MyApp
