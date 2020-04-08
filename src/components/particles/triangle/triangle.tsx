import React from 'react';
import { TriangleWrapper } from './styles';
import { ParticleColors, TriangleSizes } from '../../../../types/global';

export interface Props {
    color?: keyof typeof ParticleColors;
    size?: keyof typeof TriangleSizes;
    opacity?: number;
    className?: string;
}

const Triangle = ({ color = 'white', size = 'medium', opacity, className }: Props) => {
    const opacities: { [key in keyof typeof TriangleSizes]: number } = {
        micro: 1,
        tiny: 1,
        small: 0.7,
        medium: 0.287,
        giant: 0.0255,
    };

    return (
        <TriangleWrapper
            className={className}
            viewBox="0 0 10 11"
            size={size}
            color={color}
            opacity={opacity || opacities[size] || 1}
        >
            <g>
                <g opacity="0.8">
                    <path d="M0.051,0.559l10,-0.005l0.005,10l-10.005,-9.995Z" />
                </g>
            </g>
        </TriangleWrapper>
    );
};

export default Triangle;
