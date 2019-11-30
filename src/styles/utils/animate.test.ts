import { getBlockAnimation } from './animate';
import { css } from 'styled-components';
import { mockKeyframes } from '../../../test/mocks/styled';
import theme from '../theme';

describe('styles/utils/animate.ts', () => {
  describe('getBlockAnimation()', () => {
    const { slow } = theme.animate;
    const conf = {
      enterFrames: mockKeyframes,
      exitFrames: mockKeyframes,
    };

    const tests: any[] = [
      {
        assert: {
          ...conf,
          enterType: null,
          exitType: 'blocks',
          transition: 'exit',
        },
        expected: css`animation: ${mockKeyframes} ${slow} ease-in forwards;`,
        description: 'Exit type is "blocks" and trans "exit" outputs correct animation',
      },
      {
        assert: {
          ...conf,
          enterType: null,
          exitType: 'reverse-blocks',
          transition: 'exit',
        },
        expected: css`animation: ${mockKeyframes} ${slow} ease-in forwards;`,
        description: 'Exit type is "reverse-blocks" and trans "exit" outputs correct animation',
      },
      {
        assert: {
          ...conf,
          enterType: null,
          exitType: 'rows',
          transition: 'exit',
        },
        expected: css`animation: ${mockKeyframes} ${slow} ease-in forwards;`,
        description: 'Exit type is "reverse-blocks" and trans "exit" outputs correct animation',
      },
      {
        assert: {
          ...conf,
          enterType: null,
          exitType: 'full',
          transition: 'exit',
        },
        expected: css`animation: ${mockKeyframes} 1000ms ease-in-out forwards;`,
        description: 'Exit type is "full" and trans "exit" outputs correct animation',
      },
      {
        assert: {
          ...conf,
          enterType: 'blocks',
          exitType: null,
          transition: 'enter',
        },
        expected: css`animation: ${mockKeyframes} ${slow} ease-in forwards;`,
        description: 'Enter type is "blocks" and trans "enter" outputs correct animation',
      },
      {
        assert: {
          ...conf,
          enterType: 'reverse-blocks',
          exitType: null,
          transition: 'enter',
        },
        expected: css`animation: ${mockKeyframes} ${slow} ease-in forwards;`,
        description: 'Enter type is "reverse-blocks" and trans "enter" outputs correct animation',
      },
      {
        assert: {
          ...conf,
          enterType: 'rows',
          exitType: null,
          transition: 'enter',
        },
        expected: css`animation: ${mockKeyframes} ${slow} ease-in forwards;`,
        description: 'Enter type is "reverse-blocks" and trans "enter" outputs correct animation',
      },
      {
        assert: {
          ...conf,
          enterType: 'full',
          exitType: null,
          transition: 'enter',
        },
        expected: css`animation: ${mockKeyframes} 1000ms ease-in-out forwards;`,
        description: 'Enter type is "full" and trans "enter" outputs correct animation',
      },
      {
        assert: {
          ...conf,
          enterType: null,
          exitType: null,
          transition: 'enter',
        },
        expected: css`animation: none;`,
        description: 'Trans is enter and no enter type returns: none',
      },
      {
        assert: {
          ...conf,
          enterType: null,
          exitType: null,
          transition: 'exit',
        },
        expected: css`animation: none;`,
        description: 'Trans is exit and no exit type returns: none',
      },
      {
        assert: null,
        expected: css`animation: none;`,
        description: 'No config returns: none',
      },
      {
        assert: {
          ...conf,
          enterType: null,
          exitType: null,
          transition: null,
        },
        expected: css`animation: none;`,
        description: 'No transition returns: none',
      },
    ];

    tests.forEach(({ assert, expected, description }) => {
      it(description, () => {
        expect(getBlockAnimation(assert)).toEqual(expected);
      });
    });
  });
})