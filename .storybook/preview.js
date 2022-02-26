import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import GlobalStyle from '../src/styles/global-styles';
import { AppWrapper } from '../src/components/layout/styles';
import GridLines from '../src/components/global/grid-lines';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import '../public/fonts/fonts.css';
import { Provider } from 'react-redux';
import { OutterWrapper, InnerWrapper } from './styles';
import { store } from '../src/store';

addParameters({
  options: {
    isFullScreen: true,
    theme: themes.dark,
  },
});

addDecorator((story) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppWrapper mode="dark">
        <GlobalStyle />
        <OutterWrapper>
          <GridLines />
          <InnerWrapper>{story()}</InnerWrapper>
        </OutterWrapper>
      </AppWrapper>
    </ThemeProvider>
  </Provider>
));
