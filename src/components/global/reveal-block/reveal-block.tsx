import React from 'react';
import Plx from 'react-plx';
import { useStaticQuery, graphql } from 'gatsby';
import { reduceSegment, hasWindow } from '../../../util/util';
import { RevealBlockWrapper, OutterWrapper, InnerWrapper, ContentWrapper, Content } from './styles';
import { RevealBlockContentType } from '../../../../types';

interface Props {
    startGrid?: number;
    endGrid?: number;
    active?: boolean;
    delay?: number;
    children?: any;
    contentType?: RevealBlockContentType;
    gridLines?: number[];
    plxProps?: any;
    mobileIgnoreGrid?: boolean;
    className?: string;
}

const revealBlock = ({
    startGrid = 1,
    endGrid = 4,
    contentType = 'generic',
    active = false,
    delay = 0,
    children,
    gridLines,
    plxProps,
    mobileIgnoreGrid = true,
    className,
}: Props) => {
    const { configs } = useStaticQuery(graphql`
        query {
            configs {
                settings {
                    gridLines
                }
            }
        }
    `);

    const gLines = gridLines || configs.settings.gridLines;
    const width = reduceSegment(startGrid, endGrid, gLines);
    const position = reduceSegment(0, startGrid, gLines);

    const regularRevealBlock = (
        <RevealBlockWrapper
            gridWidth={width}
            position={position}
            className={className}
            mobileIgnoreGrid={mobileIgnoreGrid}
        >
            <OutterWrapper active={active} delay={delay}>
                <InnerWrapper active={active} delay={delay}>
                    <ContentWrapper contentType={contentType}>
                        <Content contentType={contentType}>{children}</Content>
                    </ContentWrapper>
                </InnerWrapper>
            </OutterWrapper>
        </RevealBlockWrapper>
    );

    const plxRevealBlock = (
        <Plx freeze={active} disabled={!hasWindow()} {...plxProps}>
            {regularRevealBlock}
        </Plx>
    );

    return plxProps && plxProps.parallaxData ? plxRevealBlock : regularRevealBlock;
};

export default revealBlock;
