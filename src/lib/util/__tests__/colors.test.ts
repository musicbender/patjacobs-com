import theme from 'src/lib/styles/theme';
import { getRandomColor, getRandomColorSequence } from '../colors';

describe('util/colors.js', () => {
  describe('getRandomColor()', () => {
    const testsNum = 10;
    for (let i = 0; i < testsNum; i++) {
      it(`#${i + 1} - Expect random color to be one of the list of colors`, () => {
        expect(Object.values(theme.corePalette)).toContain(getRandomColor());
      });
    }
  });

  describe('getRandomColorSequence()', () => {
    const testsNum = 10;
    const expected: string[][] = [
      ['aqua', 'orange', 'purple', 'yellow'],
      ['orange', 'purple', 'yellow', 'aqua'],
      ['purple', 'yellow', 'aqua', 'orange'],
      ['yellow', 'aqua', 'orange', 'purple'],
    ];

    for (let i = 0; i < testsNum; i++) {
      it(`#${i + 1} - Expect random color to be an expected array of colors`, () => {
        const randomSequence = getRandomColorSequence(expected[0]);
        expect(
          JSON.stringify(randomSequence) === JSON.stringify(expected[0]) ||
            JSON.stringify(randomSequence) === JSON.stringify(expected[1]) ||
            JSON.stringify(randomSequence) === JSON.stringify(expected[2]) ||
            JSON.stringify(randomSequence) === JSON.stringify(expected[3]),
        ).toBeTruthy();
      });
    }
  });
});
