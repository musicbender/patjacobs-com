import theme from '../styles/theme';
import { ITheme } from '../../types/styles';

export const getRandomColor = (colors: ITheme = theme.corePalette): string => {
  const colorArr = Object.keys(colors);
  const randomKey = colorArr[Math.floor(Math.random() * colorArr.length)];
  return colors[randomKey];
}
