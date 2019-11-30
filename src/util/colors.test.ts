import theme from '../styles/theme';
import { getRandomColor } from './colors';

describe('util/colors.js', function () {
  describe('getRandomColor()', function () {
    const testsNum = 10;
    for (let i = 0; i < testsNum; i++) {
      it(`#${i + 1} - Expect random color to be one of the list of colors`, function () {
        expect(Object.values(theme.corePalette)).toContain(getRandomColor());
      });
    }
  });
});
