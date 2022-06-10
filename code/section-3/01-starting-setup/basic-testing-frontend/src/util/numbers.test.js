import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform a string  number to a number of type number', () => {
  const input = '1';
  const result = transformToNumber(input);

  expect(result).toEqual(+input);
  expect(result).toBeTypeOf('number');
});

it('should return NaN when a non-numeric string is passed in', () => {
  const input = 'a1';
  const result = transformToNumber(input);

  expect(result).toBeNaN();
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
