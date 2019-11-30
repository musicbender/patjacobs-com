import { getIndexOrLast, countLongestArray } from './util';
import { TestItem } from '../../types/global';

describe('util.js', function () {
  describe('getIndexOrLast()', function () {
    const tests: TestItem[] = [
      {
        assert: [
          [1, 2, 3],
          1
        ],
        expected: 2
      },
      {
        assert: [
          [1, 2, 3],
          2
        ],
        expected: 3
      },
      {
        assert: [
          [1, 2, 3]
        ],
        expected: 1
      },
      {
        assert: [
          [1, 2, 3],
          5
        ],
        expected: 3
      },
      {
        assert: [
          [1, 2, 3],
          9
        ],
        expected: 3
      },
      {
        assert: [
          [1, 2, 3, 4, 5, 6, 7],
          25
        ],
        expected: 7
      },
      {
        assert: [
          ['string', 'goat', 'can'],
          2
        ],
        expected: 'can'
      },
      {
        assert: [
          ['string', 'goat', 'can'],
          8
        ],
        expected: 'can'
      },
      {
        assert: [
          [],
          2
        ],
        expected: false
      },
      {
        assert: [],
        expected: false
      },
      {
        assert: [
          ['string', 4, true, [1, 2, 3]],
          2
        ],
        expected: true
      },
      {
        assert: [
          ['string', 4, true, [1, 2, 3]],
          25
        ],
        expected: [1, 2, 3]
      },
      {
        assert: [
          'not-an-array',
          2
        ],
        expected: false
      }
    ];

    tests.forEach(({ assert, expected }) => {
      it(`${assert[0]} with the index of ${assert[1]} should return ${expected}`, function () {
        expect(getIndexOrLast(assert[0], assert[1])).toEqual(expected);
      });
    });
  });

  describe('countLongestArray()', function () {
    const tests: TestItem[] = [
      {
        assert: [[1,2,3], [1,2,3,4]],
        expected: 4,
        description: 'Array of 3 and 4 to return 4'
      },
      {
        assert: [[1,2,3], [1,2]],
        expected: 3,
        description: 'Array of 3 and 2 to return 3'
      },
      {
        assert: [[1,2,3,7,9,8,3], [1,2,3,4]],
        expected: 7,
        description: 'Array of 7 and 4 to return 7'
      },
      {
        assert: [[1,2,3], [1,2], [1, 2]],
        expected: 3,
        description: 'Array of 3, 2, and 2 to return 3'
      },
      {
        assert: [[1], []],
        expected: 1,
        description: 'Array of 1 and 0 to return 1'
      },
      {
        assert: [['string', 'yes', 'no'], ['whatever', 'goats']],
        expected: 3,
        description: 'Array 3 and 2 to return 3'
      },
      {
        assert: [[1, 2], [1, 2]],
        expected: 2,
        description: 'Array of 2 and 2 to return 2'
      },
      {
        assert: [[], []],
        expected: 0,
        description: 'Array of 0 and 0 to return 0'
      },
      {
        assert: [[1,2,3]],
        expected: 3,
        description: 'Array of 3 to return 3'
      },
      {
        assert: [[1,2,3], [1,2,3,4], [1, 2], [1, 2, 3, 4, 5], [1], [1, 2]],
        expected: 5,
        description: 'Array of 3, 4, 2, 5, 1, and 2 to return 5'
      },
      {
        assert: [[]],
        expected: 0,
        description: 'Array of 0 to return 0'
      },
      {
        assert: [],
        expected: false,
        description: 'No arrays return false'
      },
      {
        assert: undefined,
        expected: false,
        description: 'No assertument returns false'
      }
    ];

    tests.forEach(({ assert, expected, description }) => {
      it(description, function () {
        expect(countLongestArray(assert)).toEqual(expected);
      });
    });
  });
});
