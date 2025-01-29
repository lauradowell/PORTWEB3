import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics /> {/* Enables Vercel Analytics */}
    </>
  );
}

export default MyApp;
