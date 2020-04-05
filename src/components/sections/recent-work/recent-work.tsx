import React, { PureComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import update from 'immutability-helper';
import Particles from './particles';
import Heading from '../../global/heading';
import WorkItem from '../../global/work-item/work-item';
import { throttle } from '../../../util/util';
import { setRecentWorkTop } from '../../../actions/global';
import { RecentWorkWrapper, ParentWrapper, WorkItemsWrapper } from './styles';
import { Gcms_Section, Gcms_Project, Configs } from '../../../../types';

type Props = {
  configs?: Configs, 
  section?: Gcms_Section,
  projects?: Gcms_Project[],
}

type ReduxProps = {
  recentWorkTop: number,
  isMobile: boolean,
  transportOpen: boolean,
  setRecentWorkTop: (args: any) => any,
}

type State = {
  workStops: boolean[],
}

const mapStateToProps = ({ global, home }) => {
  return {
    recentWorkTop: home.recentWorkTop,
    isMobile: global.isMobile,
    transportOpen: global.transportOpen
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setRecentWorkTop
  }, dispatch);
}

class RecentWork extends PureComponent<Props & ReduxProps, State> {
  defaultWorkStops: boolean[];

  constructor(props: Props & ReduxProps) {
    super(props);
    console.log(props);
    
    this.defaultWorkStops = props.projects.map(() => false);
    this.handleResize = throttle(this.handleResize.bind(this), 100);
    this.handleWorkStops = this.handleWorkStops.bind(this);
    this.state = {
      workStops: this.defaultWorkStops
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.transportOpen && this.props.transportOpen) {
      this.resetWorkStops();
    }
  }

  handleResize() {
    this.setTop(true);
  }

  setTop(didResize: boolean = false, input?: any): void {
    let value = input;

    if (value == null) {
      const section = document.getElementById('recent-work-section');
      const rect = section.getBoundingClientRect();
      value = rect.top;
    }


    this.props.setRecentWorkTop({ value, didResize });
  }

  handleWorkStops(index, stopped) {
    return () => {
      const isStopped = stopped !== null ? stopped : !this.state.workStops[index];
      const newState = update(this.state, {
        workStops: {
          [index]: {
            $set: isStopped
          }
        }
      });

      this.setState(newState);
    }
  }

  resetWorkStops() {
    this.setState({ workStops: this.defaultWorkStops });
  }

  renderWorkItems() {
    return this.props.projects.map((item, i: number) => {
      return i < this.props.configs.config.workItemsAmount && (
        <WorkItem
          item={item}
          index={i}
          isStopped={this.state.workStops[i]}
          handleWorkStops={this.handleWorkStops}
          baseTop={this.props.recentWorkTop}
          isMobile={this.props.isMobile}
          key={item.title + `${(i * 7)}`}
        />
      );
    });
  }

  render() {
    return (
      <RecentWorkWrapper id="recent-work-section">
        <Heading text={this.props.section.heading} />
        <ParentWrapper>
          <WorkItemsWrapper>
            {this.renderWorkItems()}
          </WorkItemsWrapper>
        </ParentWrapper>
        <Particles isMobile={this.props.isMobile} />
      </RecentWorkWrapper>
    );
  }
}

const ConnectedRecentWork = connect(mapStateToProps, mapDispatchToProps)(RecentWork);

export default (props: Omit<Props, 'configs'>) => (
  <StaticQuery
    query={graphql`
      query {
        configs {
          config {
            workItemsAmount
          }
        }
        gcms {
          section(where:{sectionId: "recent-work"}) {
            heading
          }
          projects(first: 5, where: {projectType: Work, disabled: false}) {
            id
            projectType
            title
            description
            projectId
            externalUrl
            imageDesktop {
              url
            }
          }
        }
      }
    `}
    render={data => (
      <ConnectedRecentWork 
        configs={data.configs} 
        section={data.gcms.section}
        projects={data.gcms.projects}
        {...props} 
      />
    )}
  />
);