import React, { useState } from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import store from '@store/index';
import '../../public/fonts/fonts.css';

const PJApp = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
};

export default withRedux(() => store)(PJApp);
