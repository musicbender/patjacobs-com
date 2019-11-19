import { styled } from 'styled-components';
import { sizes } from '../../../styles/breakpoints';

export const GridLinesWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: ${sizes.desktopXXL};
`;

export const GridItem = styled.div`
  display: inline-block;
  height: 100%;
  width: ${props => `${props.width}%`}
`;

export const GridLine = styled.div`
  height: 100%;
  border-left: ${props => `1px solid ${props.theme.modePalette.darkLines}`};
`;
