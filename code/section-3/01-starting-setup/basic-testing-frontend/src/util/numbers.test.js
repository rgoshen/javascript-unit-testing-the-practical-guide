import { it, expect, describe } from 'vitest';
import { transformToNumber } from './numbers';

describe('transformToNumber', () => {
  it('should transform a string  number to a number of type number', () => {
    const input = '1';
    const result = transformToNumber(input);

    expect(result).toEqual(+input);
    expect(result).toBeTypeOf('number');
  });

  it('should return NaN when a nontransformable value is passed in', () => {
    const input = 'a1';
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });

  it('should return that number of type number when a number is passed in', () => {
    const input = 1;
    const result = transformToNumber(input);

    expect(result).toEqual(input);
    expect(result).toBeTypeOf('number');
  });

  it('should return NaN when nothing is passed in', () => {
    const result = transformToNumber();

    expect(result).toBeNaN();
  });

  it('should return 0 when an empty string is passed in', () => {
    const input = '';
    const result = transformToNumber(input);

    expect(result).toEqual(0);
  });
});
