import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a string  number to a number of type number", () => {
  const result = transformToNumber("1");

  expect(result).toEqual(1);
  expect(result).toBeInstanceOf(Number);
});

it("should return NaN when a non-numeric string is passed in", () => {
  const result = transformToNumber("a1");

  expect(result).toBeNaN();
});

it("should return that number of type number when a number is passed in", () => {
  const result = transformToNumber(1);

  expect(result).toEqual(1);
  expect(result).toBeInstanceOf(Number);
});

it("should return NaN when nothing is passed in", () => {
  const result = transformToNumber();

  expect(result).toBeNaN();
});

it("should return 0 when an empty string is passed in", () => {
  const result = transformToNumber(" ");

  expect(result).toEqual(0);
});
