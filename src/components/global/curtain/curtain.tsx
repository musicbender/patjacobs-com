import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurtainState } from '../../../actions/global';
import { clearRequestTimeout, requestTimeout } from '../../../util/shims';
import { CurtainWrapper, Block, InnerBlock } from './styles';
import { ECurtainTypes, ECurtainTransition, ConfigsSettings } from '../../../../types';
import theme from '../../../styles/theme';

interface Props {
    duration?: number;
    entrance?: keyof typeof ECurtainTypes;
    exit?: keyof typeof ECurtainTypes;
    settings?: ConfigsSettings;
}

const Curtain = ({ duration = 3000, entrance = 'none', exit = 'blocks' }: Props) => {
    const blockNum = 7;
    const baseDelay = 55;
    let openingDuration = 0;
    let openTimeout;
    let closingTimeout;
    let closedTimeout;

    const [exiting, setExiting] = useState(false);
    const dispatch = useDispatch();
    const { settings } = useStaticQuery(graphql`
        query {
            configs {
                settings {
                    gridLines
                }
            }
        }
    `).configs;

    const getOpeningDuration = () => {
        if (entrance === 'none') return 0;
        return entrance === 'full' ? 1000 : +theme.animate.slow;
    };

    useEffect(() => {
        dispatch(changeCurtainState('opening'));

        openingDuration = getOpeningDuration();

        openTimeout = requestTimeout(() => {
            dispatch(changeCurtainState('open'));
        }, openingDuration);

        closingTimeout = requestTimeout(() => {
            setExiting(true);
            dispatch(changeCurtainState('closing'));
        }, duration);

        closedTimeout = requestTimeout(() => {
            dispatch(changeCurtainState('closed'));
        }, duration + 2000);

        return () => {
            dispatch(changeCurtainState('closed'));
            clearRequestTimeout(openTimeout);
            clearRequestTimeout(closingTimeout);
            clearRequestTimeout(closedTimeout);
        };
    }, []);

    const getBlockDelay = (i: number, j: number): number => {
        switch (true) {
            case exiting && exit === 'blocks':
            case !exiting && entrance === 'blocks':
                const max = (settings.gridLines.length * blockNum * baseDelay) / 2;
                return max - baseDelay * ((i + 1) / 2) * (j + 1);
            case exiting && exit === 'reverse-blocks':
            case !exiting && entrance === 'reverse-blocks':
                return baseDelay * i;
            case exiting && exit === 'rows':
            case !exiting && entrance === 'rows':
                return baseDelay * (settings.gridLines.length - 1 - j);
            default:
                return baseDelay;
        }
    };

    const getBlockDuration = (): string => {
        let blockDuration: string = theme.animate.verySlow;

        if ((exiting && exit === 'full') || (!exiting && entrance === 'full')) {
            blockDuration = 1000 + 'ms';
        }

        return blockDuration;
    };

    const getTransitionState = (): keyof typeof ECurtainTransition | null => {
        const isEnter: boolean = !exiting && entrance !== 'none';
        const isExit: boolean = exiting && exit !== 'none';
        return isEnter ? 'enter' : isExit ? 'exit' : null;
    };

    const renderBlock = (i: number, j: number) => {
        const delay: number = getBlockDelay(i, j);
        return (
            <Block key={'splash-block' + i + '_' + j}>
                <InnerBlock
                    transition={getTransitionState()}
                    enterType={entrance}
                    exitType={exit}
                    delay={delay + 'ms'}
                    duration={getBlockDuration()}
                ></InnerBlock>
            </Block>
        );
    };

    return (
        <CurtainWrapper>
            {settings.gridLines.map((g: number, i: number) => {
                let blocks: any[] = [];

                for (let j = 0; j < blockNum; j++) {
                    blocks = [...blocks, renderBlock(i, j)];
                }

                return blocks;
            })}
        </CurtainWrapper>
    );
};

export default Curtain;
