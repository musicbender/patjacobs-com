import theme from '../styles/theme';
import { moveAllInArray } from './util';
import { ITheme } from '../../types/styles';

export const getRandomColor = (
    outputType: 'hex' | 'name' = 'hex',
    colors: ITheme = theme.corePalette
): string => {
    const colorArr = Object.keys(colors);
    const randomKey = colorArr[Math.floor(Math.random() * colorArr.length)];
    return outputType === 'hex' ? colors[randomKey] : randomKey;
};

export const getRandomColorSequence = (
    colors: string[] = Object.keys(theme.corePalette)
): string[] => {
    const randomColor: string = getRandomColor('name');
    const startIndex = colors.indexOf(randomColor);
    return moveAllInArray(colors, -startIndex);
};
