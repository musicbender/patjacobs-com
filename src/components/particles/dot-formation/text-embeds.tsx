import React from 'react';
import TextEmbed from './text-embed';
import { getTextWidth } from '@util/dot-grid';
import { SkillText, Axis, DotFormationTextEmbedDirection } from '@types';
import { TextEmbedsWrapper } from './styles';

type Props = {
  textConfig: SkillText[];
  spacing?: number[];
  getDotOffset(index: number, axis: Axis): number;
  dotSize?: number;
  active?: boolean;
  rowMajority?: boolean;
};

const TextEmbeds = ({
  textConfig,
  spacing = [7, 7],
  getDotOffset,
  dotSize,
  active,
  rowMajority,
}: Props) => {
  const getTextOffset = (item: SkillText): number => {
    return item.direction === 'Right'
      ? getDotOffset(item.position[0], 'x')
      : getDotOffset(item.position[1], 'y');
  };

  const getTextSpacing = (direction: DotFormationTextEmbedDirection): number => {
    switch (direction) {
      case 'Up':
        return rowMajority ? spacing[0] : spacing[1] / 2;
      case 'Down':
        return rowMajority ? spacing[0] - 0.25 : spacing[1] / 2 - 0.25;
      default:
        return spacing[0];
    }
  };

  return (
    <TextEmbedsWrapper>
      {textConfig.map((item: SkillText, i: number) => (
        <TextEmbed
          data={item}
          spacing={spacing}
          active={active}
          offsets={{
            x: getDotOffset(item.position[0], 'x'),
            y: getDotOffset(item.position[1], 'y') + dotSize / 2,
          }}
          width={getTextWidth(
            item.text,
            getTextSpacing(item.direction as DotFormationTextEmbedDirection),
            getTextOffset(item),
          )}
          key={item.text + i}
        />
      ))}
    </TextEmbedsWrapper>
  );
};

export default TextEmbeds;
