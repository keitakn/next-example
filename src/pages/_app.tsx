import { MantineProvider } from '@mantine/core';
import { type AppProps } from 'next/app';
import Head from 'next/head';
import type { Session } from 'next-auth/core/types';
import { SessionProvider } from 'next-auth/react';
const App = (props: AppProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { Component, pageProps } = props;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { session } = pageProps;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <SessionProvider session={session as Session}>
          <Component {...pageProps} />
        </SessionProvider>
      </MantineProvider>
    </>
  );
};

export default App;
