const numberOfVowels = require("../numberOfVowels");

describe("test case for numberOfVowels", () => {
  test("counts vowels in a simple string", () => {
    expect(numberOfVowels("hello")).toBe(2);
  });

  test("counts vowels in a longer string", () => {
    expect(numberOfVowels("This is an example.")).toBe(6);
  });

  test("counts vowels with mixed case", () => {
    expect(numberOfVowels("HeLLo WoRLd")).toBe(3);
  });

  test("returns 0 for a string with no vowels", () => {
    expect(numberOfVowels("rhythm")).toBe(0);
  });

  test("returns 0 for an empty string", () => {
    expect(numberOfVowels("")).toBe(0);
  });

  test("handles strings with numbers and special characters", () => {
    expect(numberOfVowels("12345!@#$%")).toBe(0);
    expect(numberOfVowels("abc123!@#")).toBe(1);
  });

  test("handles single-character strings", () => {
    expect(numberOfVowels("a")).toBe(1);
    expect(numberOfVowels("b")).toBe(0);
  });

  test("counts vowels correctly with different data types", () => {
    expect(() => numberOfVowels(123)).toThrow(TypeError);
    expect(() => numberOfVowels(null)).toThrow(TypeError);
    expect(() => numberOfVowels(undefined)).toThrow(TypeError);
  });

  test("counts vowels in a string with various whitespace characters", () => {
    expect(numberOfVowels("  a e i o u  ")).toBe(5);
    expect(numberOfVowels(" a  b  c ")).toBe(1);
  });
});
