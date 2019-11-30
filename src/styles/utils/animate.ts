import theme from '../theme';
import { Keyframes } from 'styled-components';

interface IgetBlockAnimation {
  enterFrames: Keyframes, 
  exitFrames: Keyframes, 
  enterType?: string
  exitType?: string,
  transition: string | null
}

export const getBlockAnimation = (config: IgetBlockAnimation): string => {
  const { slow } = theme.animate;
  const { enterFrames, exitFrames, enterType, exitType, transition } = config;

  if (!transition) return 'animation: none;';
  
  const type = transition === 'enter' ? enterType : exitType;

  switch(`${transition}-${type}`) {
    case 'enter-blocks': 
      return `animation: ${enterFrames} ${slow} ease-in forwards;`;
    case 'enter-reverse-blocks': 
      return `animation: ${enterFrames} ${slow} ease-in forwards;`;
    case 'enter-rows':
      return `animation: ${enterFrames} ${slow} ease-in forwards;`;
    case 'enter-full':
      return `animation: ${enterFrames} 1000ms ease-in-out forwards;`;
    case 'exit-blocks': 
      return `animation: ${exitFrames} ${slow} ease-in forwards;`;
    case 'exit-reverse-blocks': 
      return `animation: ${exitFrames} ${slow} ease-in forwards;`;
    case 'exit-rows':
      return `animation: ${exitFrames} ${slow} ease-in forwards;`;
    case 'exit-full':
      return `animation: ${exitFrames} 1000ms ease-in-out forwards;`;
    default:
      return 'animation: none;';
  }
}