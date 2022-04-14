import React, { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { wrapper } from '@store/index';
import { AnimatePresence } from 'framer-motion';
import '../../public/fonts/fonts.css';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import { useSplashScreen } from 'src/hooks/use-splash-screen';

const PJApp = ({ Component, pageProps, router }) => {
  const [queryClient] = useState(() => new QueryClient());
  // useSplashScreen();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default wrapper.withRedux(PJApp);
