import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Plx from 'react-plx';
import ColorDotRow from '../../particles/color-dot-row';
import Triangle from '../../particles/triangle';
import { dotGridA, dotGridB, dotGridC, dotGridD } from './dots';
import { countLongestArray, hasWindow } from '../../../util/util';
import { startSequence, curtainInClose } from '../../../util/animation';
import {
    Modes,
    TriangleSizes,
    ParticleColors,
    Configs,
    ConfigsHeaderTriangles,
    CurtainState,
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
    curtainState: CurtainState;
    mode: Modes;
    isMobile: boolean;
}

interface State {
    dotGridIndex: number;
    sequenceStarted: boolean;
    active: boolean;
}

const mapStateToProps = ({ global }) => ({
    pageLoaded: global.pageLoaded,
    splashOpen: global.splashOpen,
    curtainState: global.curtainState,
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
            active: false,
        };
    }

    componentDidMount() {
        // if (!this.state.sequenceStarted && curtainInClose(this.props.curtainState)) {
        //     this.setState({ sequenceStarted: true }, this.initSequence);
        // }
    }

    componentDidUpdate(prevProps: Props & ReduxProps, prevState: State) {
        if (!this.state.active && prevProps.curtainState !== this.props.curtainState) {
            if (
                !curtainInClose(prevProps.curtainState) &&
                curtainInClose(this.props.curtainState)
            ) {
                this.setState({ active: true });
            }
        }

        if (!this.state.sequenceStarted) {
            if (!prevState.active && this.state.active) {
                this.setState({ sequenceStarted: true }, this.initSequence);
            }
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
        return (
            <HomeHeader splashOpen={this.props.splashOpen}>
                <ColorDotRow active={this.state.active} />
                <StyledLilSquare />
                {this.renderTriangles(this.state.active)}
                <DotGridWrapper>
                    <DotGridA sequence={dotGridA} index={this.state.dotGridIndex} />
                    <DotGridB sequence={dotGridB} index={this.state.dotGridIndex} />
                    <DotGridC sequence={dotGridC} index={this.state.dotGridIndex} />
                    <DotGridD sequence={dotGridD} index={this.state.dotGridIndex} />
                </DotGridWrapper>
                <TitleWrapper>
                    <Title show={this.state.active}>{this.props.configs.meta.name}</Title>
                    <SubTitle show={this.state.active}>{this.props.configs.meta.role}</SubTitle>
                    <ColorDotRow active={this.state.active} forMobile />
                </TitleWrapper>
            </HomeHeader>
        );
    }
}

export default connect(mapStateToProps)(Header);
