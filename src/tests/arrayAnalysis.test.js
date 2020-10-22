const arr = require('../modules/arrayAnalysis');

test('The object should have properties averange, min, max and length', () => {
  const test = [1, 2, 3, 4, 5];

  expect(arr.analyze(test)).toMatchObject({
    averange: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
