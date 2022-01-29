import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import GlobalStyle from '../src/styles/global-styles';
import { AppWrapper } from '../src/layout/styles';
import GridLines from '../src/components/global/grid-lines';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import '../static/fonts/fonts.css';
import { OutterWrapper, InnerWrapper } from './styles';
import settings from '../data/configs/settings.json';
import { Provider } from 'react-redux';
import store from '../src/store';

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
          <GridLines gridLines={settings.gridLines} />
          <InnerWrapper>{story()}</InnerWrapper>
        </OutterWrapper>
      </AppWrapper>
    </ThemeProvider>
  </Provider>
));
