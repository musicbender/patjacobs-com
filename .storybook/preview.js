import React from 'react';
import { addParameters, addDecorator } from "@storybook/react"
import { action } from "@storybook/addon-actions"
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
    theme: themes.dark
  }
});

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

addDecorator(story => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppWrapper mode="dark">
        <GlobalStyle />
        <OutterWrapper>
          <GridLines gridLines={settings.gridLines} />
          <InnerWrapper>
            {story()}
          </InnerWrapper>
        </OutterWrapper>
      </AppWrapper>
    </ThemeProvider>
  </Provider>
));