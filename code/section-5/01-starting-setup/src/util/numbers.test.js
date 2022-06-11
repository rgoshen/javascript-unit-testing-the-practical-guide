import { it, expect, describe } from 'vitest';

import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber', () => {
  it('should transform a string number to a number of type number', () => {
    const input = '1';

    const result = transformToNumber(input);

    expect(result).toBeTypeOf('number');
  });

  it('should transform a string number to a number of type number', () => {
    const input = '1';

    const result = transformToNumber(input);

    expect(result).toBe(+input);
  });

  it('should yield NaN for non-transformable values', () => {
    const input = 'invalid';
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe('cleanNumbers()', () => {
  it('should return an array of numbers if an array of string number values is passed in', () => {
    const input = ['1', '2', '3'];

    const result = cleanNumbers(input);

    expect(result).toBeTypeOf('object');
    expect(result).toHaveLength(3);
    for (const number of result) {
      expect(number).toBeTypeOf('number');
    }
  });

  it('should throw an error if at least one of the values in an array is an empty string', () => {
    const input = ['1', '', '3'];

    const validationFn = () => cleanNumbers(input);

    expect(validationFn).toThrow(/Invalid/);
  });

  it('should throw an error if at least one of the values in an array is not a string number', () => {
    const input = ['1', 'a', '3'];

    const validationFn = () => cleanNumbers(input);

    expect(validationFn).toThrow(/Invalid/);
  });
});
