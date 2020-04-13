import React, { PureComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { throttle } from '../util/util';
import { requestTimeout } from '../util/shims';
import { changeSplash, changeTransport, setIsMobile } from '../actions/global';
import GlobalStyles from '../styles/global-styles';
import Head from '../components/global/head';
import GridLines from '../components/global/grid-lines';
import Toolbar from '../components/global/toolbar';
import Curtain from '../components/global/curtain';
import Footer from '../components/global/footer';
import Modal from '../components/global/modal';
import SplashScreen from '../components/sections/splash-screen';
import { AppWrapper, OutterWrapper, InnerWrapper } from './styles';
import { Props as HeadProps } from '../components/global/head';
import { Configs, IStore } from '../../types';

interface ReduxProps {
    splashOpen?: boolean;
    transportOpen?: boolean;
    isMobile?: boolean;
    skillsTop?: number;
    changeTransport?: any;
    setIsMobile?: any;
    changeSplash?: any;
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

const mapStateToProps = ({ global, home }: IStore) => ({
    splashOpen: global.splashOpen,
    transportOpen: global.transportOpen,
    isMobile: global.isMobile,
    skillsTop: home.skillsTop,
    mode: global.mode,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return bindActionCreators(
        {
            changeSplash,
            changeTransport,
            setIsMobile,
        },
        dispatch
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
            this.props.changeSplash(false);
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
        }, this.props.configs.settings.transportDuration / 2);
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
                        <Toolbar />
                        {this.props.splashOpen && <SplashScreen />}
                        <InnerWrapper>{this.props.children}</InnerWrapper>
                    </OutterWrapper>
                    <Footer handleToTop={this.handleToTop} />
                    {this.props.transportOpen && (
                        <Modal>
                            <Curtain entrance="full" exit="full" duration={1275} />
                        </Modal>
                    )}
                </AppWrapper>
            </ThemeProvider>
        );
    }
}

const ConnectedLayout = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default (props: Omit<Props, 'configs'>) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        site
                    }
                }
                configs {
                    settings {
                        gridLines
                        transportDuration
                        mobileBreakpoint
                        splashScreenDebug
                        splashScreenTimeout
                    }
                }
            }
        `}
        render={data => <ConnectedLayout configs={data.configs} {...props} />}
    />
);
