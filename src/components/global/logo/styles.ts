import styled from 'styled-components';

export const LogoWrapper = styled('svg')<{ color: string }>`
  fill: ${({ color, theme }) => color || theme.palette.white};
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-miterlimit: 3;
  stroke-linecap: square;
  stroke-width: 3px;
  stroke: ${({ color, theme }) => color || theme.palette.white};
  width: 3em;

  path {
    fill: none;
    stroke: inherit;
  }
`;
