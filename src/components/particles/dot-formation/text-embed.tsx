import React from 'react';
import {
  Skill,
  DorFormationTextEmbedOffsets,
  DotFormationTextEmbedDirection,
} from '../../../types';
import { TextEmbedWrapper, TextEmbedTextWrapper, RevealBar, InnerTextWrapper } from './styles';

interface Props {
  data: Skill;
  spacing?: number[];
  offsets?: DorFormationTextEmbedOffsets;
  width?: string;
  active?: boolean;
}

const TextEmbed = ({ data, spacing, offsets, width = '0', active = false }: Props) => {
  const { text, position, direction } = data;
  const x: number = position[0] * spacing[0];
  const y: number = position[1] * spacing[1];
  const baseDelay: number = active ? 785 : 0;

  return (
    <TextEmbedWrapper
      direction={direction as DotFormationTextEmbedDirection}
      text={text}
      style={{
        left: `calc(${x}% - ${offsets.x}px)`,
        top: `calc(${y}% - ${offsets.y}px)`,
        width,
      }}
    >
      <TextEmbedTextWrapper>
        {text.split('').map((letter, i) => (
          <InnerTextWrapper
            active={active}
            style={{ transitionDelay: `${baseDelay + i * 100}ms` }}
            key={letter + i + text}
          >
            {letter}
          </InnerTextWrapper>
        ))}
      </TextEmbedTextWrapper>
      <RevealBar active={active} />
    </TextEmbedWrapper>
  );
};

export default TextEmbed;
