import theme from '@styles/theme';
import { Keyframes, css, FlattenSimpleInterpolation } from 'styled-components';

interface GetBlockAnimation {
  enterFrames: Keyframes;
  exitFrames: Keyframes;
  enterType?: string;
  exitType?: string;
  transition: string | null;
}

// prettier-ignore
export const getBlockAnimation = (config: GetBlockAnimation): FlattenSimpleInterpolation => {
    if (!config || !config.transition)
        return css`animation: none;`;
 
    const { slow } = theme.animate;
    const { enterFrames, exitFrames, enterType, exitType, transition } = config;
    const type = transition === 'enter' ? enterType : exitType;

    switch (`${transition}-${type}`) {
        case 'enter-blocks':
            return css`animation: ${enterFrames} ${slow} ease-in forwards;`;
        case 'enter-reverse-blocks':
            return css`animation: ${enterFrames} ${slow} ease-in forwards;`;
        case 'enter-rows':
            return css`animation: ${enterFrames} ${slow} ease-in forwards;`;
        case 'enter-full':
            return css`animation: ${enterFrames} 1000ms ease-in-out forwards;`;
        case 'exit-blocks':
            return css`animation: ${exitFrames} ${slow} ease-in forwards;`;
        case 'exit-reverse-blocks':
            return css`animation: ${exitFrames} ${slow} ease-in forwards;`;
        case 'exit-rows':
            return css`animation: ${exitFrames} ${slow} ease-in forwards;`;
        case 'exit-full':
            return css`animation: ${exitFrames} 1000ms ease-in-out forwards;`;
        default:
            return css`animation: none;`;
    }
};
