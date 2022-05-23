import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import { UserProvider } from '@auth0/nextjs-auth0';
import { NextUIProvider } from '@nextui-org/react';
import MyStyles from '../styles/MyStyles.module.css'
import { StateMachineProvider, createStore } from 'little-state-machine';


createStore({})

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <NextUIProvider>
        <StateMachineProvider>
          <div className={MyStyles.all}>
            <Component {...pageProps} />
          </div>
        </StateMachineProvider>
      </NextUIProvider>
    </UserProvider>
  );
}

export default MyApp
