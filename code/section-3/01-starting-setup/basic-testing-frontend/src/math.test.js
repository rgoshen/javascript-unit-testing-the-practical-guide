import { describe, expect, it } from 'vitest';
import { add } from './math';

describe('add', () => {
  it('should sum up all numbers in an array', () => {
    // Arrange
    const numbers = [1, 2, 3, 4, 5];
    const expectedResult = numbers.reduce((sum, number) => sum + number, 0);

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should yield NaN if at least one invalid number is provided', () => {
    // Arrange
    const numbers = [1, 2, 'invalid', 4, 5];

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBeNaN();
  });

  it('should yield a correct sum if an array of numeric string values is provided', () => {
    // Arrange
    const numbers = ['1', '2', '3', '4', '5'];
    const expectedResult = numbers.reduce(
      (sum, number) => sum + parseInt(number, 10),
      0
    );

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should yield 0 if an empty array is provided', () => {
    // Arrange
    const numbers = [];

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toEqual(0);
  });

  it('should throw an error if no value is not passed into the function', () => {
    // Arrange

    // Act
    const resultFn = () => add(); // will only execute when invoked in the expect()

    // Assert
    expect(resultFn).toThrow(/is not iterable/);
  });

  it('should throw an error if multiple arguments are provided instead of an array', () => {
    // Arrange
    const num1 = 1,
      num2 = 2,
      num3 = 3;

    // Act
    const resultFn = () => add(num1, num2, num3); // will only execute when invoked in the expect()

    // Assert
    expect(resultFn).toThrow(/is not iterable/);
  });
});
