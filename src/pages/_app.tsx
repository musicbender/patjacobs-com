import React, { FC, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import { wrapper } from '@store';
import '../../public/fonts/fonts.css';
import theme from '@styles/theme';
import { useSplashScreen } from '@hooks';

const PJApp: FC<AppProps> = ({ Component, pageProps, router }) => {
  const [queryClient] = useState(() => new QueryClient());
  useSplashScreen();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default wrapper.withRedux(PJApp);
