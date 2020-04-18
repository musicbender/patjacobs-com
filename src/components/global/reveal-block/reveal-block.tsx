import React from 'react';
import { RevealBlockWrapper, OutterWrapper, InnerWrapper, ContentWrapper, Content } from './styles';
import { getGridWidth } from '../../../styles/utils/global';
import { useStaticQuery, graphql } from 'gatsby';
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

    return (
        <RevealBlockWrapper blockWidth={getGridWidth(startGrid, endGrid, gLines)}>
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
