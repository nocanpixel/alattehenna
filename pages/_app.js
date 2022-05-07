import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <div className='h-screen bg-sky-100 flex justify-center items-center'>
        <Component {...pageProps} />
      </div>
    </UserProvider>
  );
}

export default MyApp
