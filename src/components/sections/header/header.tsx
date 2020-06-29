import React, { PureComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { connect } from 'react-redux';
import Plx from 'react-plx';
import ColorDotRow from '../../particles/color-dot-row';
import Triangle from '../../particles/triangle';
import { dotGridA, dotGridB, dotGridC, dotGridD } from './dots';
import { countLongestArray, hasWindow } from '../../../util/util';
import { startSequence } from '../../../util/animation';
import {
    Modes,
    TriangleSizes,
    ParticleColors,
    Configs,
    ConfigsHeaderTriangles,
} from '../../../../types';
import {
    HomeHeader,
    DotGridWrapper,
    TitleWrapper,
    Title,
    SubTitle,
    TriangleParallax,
    StyledLilSquare,
    DotGridA,
    DotGridB,
    DotGridC,
    DotGridD,
} from './styles';

interface Props {
    configs: Configs;
}

interface ReduxProps {
    pageLoaded: boolean;
    splashOpen: boolean;
    splashClosing: boolean;
    mode: Modes;
    isMobile: boolean;
}

interface State {
    dotGridIndex: number;
    sequenceStarted: boolean;
}

const mapStateToProps = ({ global }) => ({
    pageLoaded: global.pageLoaded,
    splashOpen: global.splashOpen,
    splashClosing: global.splashClosing,
    mode: global.mode,
    isMobile: global.isMobile,
});

class Header extends PureComponent<Props & ReduxProps, State> {
    interval: number;
    delay: number;

    constructor(props) {
        super(props);
        this.handleSequence = this.handleSequence.bind(this);
        this.interval = 180;
        this.delay = 500;
        this.state = {
            dotGridIndex: 0,
            sequenceStarted: false,
        };
    }

    componentDidMount() {
        if (!this.state.sequenceStarted && !this.props.splashClosing && !this.props.splashOpen) {
            this.setState({ sequenceStarted: true }, this.initSequence);
        }
    }

    componentDidUpdate() {
        if (!this.state.sequenceStarted && this.props.splashClosing && this.props.splashOpen) {
            this.setState({ sequenceStarted: true }, this.initSequence);
        }
    }

    handleSequence(index = 0): void {
        this.setState({ dotGridIndex: index });
    }

    initSequence = () => {
        const dotGridLength: number | boolean = countLongestArray([
            dotGridA,
            dotGridB,
            dotGridC,
            dotGridD,
        ]);

        startSequence(
            {
                length: dotGridLength as number,
                interval: this.interval,
                delay: this.delay,
                index: this.state.dotGridIndex,
            },
            this.handleSequence
        );
    };

    getPlxData({ plx, start, end }: ConfigsHeaderTriangles) {
        return [
            {
                start,
                end,
                properties: [
                    {
                        startValue: plx[0],
                        endValue: plx[1],
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    }

    renderTriangles(show: boolean) {
        const { triangles } = this.props.configs.header;
        return triangles.map((tri, i: number) => (
            <TriangleParallax
                color={tri.color}
                size={tri.size}
                id={tri.id}
                show={show}
                gridLines={this.props.configs.settings.gridLines}
                key={i + tri.id}
            >
                <Plx
                    disabled={!hasWindow() || this.props.isMobile}
                    parallaxData={this.getPlxData(tri)}
                >
                    <Triangle
                        color={tri.color as keyof typeof ParticleColors}
                        size={tri.size as keyof typeof TriangleSizes}
                    />
                </Plx>
            </TriangleParallax>
        ));
    }

    render() {
        const show: boolean = this.props.splashClosing || !this.props.splashOpen;
        return (
            <HomeHeader splashOpen={this.props.splashOpen}>
                <ColorDotRow active={this.props.splashClosing} />
                <StyledLilSquare />
                {this.renderTriangles(show)}
                <DotGridWrapper>
                    <DotGridA sequence={dotGridA} index={this.state.dotGridIndex} />
                    <DotGridB sequence={dotGridB} index={this.state.dotGridIndex} />
                    <DotGridC sequence={dotGridC} index={this.state.dotGridIndex} />
                    <DotGridD sequence={dotGridD} index={this.state.dotGridIndex} />
                </DotGridWrapper>
                <TitleWrapper>
                    <Title show={show}>{this.props.configs.meta.name}</Title>
                    <SubTitle show={show}>{this.props.configs.meta.role}</SubTitle>
                    <ColorDotRow active={this.props.splashClosing} forMobile />
                </TitleWrapper>
            </HomeHeader>
        );
    }
}

const ConnectedHeader = connect(mapStateToProps)(Header);

export default (props: Omit<Props, 'configs'>) => (
    <StaticQuery
        query={graphql`
            query {
                configs {
                    meta {
                        name
                        role
                    }
                    header {
                        triangles {
                            id
                            color
                            size
                            plx
                            start
                            end
                        }
                    }
                    settings {
                        gridLines
                    }
                }
            }
        `}
        render={data => <ConnectedHeader configs={data.configs} {...props} />}
    />
);
