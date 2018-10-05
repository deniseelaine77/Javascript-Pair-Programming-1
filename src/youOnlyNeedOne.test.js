import { check } from './index';

const trueTest = {
  test1: {
    arr: ['a', 'b', 'c', 'a', 'd'],
    lookFor: 'a',
    expected: true
  },
  test2: {
    arr: ['a', 'b'],
    lookFor: 'a',
    expected: true
  },
  test3: {
    arr: ['a', 'b', 'c', 'a', 'd'],
    lookFor: 'f',
    expected: false
  },
  test4: {
    arr: [1, 2, 3, 4, 5, 6],
    lookFor: 3,
    expected: true
  },
  test5: {
    arr: [1, 2, 3, 'a', 'b', 'c', 'd'],
    lookFor: 'b',
    expected: true
  },
  test6: {
    arr: ['z', 'x', 'c', 'v'],
    lookFor: 'v',
    expected: true
  },
  test7: {
    arr: ['be', 'fg', 'ze', 'bf'],
    lookFor: 'be',
    expected: true
  }
};

const testAllValues = (testCases, expectedTestResult) => {
  for (let key in trueTest) {
    let testValues = trueTest[key];
    let testInfo = 'Array [' + testValues.arr.toString() + '] ' +
                  ' looking for ' + testValues.lookFor + ', expecting ' + testValues.expected
    test(testInfo,
      () => {
        expect(check(testValues.arr, testValues.lookFor)).toBe(testValues.expected);
      }
    );
  }
};

testAllValues(trueTest, true);