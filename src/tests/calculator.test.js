const calculator = require("../modules/calculator");

test("adds the values given", () => {
  expect(calculator.sum(2, 5)).toBe(7);
});

test("subtracts the values given", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("Multiplies the values given", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

test("Divides the values given", () => {
  expect(calculator.divide(3, 2)).toBe(1.5);
});
