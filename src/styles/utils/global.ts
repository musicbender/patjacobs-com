import { css } from 'styled-components';
import { IGridPositionParams } from '../../../types/styles';
import theme from '../theme';

export const px2rem = (px: number) => `${px / 16}rem`;

export const superCenter = (left = '50%', top = '50%', x = '-50%', y = '-50%') => {
    return css`
        position: absolute;
        top: ${top};
        left: ${left};
        transform: translate(${x}, ${y});
    `;
};

export const gridSizes: { [key: string]: number } = theme.gridSizes;

export const gridValue = (size = 's', unit = '%'): string => {
    return gridSizes[size] + unit;
};

export const gridPosition = (config: IGridPositionParams) => {
    const { gridLines = [], index = 0, prop = 'left', attach = 'left' } = config;
    const validUnits: string[] = ['%', 'vw'];
    let unit: string = config.unit || '%';
    let percent = 0;

    if (!gridLines[index]) {
        return css`
            ${prop}: 0%;
        `;
    }

    if (!validUnits.includes(unit)) {
        unit = validUnits[0];
    }

    for (let i = 0; i <= index; i++) {
        percent += gridLines[i];
    }

    percent = gridLines.reduce((total, cur, i) => {
        return i <= index ? total + cur : total;
    });

    return css`
        ${`${prop}: ${`${percent}${unit}`}`};
        ${attach === 'right' && 'transform: translateX(-100%)'};
    `;
};

export const getGridWidth = (start: number, end: number, gridLines: number[] = []): number => {
    if (!gridLines[start] || !gridLines[end]) throw new Error('grid index does not exist');
    if (!gridLines) throw new Error('gridlines are required to get grid width');
    if (start > end) return 0;

    let output = start;

    for (let i = 1; i < end - start; i++) {
        output += gridLines[start + i];
    }

    return output;
};
