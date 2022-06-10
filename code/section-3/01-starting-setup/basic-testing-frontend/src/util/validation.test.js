import { it, expect, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty', () => {
  it('should throw an error if the string is empty', () => {
    const validationFn = () => validateStringNotEmpty('');

    expect(validationFn).toThrow(/Invalid input - must not be empty/);
  });

  it('should not throw an error if the string is not empty', () => {
    const input = 'asdf';
    const validationFn = () => validateStringNotEmpty(input);

    expect(validationFn).not.toThrow(/Invalid input - must not be empty/);
  });
});

describe('validateNumber', () => {
  it('should throw an error if the number is not a number', () => {
    const input = 'asdf';
    const validationFn = () => validateNumber(input);

    expect(validationFn).toThrow(/Invalid number input/);
  });

  it('should throw an error if the input is NaN', () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);

    expect(validationFn).toThrow(/Invalid number input/);
  });

  it('should throw an error if the number is a numeric string', () => {
    const input = '1';
    const validationFn = () => validateNumber(input);

    expect(validationFn).toThrow(/Invalid number input/);
  });

  it('should not throw an error if the input is a number', () => {
    const input = 1;
    const validationFn = () => validateNumber(input);

    expect(validationFn).not.toThrow(/Invalid number input/);
  });
});
