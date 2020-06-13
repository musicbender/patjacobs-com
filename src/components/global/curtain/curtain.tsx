import React, { PureComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { clearRequestTimeout, requestTimeout } from '../../../util/shims';
import { CurtainWrapper, Block, InnerBlock } from './styles';
import {
    ECurtainTypes,
    ECurtainColorLayouts,
    ECurtainTransition,
    ConfigsSettings,
} from '../../../../types';

interface Props {
    duration?: number;
    entrance?: keyof typeof ECurtainTypes;
    exit?: keyof typeof ECurtainTypes;
    colorLayout?: keyof typeof ECurtainColorLayouts;
    withLogo?: boolean;
    logoProps?: any;
    onClosing?: any;
}

interface QueryProps {
    settings?: ConfigsSettings;
}

interface State {
    exiting: boolean;
}

export class Curtain extends PureComponent<Props & QueryProps, State> {
    blockNum: number;
    baseDelay: number;
    timeout: any;

    static defaultProps = {
        duration: 3000,
        entrance: 'none',
        exit: 'blocks',
        colorLayout: 'full',
        withLogo: false,
        logoProps: {},
        onClosing: () => null,
    };

    constructor(props: Props & QueryProps) {
        super(props);
        this.blockNum = 7;
        this.baseDelay = 55;
        this.timeout = null;
        this.state = {
            exiting: false,
        };
    }

    componentDidMount() {
        this.timeout = requestTimeout(() => {
            this.setState({ exiting: true }, this.props.onClosing);
        }, this.props.duration);
    }

    componentWillUnmount() {
        clearRequestTimeout(this.timeout);
    }

    getBlockDelay = (i: number, j: number): number => {
        const { entrance, exit } = this.props;
        const { exiting } = this.state;

        switch (true) {
            case exiting && exit === 'blocks':
            case !exiting && entrance === 'blocks':
                const max =
                    (this.props.settings.gridLines.length * this.blockNum * this.baseDelay) / 2;
                return max - this.baseDelay * ((i + 1) / 2) * (j + 1);
            case exiting && exit === 'reverse-blocks':
            case !exiting && entrance === 'reverse-blocks':
                return this.baseDelay * i;
            case exiting && exit === 'rows':
            case !exiting && entrance === 'rows':
                return this.baseDelay * (this.props.settings.gridLines.length - 1 - j);
            default:
                return this.baseDelay;
        }
    };

    getTransitionState(): keyof typeof ECurtainTransition | null {
        const isEnter: boolean = !this.state.exiting && this.props.entrance !== 'none';
        const isExit: boolean = this.state.exiting && this.props.exit !== 'none';

        return isEnter ? 'enter' : isExit ? 'exit' : null;
    }

    renderBlock(i: number, j: number) {
        const delay: number = this.getBlockDelay(i, j);

        return (
            <Block key={'splash-block' + i + '_' + j}>
                <InnerBlock
                    transition={this.getTransitionState()}
                    enterType={this.props.entrance}
                    exitType={this.props.exit}
                    delay={delay + 'ms'}
                ></InnerBlock>
            </Block>
        );
    }

    renderBlocks() {
        const lines = this.props.settings.gridLines;
        return lines.map((g: number, i: number) => {
            let blocks: any[] = [];

            for (let j = 0; j < this.blockNum; j++) {
                blocks = [...blocks, this.renderBlock(i, j)];
            }

            return blocks;
        });
    }

    render() {
        return <CurtainWrapper>{this.renderBlocks()}</CurtainWrapper>;
    }
}

export default (props: Props) => (
    <StaticQuery
        query={graphql`
            query {
                configs {
                    settings {
                        gridLines
                    }
                }
            }
        `}
        render={data => <Curtain settings={data.configs.settings} {...props} />}
    />
);
