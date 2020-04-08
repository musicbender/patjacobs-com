import React from 'react';
import { LilSquareWrapper } from './styles';
import { ParticleColors } from '../../../../types/global';

interface Props {
    color?: keyof typeof ParticleColors;
    opacity?: number;
    className?: string;
}

const LilSquare = ({ color = 'orange', opacity = 0.75, className }: Props) => (
    <LilSquareWrapper color={color} opacity={opacity} className={className} />
);

export default LilSquare;
