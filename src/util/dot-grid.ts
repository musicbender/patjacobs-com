import { SkillText } from '@types';

export const getTextWidth = (text = '', spacing: number, offset = 0): string => {
  if (!spacing || !text || typeof text !== 'string' || typeof spacing !== 'number') {
    return '0px';
  }

  if (!offset) {
    offset = 0;
  }

  const sum = text.length * (spacing / 2);
  const limitedSum = Math.max(Math.min(sum, 100), 0);

  return `calc(${limitedSum}% - ${offset / 2}px)`;
};

export const dotsFromCoords = (
  position: number[] = [0, 0],
  text = '',
  direction = 'right',
  columns = 15,
): number[] => {
  direction = direction.toLowerCase();
  let coords: number[] = position;
  let output: number[] = [];

  if (!text) {
    return [];
  }

  if (!Array.isArray(coords) || coords.length === 0) {
    coords = [0, 0];
  }

  if (coords.length === 1) {
    coords = [coords[0], 0];
  }

  if (!coords[0] || typeof coords[0] !== 'number') {
    coords[0] = 0;
  }

  if (!coords[1] || typeof coords[1] !== 'number') {
    coords[1] = 0;
  }

  const baseDot = coords[0] + coords[1] * columns;
  const dotsAmount = Math.ceil(text.length / 2);

  for (let i = 0; i < dotsAmount; i++) {
    let dot;
    switch (direction) {
      case 'up': {
        dot = baseDot - columns * i;
        break;
      }
      case 'down': {
        dot = baseDot + columns * i;
        break;
      }
      default: {
        dot = baseDot + i;
      }
    }

    output = [...output, dot];
  }

  return output;
};

export const mapDotsWithText = (textConfig: SkillText[], columns: number): number[] => {
  let output: number[] = [];

  textConfig.forEach((item: SkillText): void => {
    const { position, text, direction } = item;
    const dotArr = dotsFromCoords(position, text, direction, columns);
    output = [...output, ...dotArr];
  });

  return [...new Set(output)];
};
