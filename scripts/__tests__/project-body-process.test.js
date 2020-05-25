import { processRawBody } from '../project-body-process';

// mocks
const mockProjectBody1 = require('../../test/mocks/project-body-1.json');
const mockProjectBody2 = require('../../test/mocks/project-body-2.json');

describe('scripts/project-body-process.js', () => {
  describe('processRawBody()', () => {
    const tests = [
      mockProjectBody1,
      mockProjectBody2,
    ];

    tests.forEach(({assert, expected}, i) => {
      it(`Mock raw body #${i + 1} should output correctly`, () => {
        expect(processRawBody(assert)).toEqual(expected);
      });
    })
  });
});