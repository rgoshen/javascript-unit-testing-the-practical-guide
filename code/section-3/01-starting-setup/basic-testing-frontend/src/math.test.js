import { expect, it } from 'vitest';
import { add } from './math';

it('should sum up all numbers in an array', () => {
  const result = add([1, 2, 3]);
  expect(result).toEqual(6);
});
