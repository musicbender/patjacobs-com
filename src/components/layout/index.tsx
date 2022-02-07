import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { throttle } from '../../util/util';
import { requestTimeout } from '../../util/shims';
import { changeSplashOpen, changeTransport, setIsMobile } from '../../actions/global';
import GlobalStyles from '../../styles/global-styles';
import Head from '../global/head';
import GridLines from '../global/grid-lines';
import Toolbar from '../global/toolbar';
import Curtain from '../global/curtain';
import Footer from '../global/footer';
import Modal from '../global/modal';
import SplashScreen from '../sections/splash-screen';
import { AppWrapper, OutterWrapper, InnerWrapper } from './styles';
import { Store, HeadProps } from '../../types';

interface ReduxProps {
  splashOpen?: boolean;
  transportOpen?: boolean;
  isMobile?: boolean;
  skillsTop?: number;
  changeTransport?: any;
  setIsMobile?: any;
  changeSplashOpen?: any;
  mode?: string;
}

interface Props {
  children?: any;
  headProps?: HeadProps;
  location?: {
    pathname?: string;
  };
  configs: Configs;
}

const mapStateToProps = ({ global, home }: Store) => ({
  splashOpen: global.splashOpen,
  transportOpen: global.transportOpen,
  isMobile: global.isMobile,
  skillsTop: home.skillsTop,
  mode: global.mode,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      changeSplashOpen,
      changeTransport,
      setIsMobile,
    },
    dispatch,
  );
};

export class Layout extends PureComponent<Props & ReduxProps> {
  static defaultProps = {
    headProps: {},
  };

  constructor(props: Props) {
    super(props);
    this.handleResize = throttle(this.handleResize, 100);
  }

  componentDidMount() {
    this.props.setIsMobile();
    const splashTimeout = this.props.configs.settings.splashScreenDebug
      ? 6000000
      : this.props.configs.settings.splashScreenTimeout;

    requestTimeout(() => {
      this.props.changeSplashOpen(false);
    }, splashTimeout);

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleToTop = () => {
    this.props.changeTransport(true, this.props.configs.settings.transportDuration);
    requestTimeout(() => {
      window.scrollTo(0, 0);
    }, this.props.configs.settings.transportDuration / 2 - 500);
  };

  handleResize = () => {
    const { isMobile, configs } = this.props;
    if (isMobile && window.innerWidth > configs.settings.mobileBreakpoint) {
      this.props.setIsMobile();
    }

    if (!isMobile && window.innerWidth < configs.settings.mobileBreakpoint) {
      this.props.setIsMobile();
    }
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper mode={this.props.mode} splashOpen={this.props.splashOpen}>
          <GlobalStyles />
          <Head
            pathname={(this.props.location && this.props.location.pathname) || null}
            {...this.props.headProps}
          />
          <OutterWrapper>
            <GridLines gridLines={this.props.configs.settings.gridLines} />
            <Toolbar location={this.props.location} handleToTop={this.handleToTop} />
            {this.props.splashOpen && <SplashScreen />}
            <InnerWrapper>{this.props.children}</InnerWrapper>
          </OutterWrapper>
          <Footer handleToTop={this.handleToTop} />
          {this.props.transportOpen && (
            <Modal>
              <Curtain
                entrance="full"
                exit="full"
                duration={this.props.configs.settings.curtainDuration}
              />
            </Modal>
          )}
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
