import React, { PureComponent } from 'react';
// import { Link } from 'gatsby';
import Plx from 'react-plx';
import { connect } from 'react-redux';
import { throttle, hasWindow } from '../../../util/util';
import ProjectMeta from '../../sections/project-meta';
import RevealBlock from '../../global/reveal-block';
import {
    CaseStudyPage,
    InfoWrapper,
    Title,
    MetaOutterWrapper,
    ScrollLineWrapper,
    ScrollLineRevealBlock,
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
    RevealBlockContentType,
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
                duration: 100,
                properties: [
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'opacity',
                    },
                ],
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

    getRevealProps = (elm: string, contentType: RevealBlockContentType = 'generic') => {
        const isActive: boolean = this.isRevealed(elm);
        return {
            ...this.baseRevealProps,
            active: isActive,
            contentType,
            plxProps: {
                parallaxData: this.plxData,
                onPlxEnd: hasWindow() ? this.addRevealed(elm) : null,
            },
        };
    };

    addRevealed = (elm: string): (() => void) => {
        return (): void => {
            if (this.isRevealed(elm)) return;
            this.setState({ revealedElements: [...this.state.revealedElements, elm] });
        };
    };

    isRevealed = (elm: string): boolean => {
        return this.state.revealedElements.indexOf(elm) > -1;
    };

    renderOverview() {
        return (
            <Section>
                <RevealBlock {...this.getRevealProps('heading-overview', 'text')}>
                    <StyledHeading text={this.props.sections['case-study-overview'].heading} />
                </RevealBlock>
                <RevealBlock {...this.getRevealProps('overview', 'text')}>
                    <Paragraph>{this.props.project.overview}</Paragraph>
                </RevealBlock>
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
                                <ScrollLineRevealBlock
                                    contentType="line"
                                    active={
                                        this.state.atTop &&
                                        !this.props.splashOpen &&
                                        !this.props.transportOpen
                                    }
                                    endGrid={3}
                                >
                                    <ScrollLine />
                                </ScrollLineRevealBlock>
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
