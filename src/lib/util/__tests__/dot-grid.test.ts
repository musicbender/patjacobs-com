import { getTextWidth, dotsFromCoords, mapDotsWithText } from '../dot-grid';
import mockDotTextConfig from '@test/mocks/dot-text-config.json';
import { TestItem } from 'src/lib/types';

describe('util/dot-grid.js', () => {
  describe('dotsFromCoords()', () => {
    const tests: TestItem[] = [
      {
        assert: [[0, 0], 'text', 'right', 15],
        expected: [0, 1],
      },
      {
        assert: [[5, 0], 'text', 'right', 15],
        expected: [5, 6],
      },
      {
        assert: [[0, 1], 'text', 'right', 15],
        expected: [15, 16],
      },
      {
        assert: [[5, 1], 'text', 'right', 15],
        expected: [20, 21],
      },
      {
        assert: [[0, 0], 'longertext', 'right', 15],
        expected: [0, 1, 2, 3, 4],
      },
      {
        assert: [[0, 0], 't', 'right', 15],
        expected: [0],
      },
      {
        assert: [[0, 0], 'te', 'right', 15],
        expected: [0],
      },
      {
        assert: [[3, 3], 'text', 'right', 5],
        expected: [18, 19],
      },
      {
        assert: [[20, 1], 'goats', 'right', 30],
        expected: [50, 51, 52],
      },
      {
        assert: [[0, 0], 'text', 'down', 15],
        expected: [0, 15],
      },
      {
        assert: [[10, 2], 'goats', 'down', 15],
        expected: [40, 55, 70],
      },
      {
        assert: [[13, 0], 'webpack', 'down', 15],
        expected: [13, 28, 43, 58],
      },
      {
        assert: [[0, 0], 'te', 'down', 15],
        expected: [0],
      },
      {
        assert: [[0, 0], 'longertext', 'down', 10],
        expected: [0, 10, 20, 30, 40],
      },
      {
        assert: [[0, 0], 'longertext', 'down', 1],
        expected: [0, 1, 2, 3, 4],
      },
      {
        assert: [[0, 2], 'text', 'up', 15],
        expected: [30, 15],
      },
      {
        assert: [[10, 5], 'goats', 'up', 15],
        expected: [85, 70, 55],
      },
      {
        assert: [[0, 2], 'te', 'up', 15],
        expected: [30],
      },
      {
        assert: [[0, 2], 't', 'up', 15],
        expected: [30],
      },
      {
        assert: [[0, 5], 'longertext', 'up', 10],
        expected: [50, 40, 30, 20, 10],
      },
      {
        assert: [[0, 5], 'longertext', 'up', 1],
        expected: [5, 4, 3, 2, 1],
      },
      {
        assert: [[0, 0], 'veryverylongtextthatgoesforever', 'right', 20],
        expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      },
      {
        assert: [[80, 0], 'longertext', 'right', 100],
        expected: [80, 81, 82, 83, 84],
      },
      {
        assert: [[0, 0], '', 'right', 10],
        expected: [],
      },
      {
        assert: [[], 'text', 'right', 10],
        expected: [0, 1],
      },
      {
        assert: [[3, 0], 'text'],
        expected: [3, 4],
      },
      {
        assert: [],
        expected: [],
      },
      {
        assert: [[]],
        expected: [],
      },
      {
        assert: [null],
        expected: [],
      },
      {
        assert: [null, 'text'],
        expected: [0, 1],
      },
      {
        assert: [null, null, 'up'],
        expected: [],
      },
    ];

    tests.forEach(({ assert, expected }) => {
      it(`Inputing ${JSON.stringify(assert)} will return ${JSON.stringify(expected)}`, () => {
        expect(dotsFromCoords(...assert)).toEqual(expected);
      });
    });
  });

  describe('mapDotsWithText()', () => {
    const tests: TestItem[] = [
      {
        assert: [mockDotTextConfig[0], 15],
        expected: [
          15, 16, 17, 105, 90, 92, 77, 62, 47, 4, 5, 79, 64, 49, 109, 110, 35, 36, 37, 38, 81, 82,
          83, 84, 25, 40, 55, 114, 115, 116, 117, 118, 86, 87, 13, 28, 43, 58, 74, 89,
        ],
      },
      {
        assert: [mockDotTextConfig[1], 15],
        expected: [
          15, 16, 105, 90, 75, 32, 47, 62, 77, 92, 107, 4, 79, 64, 30, 31, 33, 34, 35, 36, 37, 38,
          39,
        ],
      },
      {
        assert: [mockDotTextConfig[0], 50],
        expected: [
          50, 51, 52, 350, 300, 302, 252, 202, 152, 4, 5, 254, 204, 154, 354, 355, 105, 106, 107,
          108, 256, 257, 258, 259, 60, 110, 160, 359, 360, 361, 362, 363, 261, 262, 13, 63, 113,
          163, 214, 264,
        ],
      },
      {
        assert: [mockDotTextConfig[1], 50],
        expected: [
          50, 51, 350, 300, 250, 102, 152, 202, 252, 302, 352, 4, 254, 204, 100, 101, 103, 104, 105,
          106, 107, 108, 109,
        ],
      },
      {
        assert: [
          [
            {
              text: 'text',
              position: [0, 0],
              direction: 'right',
            },
          ],
          15,
        ],
        expected: [0, 1],
      },
      {
        assert: [
          [
            {
              text: '',
              position: [0, 0],
              direction: 'right',
            },
          ],
          15,
        ],
        expected: [],
      },
    ];

    tests.forEach(({ assert, expected }) => {
      it(`Giving certain data and ${assert[1]} columns will output correct array with ${expected.length} items`, () => {
        expect(mapDotsWithText(assert[0], assert[1])).toEqual(expected);
      });
    });
  });

  describe('getTextWidth()', () => {
    const tests: TestItem[] = [
      {
        assert: ['text', 7, 6],
        expected: 'calc(14% - 3px)',
      },
      {
        assert: ['text', 12, 3],
        expected: 'calc(24% - 1.5px)',
      },
      {
        assert: ['text', 1],
        expected: 'calc(2% - 0px)',
      },
      {
        assert: ['text', 70],
        expected: 'calc(100% - 0px)',
      },
      {
        assert: ['text', -2],
        expected: 'calc(0% - 0px)',
      },
      {
        assert: ['t', 6, 6],
        expected: 'calc(3% - 3px)',
      },
      {
        assert: ['text space', 6, 10],
        expected: 'calc(30% - 5px)',
      },
      {
        assert: ['text', 7, 100],
        expected: 'calc(14% - 50px)',
      },
      {
        assert: ['text', 7, 0],
        expected: 'calc(14% - 0px)',
      },
      {
        assert: ['text'],
        expected: '0px',
      },
      {
        assert: [],
        expected: '0px',
      },
      {
        assert: [''],
        expected: '0px',
      },
      {
        assert: ['', 7],
        expected: '0px',
      },
    ];

    tests.forEach(({ assert, expected }) => {
      it(`imput of ${assert.join()} should output ${expected}`, () => {
        expect(getTextWidth(assert[0], assert[1], assert[2])).toEqual(expected);
      });
    });
  });
});
