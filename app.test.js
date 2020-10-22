const calculator = require("./calculator");
const capitalize = require("./capitalize");
const reverse = require("./reverseString");
const arr = require("./arrayAnalysis");
const cypher = require("./caesercipher");

// Tests for the calculator

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

// == Capitalize  string

test("The value should be a string", () => {
  let data = "this is a test case";
  expect(capitalize.capitalizeString(data).check).toBe("string");
});

test("the first letter should be capitalized", () => {
  let data = "capitalize this string";
  expect(capitalize.capitalizeIt(data).uppercase).toEqual(true);
});

// == reverse string

test("The value should be a string", () => {
  let data = "this is a test case";

  expect(reverse.checkString(data).check).toBe("string");
});

test("The string passed in should be reversed", () => {
  let data = "this is a test case";
  expect(reverse.reverseString(data)).toBe(
    "e s a c   t s e t   a   s i   s i h t"
  );
});

// array analysis

test("The object should have properties averange, min, max and length", () => {
  let test = [1, 2, 3, 4, 5];

  expect(arr.analyze(test)).toMatchObject({
    averange: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

// encyption

test("The value should return true if its a string", () => {
  let data = "this is a test case";
  expect(cypher.caeserCipher(data).checkString()).toBe(true);
});


test("The string should be encypted", () => {
  let test = "Hey there this is a test"
  let key = 1

  expect(cypher.caeserCipher(test, key).encrypt()).toBe(
    "IFZ UIFSF UIJT JT B UFTU"
  );
});



