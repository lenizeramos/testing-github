const conditionalSum = require("../isEvenNumber");

describe("test case for even numbers", () => {
  test("only even numbers", () => {
    const actual = conditionalSum([2, 4], "even");
    expect(actual).toBe(6);
  });

  test("mixed numbers sum even", () => {
    const actual = conditionalSum([1, 2, 3, 4], "even");
    expect(actual).toBe(6);
  });

  test("empty array even", () => {
    const actual = conditionalSum([], "even");
    expect(actual).toBe(0);
  });

  test("negative even", () => {
    const actual = conditionalSum([-2, -4], "even");
    expect(actual).toBe(-6);
  });
});

describe("test case for odd numbers", () => {
  test("only odd numbers", () => {
    const actual = conditionalSum([1, 3], "odd");
    expect(actual).toBe(4);
  });

  test("mixed numbers sum odd", () => {
    const actual = conditionalSum([1, 2, 3, 4], "odd");
    expect(actual).toBe(4);
  });

  test("empty array odd", () => {
    const actual = conditionalSum([], "odd");
    expect(actual).toBe(0);
  });

  test("negative odd", () => {
    const actual = conditionalSum([-1, -3], "odd");
    expect(actual).toBe(-4);
  });
});
