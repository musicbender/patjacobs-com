import React, { PureComponent } from 'react';
// import { Link } from 'gatsby';
import Plx from 'react-plx';
import { connect } from 'react-redux';
import { throttle, hasWindow } from '../../../util/util';
import ProjectMeta from '../../sections/project-meta';
import ProjectBody from '../../sections/project-body';
import RevealBlock from '../../global/reveal-block';
import BarList from '../../global/bar-list';
import {
    CaseStudyPage,
    InfoWrapper,
    Title,
    MetaOutterWrapper,
    Main,
    Top,
    Middle,
    Section,
    StyledHeading,
    Paragraph,
    StyledUpNext,
} from './styles';
import {
    Gcms_Project,
    GatsbyLocation,
    Sections,
    CaseStudyBaseRevealProps,
    RevealBlockContentType,
    Configs,
    SitePageContextProjectBody,
    RevealedElementsState,
} from '../../../../types';
import ScrollLine from '../../global/scroll-line';

interface Props {
    project: Gcms_Project;
    nextProject: Gcms_Project;
    sections: Sections;
    configs: Configs;
    location: GatsbyLocation;
}

interface ReduxProps {
    splashOpen?: boolean;
    transportOpen?: boolean;
}

interface State {
    atTop: boolean;
    revealedElements: RevealedElementsState;
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
            endGrid: 6,
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
            revealedElements: {},
        };
    }

    componentDidMount(): void {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(): void {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(): void {
        if (window.scrollY === 0 && !this.state.atTop) {
            this.setState({ atTop: true });
        }

        if (this.state.atTop && window.scrollY > 0) {
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
            this.setState({
                revealedElements: {
                    ...this.state.revealedElements,
                    [elm]: true,
                },
            });
        };
    };

    isRevealed = (elm: string): boolean => {
        return !!this.state.revealedElements[elm];
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

    propIsEqual = (targetProp: any) => (prev: any, next: any): boolean => {
        return prev[targetProp] === next[targetProp];
    };

    renderBarList(key: string, items: string[] = []) {
        const active: boolean = this.isRevealed(key);
        return (
            <Section>
                <RevealBlock {...this.getRevealProps(`heading${key}`, 'text')}>
                    <StyledHeading text={this.props.sections[`case-study-${key}`].heading} />
                </RevealBlock>
                <Plx
                    freeze={active}
                    disabled={!hasWindow()}
                    parallaxData={this.plxData}
                    onPlxEnd={hasWindow() ? this.addRevealed(key) : null}
                >
                    <BarList items={items} active={active} />
                </Plx>
            </Section>
        );
    }

    renderBody() {
        return (
            <Section>
                <RevealBlock {...this.getRevealProps('heading-body', 'text')}>
                    <StyledHeading text={this.props.sections['case-study-more-details'].heading} />
                </RevealBlock>
                <ProjectBody
                    body={this.props.project.body.raw as SitePageContextProjectBody[]}
                    getRevealProps={this.getRevealProps}
                />
            </Section>
        );
    }

    render() {
        const active: boolean =
            this.state.atTop && !this.props.splashOpen && !this.props.transportOpen;

        return (
            <CaseStudyPage>
                {this.props.project && (
                    <InfoWrapper>
                        <Title atTop={this.state.atTop}>
                            {this.props.project.title || this.props.project.projectId || 'Case Study'}
                        </Title>
                        <MetaOutterWrapper atTop={this.state.atTop}>
                            <ProjectMeta project={this.props.project} />
                        </MetaOutterWrapper>
                    </InfoWrapper>
                )}
                {this.props.project && (
                    <Main>
                        <Top>
                            <ScrollLine atTop={this.state.atTop} active={active} />
                        </Top>
                        <Middle>
                            {this.props.project.overview && this.renderOverview()}
                            {this.props.project.techList &&
                                this.props.project.techList.length > 0 &&
                                this.renderBarList('tech-used', this.props.project.techList)}
                            {this.props.project.body && this.renderBody()}
                            {this.props.project.team &&
                                this.props.project.team.length > 0 &&
                                this.renderBarList('team', this.props.project.team)}
                            {this.props.nextProject && (
                                <StyledUpNext
                                    label={this.props.nextProject.title}
                                    path={`/case-studies/${this.props.nextProject.projectId}`}
                                    gridLines={this.props.configs.settings.gridLines}
                                />
                            )}
                        </Middle>
                    </Main>
                )}
            </CaseStudyPage>
        );
    }
}

export default connect(mapStateToProps)(CaseStudy);
