import { getIndexOrLast, countLongestArray, reduceSegment, moveAllInArray } from '../util';
const settings = require('@configs/settings.json');
import { TestItem } from 'src/lib/types';

describe('util.js', () => {
  describe('getIndexOrLast()', () => {
    const tests: TestItem[] = [
      {
        assert: [[1, 2, 3], 1],
        expected: 2,
      },
      {
        assert: [[1, 2, 3], 2],
        expected: 3,
      },
      {
        assert: [[1, 2, 3]],
        expected: 1,
      },
      {
        assert: [[1, 2, 3], 5],
        expected: 3,
      },
      {
        assert: [[1, 2, 3], 9],
        expected: 3,
      },
      {
        assert: [[1, 2, 3, 4, 5, 6, 7], 25],
        expected: 7,
      },
      {
        assert: [['string', 'goat', 'can'], 2],
        expected: 'can',
      },
      {
        assert: [['string', 'goat', 'can'], 8],
        expected: 'can',
      },
      {
        assert: [[], 2],
        expected: false,
      },
      {
        assert: [],
        expected: false,
      },
      {
        assert: [['string', 4, true, [1, 2, 3]], 2],
        expected: true,
      },
      {
        assert: [['string', 4, true, [1, 2, 3]], 25],
        expected: [1, 2, 3],
      },
      {
        assert: ['not-an-array', 2],
        expected: false,
      },
    ];

    tests.forEach(({ assert, expected }) => {
      it(`${assert[0]} with the index of ${assert[1]} should return ${expected}`, () => {
        expect(getIndexOrLast(assert[0], assert[1])).toEqual(expected);
      });
    });
  });

  describe('countLongestArray()', () => {
    const tests: TestItem[] = [
      {
        assert: [
          [1, 2, 3],
          [1, 2, 3, 4],
        ],
        expected: 4,
        description: 'Array of 3 and 4 to return 4',
      },
      {
        assert: [
          [1, 2, 3],
          [1, 2],
        ],
        expected: 3,
        description: 'Array of 3 and 2 to return 3',
      },
      {
        assert: [
          [1, 2, 3, 7, 9, 8, 3],
          [1, 2, 3, 4],
        ],
        expected: 7,
        description: 'Array of 7 and 4 to return 7',
      },
      {
        assert: [
          [1, 2, 3],
          [1, 2],
          [1, 2],
        ],
        expected: 3,
        description: 'Array of 3, 2, and 2 to return 3',
      },
      {
        assert: [[1], []],
        expected: 1,
        description: 'Array of 1 and 0 to return 1',
      },
      {
        assert: [
          ['string', 'yes', 'no'],
          ['whatever', 'goats'],
        ],
        expected: 3,
        description: 'Array 3 and 2 to return 3',
      },
      {
        assert: [
          [1, 2],
          [1, 2],
        ],
        expected: 2,
        description: 'Array of 2 and 2 to return 2',
      },
      {
        assert: [[], []],
        expected: 0,
        description: 'Array of 0 and 0 to return 0',
      },
      {
        assert: [[1, 2, 3]],
        expected: 3,
        description: 'Array of 3 to return 3',
      },
      {
        assert: [[1, 2, 3], [1, 2, 3, 4], [1, 2], [1, 2, 3, 4, 5], [1], [1, 2]],
        expected: 5,
        description: 'Array of 3, 4, 2, 5, 1, and 2 to return 5',
      },
      {
        assert: [[]],
        expected: 0,
        description: 'Array of 0 to return 0',
      },
      {
        assert: [],
        expected: false,
        description: 'No arrays return false',
      },
      {
        assert: undefined,
        expected: false,
        description: 'No assertument returns false',
      },
    ];

    tests.forEach(({ assert, expected, description }) => {
      it(description, () => {
        expect(countLongestArray(assert)).toEqual(expected);
      });
    });
  });

  describe('reduceSegment()', () => {
    const gridLineArray: number[] = settings.gridLines;
    const tests: TestItem[] = [
      {
        assert: [0, 1, gridLineArray],
        expected: 8,
      },
      {
        assert: [0, 2, gridLineArray],
        expected: 25,
      },
      {
        assert: [0, 3, gridLineArray],
        expected: 33,
      },
      {
        assert: [0, 4, gridLineArray],
        expected: 50,
      },
      {
        assert: [0, 5, gridLineArray],
        expected: 84,
      },
      {
        assert: [0, 6, gridLineArray],
        expected: 92,
      },
      {
        assert: [0, 7, gridLineArray],
        expected: 100,
      },
      {
        assert: [1, 2, gridLineArray],
        expected: 17,
      },
      {
        assert: [1, 5, gridLineArray],
        expected: 76,
      },
      {
        assert: [5, 6, gridLineArray],
        expected: 8,
      },
      {
        assert: [5, 5, gridLineArray],
        expected: 0,
      },
      {
        assert: [0, 0, gridLineArray],
        expected: 0,
      },
      {
        assert: [0, 2, [1, 2, 3]],
        expected: 3,
      },
      {
        assert: [0, 2, [45, 1000, 1]],
        expected: 1045,
      },
      {
        assert: [2, 1, [1, 2, 3]],
        expected: 0,
      },
    ];

    tests.forEach(({ assert, expected }: TestItem) => {
      it(`From ${assert[0]} to ${assert[1]} in ${assert[2]} should output ${expected}`, () => {
        expect(reduceSegment(assert[0], assert[1], assert[2])).toEqual(expected);
      });
    });
  });

  describe('moveAllInArray()', () => {
    const tests: TestItem[] = [
      {
        assert: [[0, 1, 2, 3], 1],
        expected: [3, 0, 1, 2],
      },
      {
        assert: [[0, 1, 2, 3]],
        expected: [3, 0, 1, 2],
      },
      {
        assert: [[0, 1, 2, 3], 2],
        expected: [2, 3, 0, 1],
      },
      {
        assert: [[0, 1, 2, 3], 3],
        expected: [1, 2, 3, 0],
      },
      {
        assert: [[0, 1, 2, 3], 4],
        expected: [0, 1, 2, 3],
      },
      {
        assert: [[0, 1, 2, 3], 5],
        expected: [3, 0, 1, 2],
      },
      {
        assert: [[0, 1, 2, 3], 6],
        expected: [2, 3, 0, 1],
      },
      {
        assert: [[0, 1, 2, 3], 0],
        expected: [0, 1, 2, 3],
      },
      {
        assert: [[0, 1, 2, 3], -1],
        expected: [1, 2, 3, 0],
      },
      {
        assert: [[0, 1, 2, 3], 50],
        expected: [2, 3, 0, 1],
      },
      {
        assert: [[0, 1, 2, 3], -42],
        expected: [2, 3, 0, 1],
      },
      {
        assert: [[0, 1], 2],
        expected: [0, 1],
      },
      {
        assert: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], -6],
        expected: [6, 7, 8, 9, 0, 1, 2, 3, 4, 5],
      },
      {
        assert: [[0], 5],
        expected: [0],
      },
      {
        assert: [[], 1],
        expected: [],
      },
    ];

    tests.forEach(({ assert, expected }) => {
      it(`Array of ${assert[0]}, move by ${assert[1]} will be ${expected}`, () => {
        expect(moveAllInArray(assert[0], assert[1])).toEqual(expected);
      });
    });
  });
});
