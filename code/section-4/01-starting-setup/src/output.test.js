import { it, expect, describe } from 'vitest';
import { generateResultText } from './output';

describe('generateResultText()', () => {
  it('should return a string that contains the calculation result if a number is provided as a result', () => {
    const value = 7;
    const result = generateResultText(value);

    expect(result).toContain(result.toString());
  });

  it('should return a string no matter what is provided as a result', () => {
    const value1 = 'invalid';
    const value2 = 7;
    const value3 = false;

    const result1 = generateResultText(value1);
    const result2 = generateResultText(value2);
    const result3 = generateResultText(value3);

    expect(result1).toBeTypeOf('string');
    expect(result2).toBeTypeOf('string');
    expect(result3).toBeTypeOf('string');
  });

  it('should return an empty string if "no-calc" is passed in', () => {
    const value = 'no-calc';
    const result = generateResultText(value);

    expect(result).toEqual('');
    expect(result).toBeTypeOf('string');
  });
});

it('should return a string that contains "invalid" when "invalid" is passed in', () => {
  const value = 'invalid';

  const result = generateResultText(value);

  expect(result).toContain('Invalid');
});
