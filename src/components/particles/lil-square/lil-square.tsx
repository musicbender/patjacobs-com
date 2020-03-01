import React from 'react';
import { LilSquareWrapper } from './styles';
import { ParticleColors } from '../../../../types/global';

type Props = {
  color: keyof typeof ParticleColors,
  opacity: number,
  className: string,
}

const LilSquare = ({ 
  color, 
  opacity, 
  className,
}: Props) => (
  <LilSquareWrapper color={color} opacity={opacity} className={className} />
);

LilSquare.defaultProps = {
  color: 'orange',
  opacity: 0.75,
}

export default LilSquare;
