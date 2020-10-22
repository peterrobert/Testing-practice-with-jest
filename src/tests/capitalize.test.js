const capitalize = require("../modules/capitalize");

test("The value should be a string", () => {
  let data = "this is a test case";
  expect(capitalize.capitalizeString(data).check).toBe("string");
});

test("the first letter should be capitalized", () => {
  let data = "capitalize this string";
  expect(capitalize.capitalizeIt(data).uppercase).toEqual(true);
});
