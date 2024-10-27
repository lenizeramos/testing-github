const sumLargestNumbers = require("../sumLargestNumbers");

describe("sumLargestNumbers function tests", () => {
  test("sums the two largest numbers in a simple array", () => {
    expect(sumLargestNumbers([1, 10])).toBe(11);
  });

  test("sums the two largest numbers in a larger array", () => {
    expect(sumLargestNumbers([10, 4, 34, 6, 92, 2])).toBe(126);
  });

  test("sums the two largest numbers in an array with duplicates", () => {
    expect(sumLargestNumbers([1, 2, 2, 3, 3])).toBe(5);
    expect(sumLargestNumbers([5, 5, 5, 5])).toBe(10);
  });

  test("sums the two largest numbers in a negative array", () => {
    expect(sumLargestNumbers([-1, -2, -3])).toBe(-3);
    expect(sumLargestNumbers([-10, -5, -1, -20])).toBe(-6);
  });

  test("handles an array with a single element", () => {
    expect(sumLargestNumbers([5])).toBe(5);
  });

  test("handles an empty array", () => {
    expect(sumLargestNumbers([])).toBe(NaN);
  });

  test("handles an array with all negative numbers", () => {
    expect(sumLargestNumbers([-5, -10, -15, -20])).toBe(-15);
  });

  test("handles an array with mixed positive and negative numbers", () => {
    expect(sumLargestNumbers([-10, 0, 5, 10])).toBe(15);
  });

  test("handles non-numeric values by ignoring them", () => {
    expect(sumLargestNumbers([1, "a", 3, 2])).toBe(4);
    expect(sumLargestNumbers([null, 5, undefined, 10])).toBe(15);
  });
});
