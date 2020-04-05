import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Heading from '../../global/heading';
import { setSkillsTop } from '../../../actions/home';
import { hasWindow, throttle, minMax } from '../../../util/util';
import { SkillsWrapper, DotWrapper, StyledDotFormation } from './styles';
import { StaticQuery, graphql } from 'gatsby';
import { Configs, Gcms_Skill, Query } from '../../../../types';
import { compileSkillsData } from '../../../util/data';

type Props = {
  configs: Configs,
  skills: Gcms_Skill[],
  atBottom?: boolean,
}

type ReduxProps = {
  skillsTop: number,
  setSkillsTop: any,
}

type State = {
  dotsWidth: number,
  dotsHeight: number,
  color: string,
}

const mapStateToProps = ({ global, home }) => {
  return {
    skillsTop: home.skillsTop
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setSkillsTop
  }, dispatch);
}

class SkillsSection extends PureComponent<Props & ReduxProps, State> {
  gridID: string;
  defaultColor: string;
  hideArray: number[];

  constructor(props: Props & ReduxProps) {
    super(props);
    this.handleResize = throttle(this.handleResize.bind(this), 100);
    this.gridID = 'skills-dot-grid';
    this.defaultColor = 'rgb(249, 141, 81)';
    this.hideArray = [
      10, 11, 12, 13, 14,
      25, 26, 27, 28, 29,
      40, 41, 42, 43, 44,
      55, 56, 57, 58, 59,
      70, 71, 72, 73, 74
    ];

    this.state = {
      dotsWidth: 0,
      dotsHeight: 0,
      color: this.defaultColor
    }
  }

  componentDidMount(): void {
    const elm: HTMLElement = document.getElementById(this.gridID);
    const rect: ClientRect = elm.getBoundingClientRect();

    window.addEventListener('resize', this.handleResize);
    this.setState({ dotsWidth: rect.width, dotsHeight: rect.height });
    this.setTop(false, this.props.configs.config.skillsTop);
  }

  componentDidUpdate(prevProps: Props & ReduxProps): void {
    if (prevProps.atBottom && !this.props.atBottom) {
      this.setState({ color: this.defaultColor })
    }
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.handleResize);
  }

  setTop(didResize = false, input?: number): void {
    let value = input;

    if (value == null) {
      const elm: HTMLElement = document.getElementById(this.gridID);
      const rect: ClientRect = elm.getBoundingClientRect();
      value = (rect.top - (rect.height / 2)) + 490;
    }

    this.props.setSkillsTop({ value, didResize });
  }

  handleResize(): void {
    this.setTop(true);
  }

  handleButton(e: Event): void {
    e.preventDefault();
    if (hasWindow()) window.location.href = `mailto:${this.props.configs.meta.email}`;
  }

  render() {
    return (
      <SkillsWrapper>
        <Heading text="tech_i_know" />
        <DotWrapper id={this.gridID}>
          <StyledDotFormation
            breakpoint="desktop"
            columns={15}
            active={this.props.atBottom}
            hideArray={this.hideArray}
            color={this.state.color}
            textConfig={compileSkillsData('desktop', this.props.skills)}
          />
          <StyledDotFormation
            breakpoint="mobile"
            columns={8}
            rows={20}
            active={true}
            color={this.state.color}
            textConfig={compileSkillsData('mobile', this.props.skills)}
          />
        </DotWrapper>
      </SkillsWrapper>
    );
  }
}

const ConnectedSkills = connect(mapStateToProps, mapDispatchToProps)(SkillsSection);

export default (props: Omit<Props, 'configs' | 'skills'>) => (
  <StaticQuery
    query={graphql`
      query {
        configs {
          meta {
            email
          }
          config {
            skillsTop
          }
        }
        gcms {
          skills {
            xAxisDesktop
            xAxisMobile
            yAxisDesktop
            yAxisMobile
            directionDesktop
            directionMobile
            id
            label
          }
        }
      }
    `}
    render={(data: Query) => (
      <ConnectedSkills
        configs={data.configs}
        skills={data.gcms.skills}
        {...props}
      />
    )}
  />
);
