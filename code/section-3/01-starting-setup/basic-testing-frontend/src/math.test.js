import { expect, it } from 'vitest';
import { add } from './math';

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
