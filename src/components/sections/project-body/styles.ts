import styled from 'styled-components';
import { Paragraph } from '../../pages/case-study/styles';

export const ProjectBodyWrapper = styled.div``;

export const BodyParagraph = styled(Paragraph)``;

export const BodyImage = styled.img``;

export const BodyVideo = styled.video``;

export const Caption = styled.p`
    margin: -1em auto 8em;
    font-size: 0.87em;
    text-align: center;
    color: ${({ theme }) => theme.palette.white};
    opacity: 0.7;
`;
