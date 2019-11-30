import styled from 'styled-components';
import { sizes } from '../../../styles/breakpoints';

interface IGridItemProps {
  width: number
}

export const GridLinesWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: ${sizes.desktopXXL}px;
`;

export const GridItem = styled('div')<IGridItemProps>`
  display: inline-block;
  height: 100%;
  width: ${props => `${props.width}%`};
`;

export const GridLine = styled.div`
  height: 100%;
  border-left: ${props => `1px solid ${props.theme.modePalette.darkLines}`};
`;
