import '@abraham/reflection'; // required by tsyringe
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DIContext } from 'my-fe-stack/di';
import { container } from 'tsyringe';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DIContext.Provider value={container}>
      <Component {...pageProps} />
    </DIContext.Provider>
  );
}

export default MyApp
