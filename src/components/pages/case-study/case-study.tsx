import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import { Gcms_Project, GatsbyLocation, Gcms_Section } from '../../../../types';
import { throttle } from '../../../util/util';
import {
    CaseStudyPage,
    InfoWrapper,
    Title,
    MetaOutterWrapper,
    ScrollLineWrapper,
    StyledRevealBlock,
    Main,
    Top,
    ScrollLine,
} from './styles';
import ProjectMeta from '../../sections/project-meta';
import { connect } from 'react-redux';

interface Props {
    project: Gcms_Project;
    allProjects: Gcms_Project[];
    sections: Gcms_Section[];
    location: GatsbyLocation;
}

interface ReduxProps {
    splashOpen?: boolean;
    transportOpen?: boolean;
}

interface State {
    atTop: boolean;
}

const mapStateToProps = ({ global }) => {
    return {
        splashOpen: global.splashOpen,
        transportOpen: global.transportOpen,
    };
};

class CaseStudy extends PureComponent<Props & ReduxProps, State> {
    constructor(props: Props) {
        super(props);
        this.handleScroll = throttle(this.handleScroll.bind(this), 5);
        this.state = {
            atTop: true,
        };
    }

    componentDidMount(): void {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(): void {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(): void {
        const scrollY = window.scrollY;

        if (scrollY === 0 && !this.state.atTop) {
            this.setState({ atTop: true });
        }

        if (this.state.atTop && scrollY > 0) {
            this.setState({ atTop: false });
        }
    }

    render() {
        return (
            <CaseStudyPage>
                {this.props.project && (
                    <InfoWrapper>
                        <Title isBig={this.state.atTop}>
                            {this.props.project.title ||
                                this.props.project.projectId ||
                                'Case Study'}
                        </Title>
                        <MetaOutterWrapper>
                            <ProjectMeta project={this.props.project} />
                        </MetaOutterWrapper>
                    </InfoWrapper>
                )}
                {this.props.project && (
                    <Main>
                        <Top>
                            <ScrollLineWrapper>
                                <StyledRevealBlock
                                    contentType="line"
                                    active={
                                        this.state.atTop &&
                                        !this.props.splashOpen &&
                                        !this.props.transportOpen
                                    }
                                    delay={1000}
                                >
                                    <ScrollLine />
                                </StyledRevealBlock>
                            </ScrollLineWrapper>
                        </Top>
                    </Main>
                )}
            </CaseStudyPage>
        );
    }
}

export default connect(mapStateToProps)(CaseStudy);
