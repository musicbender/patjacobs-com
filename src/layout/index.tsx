import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/global-styles';
import Head from '../components/global/head';
import { 
  AppWrapper, 
  MainWrapper, 
  OutterWrapper,
  InnerWrapper 
} from './styles';

interface IProps {
  children?: any
  location: {
    pathname: string
  }
}

export default ({ children, location }: IProps) => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <Head pathname={location.pathname} />
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <OutterWrapper>
            <InnerWrapper>
              {children}
            </InnerWrapper> 
          </OutterWrapper>
        </MainWrapper>
      </ThemeProvider>
    </AppWrapper>
  )
}
