import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { reduceSegment } from '../../../util/util';
import { RevealBlockWrapper, OutterWrapper, InnerWrapper, ContentWrapper, Content } from './styles';
import { RevealBlockContentType } from '../../../../types';

interface Props {
    startGrid?: number;
    endGrid?: number;
    active?: boolean;
    children?: any;
    contentType?: RevealBlockContentType;
    gridLines?: number[];
}

const revealBlock = ({
    startGrid = 1,
    endGrid = 4,
    contentType = 'text',
    active = false,
    children,
    gridLines,
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
        <RevealBlockWrapper gridWidth={width} position={position}>
            <OutterWrapper active={active}>
                <InnerWrapper active={active}>
                    <ContentWrapper contentType={contentType}>
                        <Content contentType={contentType}>{children}</Content>
                    </ContentWrapper>
                </InnerWrapper>
            </OutterWrapper>
        </RevealBlockWrapper>
    );
};

export default revealBlock;
