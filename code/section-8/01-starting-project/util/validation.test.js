import { describe, expect, it } from 'vitest';
import { validateNotEmpty } from './validation.js';
// 3. test if text is not empty, do not throw error

describe('validateNotEmpty()', () => {
  it('should throw error if text is empty', () => {
    const testText = '';

    const validationFn = () => validateNotEmpty(testText);

    expect(validationFn).toThrow();
  });

  it('should not throw error if text is valid', () => {
    const testText = 'test';

    const validationFn = () => validateNotEmpty(testText);

    expect(validationFn).not.toThrow();
  });

  it('should throw error if no text is passed in', () => {
    let testText;

    const validationFn = () => validateNotEmpty(testText);

    expect(validationFn).toThrow();
  });

  it('should throw error with the provided error message', () => {
    let testText;
    const testErrorMessage = 'test';

    const validationFn = () => validateNotEmpty(testText, testErrorMessage);

    expect(validationFn).toThrow(testErrorMessage);
  });
});
