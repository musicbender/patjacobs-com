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
}

const revealBlock = ({
    startGrid = 1,
    endGrid = 3,
    contentType = 'text',
    active = false,
    children,
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

    return (
        <RevealBlockWrapper
            blockWidth={getGridWidth(startGrid, endGrid, configs.settings.gridLines)}
        >
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
