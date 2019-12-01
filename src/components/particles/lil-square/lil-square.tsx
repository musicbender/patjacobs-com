import React from 'react';
import { LilSquareWrapper } from './styles';
import { ParticleColors } from '../../../../types/global';

type Props = {
  color: keyof typeof ParticleColors,
  opacity: number,
}

const LilSquare = ({ color, opacity }: Props) => <LilSquareWrapper color={color} opacity={opacity} />;

LilSquare.defaultProps = {
  color: 'orange',
  opacity: 0.75,
}

export default LilSquare;
