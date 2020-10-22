const reverse = require("../modules/reverseString");

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
