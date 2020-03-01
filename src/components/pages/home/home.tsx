import React, { PureComponent } from 'react'
import { bindActionCreators, Dispatch, AnyAction} from 'redux';
import { connect } from 'react-redux';
import { setAboutTop } from '../../../actions/home';
import { throttle } from '../../../util/util';
import { HomePage, OutterWrapper, DotSequenceWrapper } from './styles';
import { Modes } from '../../../../types';

type ReduxProps = {
  mode?: Modes,
  pageLoaded: boolean,
  splashOpen: boolean,
  isMobile: boolean,
  aboutTop: number,
  recentWorkTop: number,
  skillsTop: number,
}

type State = {
  atAbout: boolean,
  atBottom: boolean,
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
    return (
      <HomePage>
        <OutterWrapper>
          <DotSequenceWrapper>
            home home home
          </DotSequenceWrapper>
        </OutterWrapper>
      </HomePage>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
