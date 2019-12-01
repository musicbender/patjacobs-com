import React from 'react';
import { TriangleWrapper } from './styles';
import { ParticleColors, TriangleSizes } from '../../../../types/global';

type Props = {
  color: keyof typeof ParticleColors,
  size: keyof typeof TriangleSizes,
  opacity?: number,
}

const Triangle = ({
  color,
  size,
  opacity,
}: Props) => {
  const opacities: { [ key in keyof typeof TriangleSizes]: number } = {
    micro: 1,
    tiny: 1,
    small: 0.7,
    medium: 0.287,
    giant: 0.0255
  }

  return (
    <TriangleWrapper
      viewBox="0 0 10 11"
      size={size}
      color={color}
      opacity={opacity || opacities[size] || 1 }
    >
      <g>
        <g opacity="0.8">
          <path d="M0.051,0.559l10,-0.005l0.005,10l-10.005,-9.995Z" />
        </g>
      </g>
    </TriangleWrapper>
  )
}

Triangle.defaultProps = {
  color: 'white',
  size: 'medium',
}

export default Triangle;
