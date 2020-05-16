import styled, { css } from 'styled-components';
import { CoreColors } from '../../../../types';

interface ContentProps {
    color?: CoreColors;
}

export const ProjectMetaWrapper = styled.div`
    width: ${({ theme }) => `${theme.gridSizes.m}%`};
`;

export const ContentWrapper = styled.div`
    width: 100%;
    margin: 3em auto;
`;

const content = css`
    margin: 0.55em 0;
    font-weight: 200;
    font-size: 0.9rem;
    letter-spacing: 4px;
`;

export const Label = styled.p`
    ${content}
    color: ${({ theme }) => theme.palette.white};
`;

export const ContentValue = styled('p')<ContentProps>`
    ${content}
    color: ${props => props.theme.corePalette[props.color]};
`;

export const ContentValueLink = styled('a')<ContentProps>`
    ${content}
    color: ${props => props.theme.corePalette[props.color]};
    text-decoration: none;
    &:focus,
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const IconsWrapper = styled.div``;
