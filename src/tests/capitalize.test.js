const capitalize = require('../modules/capitalize');

test('The value should be a string', () => {
  const data = 'this is a test case';
  expect(capitalize.capitalizeString(data).check).toBe('string');
});

test('the first letter should be capitalized', () => {
  const data = 'capitalize this string';
  expect(capitalize.capitalizeIt(data).uppercase).toEqual(true);
});
