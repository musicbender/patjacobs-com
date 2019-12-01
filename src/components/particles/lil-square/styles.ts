import styled from 'styled-components';
import { ParticleColors } from '../../../../types/global';

type LilSquareWrapperProps = {
  color: keyof typeof ParticleColors,
  opacity: number
}

const size: string = '1.25em';

export const LilSquareWrapper = styled('div')<LilSquareWrapperProps>`
  width: ${size};
  height: ${size};
  border: ${props => `5px solid ${props.theme.corePalette.orange}`};
  ${props => props.color === 'white' && `border-color: ${props.theme.palette.white};`}
  ${props => props.color === 'purple' && `border-color: ${props.theme.corePalette.purple};`}
  ${props => props.color === 'yellow' && `border-color: ${props.theme.corePalette.yellow};`}
  ${props => props.color === 'orange' && `border-color: ${props.theme.corePalette.orange};`}
  ${props => props.color === 'aqua' && `border-color: ${props.theme.corePalette.aqua};`}
`;
