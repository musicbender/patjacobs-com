import React, { PureComponent } from 'react';
// import { Link } from 'gatsby';
import Plx from 'react-plx';
import { connect } from 'react-redux';
import { throttle } from '../../../util/util';
import ProjectMeta from '../../sections/project-meta';
import RevealBlock from '../../global/reveal-block';
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
    Section,
    StyledHeading,
    Paragraph,
} from './styles';
import {
    Gcms_Project,
    GatsbyLocation,
    Sections,
    CaseStudyBaseRevealProps,
} from '../../../../types';

interface Props {
    project: Gcms_Project;
    allProjects: Gcms_Project[];
    sections: Sections;
    location: GatsbyLocation;
}

interface ReduxProps {
    splashOpen?: boolean;
    transportOpen?: boolean;
}

interface State {
    atTop: boolean;
    revealedElements: string[];
}

const mapStateToProps = ({ global }) => {
    return {
        splashOpen: global.splashOpen,
        transportOpen: global.transportOpen,
    };
};

class CaseStudy extends PureComponent<Props & ReduxProps, State> {
    baseRevealProps: CaseStudyBaseRevealProps;
    plxData: any[];

    constructor(props: Props) {
        super(props);
        this.handleScroll = throttle(this.handleScroll.bind(this), 5);

        this.baseRevealProps = {
            startGrid: 3,
            endGrid: 5,
        };

        this.plxData = [
            {
                start: 'self',
                duration: 10,
                properties: [],
            },
        ];

        this.state = {
            atTop: true,
            revealedElements: [],
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

    addRevealed = (elm: string): void => {
        this.setState({ revealedElements: [...this.state.revealedElements, elm] });
    };

    isRevealed = (elm: string): boolean => {
        return this.state.revealedElements.indexOf(elm) > -1;
    };

    renderOverview() {
        const isActive = this.isRevealed('case-study-overview');
        return (
            <Section>
                <StyledHeading text={this.props.sections['case-study-overview'].heading} />
                <Plx
                    parallaxData={this.plxData}
                    onPlxStart={() => console.log('start')}
                    onPlxEnd={() => console.log('end')}
                    // onPlxEnd={this.addRevealed('case-study-overview')}
                    freeze={isActive}
                >
                    <RevealBlock {...this.baseRevealProps} contentType="text" active={isActive}>
                        <Paragraph>{this.props.project.overview}</Paragraph>
                    </RevealBlock>
                </Plx>
            </Section>
        );
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
                            <ScrollLineWrapper atTop={this.state.atTop}>
                                <StyledRevealBlock
                                    contentType="line"
                                    active={
                                        this.state.atTop &&
                                        !this.props.splashOpen &&
                                        !this.props.transportOpen
                                    }
                                    endGrid={3}
                                >
                                    <ScrollLine />
                                </StyledRevealBlock>
                            </ScrollLineWrapper>
                        </Top>
                        <Main>{this.props.project.overview && this.renderOverview()}</Main>
                    </Main>
                )}
            </CaseStudyPage>
        );
    }
}

export default connect(mapStateToProps)(CaseStudy);
