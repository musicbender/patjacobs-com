import React, { useEffect, useState } from 'react';
import { BarListWrapper, StyledRevealBlock, ListItem } from './styles';
import { CoreColors } from '../../../../types';
import { getRandomColor, getRandomColorSequence } from '../../../util/colors';

interface Props {
  items?: string[];
  active?: boolean;
  color?: CoreColors;
  colorPattern?: 'multi' | 'single';
}

const BarList = ({ items = [], active = false, color, colorPattern = 'multi' }: Props) => {
  const [singleColor, setSingleColor] = useState(null);
  const [colors, setColors] = useState(null);

  useEffect(() => {
    getColors();
  }, [active]);

  const getColors = () => {
    switch (colorPattern) {
      case 'single':
        setSingleColor(color || (getRandomColor('name') as CoreColors));
        break;
      case 'multi':
        setColors(getRandomColorSequence());
        break;
      default:
        return;
    }
  };

  return (
    <BarListWrapper>
      {items.map((item: string, i: number) => {
        const itemColor: CoreColors =
          singleColor ||
          (colors && colors[i - colors.length * Math.floor(i / colors.length)]) ||
          'aqua';

        return (
          <StyledRevealBlock
            active={active}
            delay={i * 200}
            startGrid={4}
            endGrid={5}
            index={i}
            key={'barlist' + i + item.substring(0, 3)}
          >
            <ListItem color={itemColor}>{item}</ListItem>
          </StyledRevealBlock>
        );
      })}
    </BarListWrapper>
  );
};

export default BarList;
