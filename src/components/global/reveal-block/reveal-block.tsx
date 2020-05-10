import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { reduceSegment } from '../../../util/util';
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

    return (
        <RevealBlockWrapper gridWidth={width} position={position} className={className}>
            <OutterWrapper active={active} delay={delay}>
                <InnerWrapper active={active} delay={delay}>
                    <ContentWrapper contentType={contentType}>
                        <Content contentType={contentType}>{children}</Content>
                    </ContentWrapper>
                </InnerWrapper>
            </OutterWrapper>
        </RevealBlockWrapper>
    );
};

export default revealBlock;
