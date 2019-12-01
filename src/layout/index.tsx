import React, { PureComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { throttle, hasWindow } from '../util/util';
import { requestTimeout } from '../util/shims';
import { changeSplash, changeTransport, setIsMobile } from '../actions/global';
import GlobalStyles from '../styles/global-styles';
import Head from '../components/global/head';
import { IStore } from '../../types/state';
import GridLines from '../components/global/grid-lines';
import Toolbar from '../components/global/toolbar';
import SplashScreen from '../components/sections/splash-screen';
import { 
  AppWrapper, 
  OutterWrapper,
  InnerWrapper,
} from './styles';

type ReduxProps = {
  splashOpen?: boolean
  transportOpen?: boolean
  isMobile?: boolean
  skillsTop?: number
  changeTransport?: any
  setIsMobile?: any
  changeSplash?: any,
  mode?: string
}

type Props = {
  children?: any
  location?: {
    pathname: string
  }
  config?: any
}

export class Layout extends PureComponent<Props & ReduxProps> {
  static defaultProps = {

  };

  constructor(props: Props) {
    super(props);
    this.handleResize = throttle(this.handleResize, 100);
  }

  componentDidMount() {
    this.props.setIsMobile();
    const splashTimeout = this.props.config.splashScreenDebug 
      ? 6000000 
      : this.props.config.splashScreenTimeout;

    requestTimeout(() => {
      this.props.changeSplash(false);
    }, splashTimeout);

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  
  handleToTop = () =>{
    this.props.changeTransport(true);
    requestTimeout(() => {
      window.scrollTo(0, 0);
    }, this.props.config.transportDuration / 2.5);
  }

  handleResize = () => {
    if (this.props.isMobile && window.innerWidth > this.props.config.mobileBreakpoint) {
      this.props.setIsMobile();
    }

    if (!this.props.isMobile && window.innerWidth < this.props.config.mobileBreakpoint) {
      this.props.setIsMobile();
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper
          mode={this.props.mode} 
          splashOpen={this.props.splashOpen}
        >
            <GlobalStyles />
            <Head pathname={location.pathname} />
            <OutterWrapper>
              <GridLines gridLines={this.props.config.gridLines} />
              <Toolbar />
              {
                this.props.splashOpen &&
                <SplashScreen />
              }
              <InnerWrapper>
                {this.props.children}
              </InnerWrapper> 
            </OutterWrapper>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = ({ global, home }: IStore) => ({
  splashOpen: global.splashOpen,
  transportOpen: global.transportOpen,
  isMobile: global.isMobile,
  skillsTop: home.skillsTop,
  mode: global.mode
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators({
    changeSplash,
    changeTransport,
    setIsMobile,
  }, dispatch);
}

const ConnectedLayout = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default (props: any) => (
  <StaticQuery 
    query={graphql`
      query {
        site {
          siteMetadata {
            site
          }
        }
        staticData {
          config {
            gridLines
            transportDuration
            mobileBreakpoint
            splashScreenDebug
            splashScreenTimeout
          }
        }
      }
    `}
    render={data => (
      <ConnectedLayout 
        config={data.staticData.config}
        {...props} 
      />
    )}
  />
);







