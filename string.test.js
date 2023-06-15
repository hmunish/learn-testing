const fun = require("./functions.js");
const calculator = require("./calculator.js");

it("Check length of string", () => {
  const strLen = fun.stringLength("Munish");
  expect(strLen).toBeLessThan(10);
  expect(strLen).toBeGreaterThan(2);
});

it("Check if string is reversed", () => {
  expect(fun.reverseString("munish")).toBe("hsinum");
});

// Testing calculator class

describe("Calculator", () => {
  test("Addition", () => {
    expect(calculator.add(5, 7)).toBe(12);
  });
  test("Subtraction", () => {
    expect(calculator.subtract(7, 5)).toBe(2);
  });
  test("Multiplication", () => {
    expect(calculator.multiply(5, 3)).toBe(15);
  });
  test("Division", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
});

// Capitalize string

test("String capitalize", () => {
  expect(fun.capitalizeString("munish")).toBe("MUNISH");
  expect(fun.capitalizeString("m05")).toBe("M05");
  expect(fun.capitalizeString("981")).toBe("981");
  expect(fun.capitalizeString(981)).toBe(TypeError);
});
