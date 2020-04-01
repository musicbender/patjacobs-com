import React, { PureComponent } from 'react'
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import Header from '../../sections/header';
import AboutMe from '../../sections/about-me';
import RecentWork from '../../sections/recent-work';
import SkillsSection from '../../sections/skills';
import { setAboutTop } from '../../../actions/home';
import { throttle } from '../../../util/util';
import { HomePage, OutterWrapper, DotSequenceWrapper } from './styles';
import { Modes } from '../../../../types';
import CavieDots from '../../sections/cavie-dots';

type ReduxProps = {
  mode?: Modes,
  pageLoaded: boolean,
  splashOpen: boolean,
  isMobile: boolean,
  aboutTop: number,
  recentWorkTop: number,
  skillsTop: number,
  setAboutTop: () => AnyAction,
}

type State = {
  atAbout: boolean,
  atBottom: boolean,
}

const mapStateToProps = ({ global, home }) => ({
  pageLoaded: global.pageLoaded,
  splashOpen: global.splashOpen,
  mode: global.mode,
  isMobile: global.isMobile,
  aboutTop: home.aboutTop,
  recentWorkTop: home.recentWorkTop,
  skillsTop: home.skillsTop,
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators({
    setAboutTop
  }, dispatch);
}

class Home extends PureComponent<ReduxProps, State> {
  constructor(props: ReduxProps) {
    super(props);
    this.handleScroll = throttle(this.handleScroll.bind(this), 80);
    this.state = {
      atAbout: false,
      atBottom: false,
    }
  }

  componentDidMount(): void {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e: Event): void {
    const scrollY = window.scrollY;

    if (scrollY >= this.props.aboutTop) {
      if (!this.state.atAbout) {
        this.setState({ atAbout: true });
      }

      if (scrollY >= this.props.skillsTop) {
        if (!this.state.atBottom) {
          this.setState({ atBottom: true });
        }
      }
    }

    if (scrollY < this.props.skillsTop) {
      if (this.state.atBottom) {
        this.setState({ atBottom: false });
      }

      if (scrollY < this.props.aboutTop) {
        if (this.state.atAbout) {
          this.setState({ atAbout: false });
        }
      }
    }
  }

  handleBottom(atBottom = !this.state.atBottom) {
    this.setState({ atBottom });
  }

  render() {
    console.log('home at bottom:', this.state.atBottom);
    
    return (
      <HomePage>
        <OutterWrapper>
          <Header />
          <DotSequenceWrapper>
            <AboutMe
              atAbout={this.state.atAbout}
              setAboutTop={this.props.setAboutTop}
              isMobile={this.props.isMobile}
            />
            <RecentWork />
            <CavieDots baseStart={this.props.recentWorkTop - 400} atBottom={this.state.atBottom} />
            <SkillsSection atBottom={this.state.atBottom} />
          </DotSequenceWrapper>
        </OutterWrapper>
      </HomePage>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
