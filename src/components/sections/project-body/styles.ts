import styled from 'styled-components';
import { media } from '@styles/breakpoints';
import { Paragraph } from '../../pages/case-study/styles';

export const ProjectBodyWrapper = styled.div``;

export const BodyParagraph = styled(Paragraph)``;

export const BodyImage = styled.img``;

export const BodyVideo = styled.video``;

export const Caption = styled.p`
  margin: -1em auto 4em;
  font-size: 0.87em;
  text-align: center;
  color: ${({ theme }) => theme.palette.white};
  opacity: 0.7;
  ${media.tablet`
        margin-bottom: 8em;
    `}
`;
