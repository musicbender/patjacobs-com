import React from 'react';
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
    const singleColor: CoreColors =
        colorPattern === 'single' ? color || (getRandomColor('name') as CoreColors) : null;
    const colors: CoreColors[] = colorPattern === 'multi' && getRandomColorSequence();

    return (
        <BarListWrapper>
            {items.map((item: string, i: number) => {
                const itemColor: CoreColors =
                    singleColor ||
                    colors[i - colors.length * Math.floor(i / colors.length)] ||
                    'aqua';

                return (
                    <StyledRevealBlock
                        active={active}
                        delay={i * 200}
                        startGrid={4}
                        endGrid={6}
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
