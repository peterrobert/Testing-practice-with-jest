const cypher = require('../modules/caesercipher');

test('The value should return true if its a string', () => {
  const data = 'this is a test case';
  expect(cypher.caeserCipher(data).checkString()).toBe(true);
});

test('The string should be encypted', () => {
  const test = 'Hey there this is a test';
  const key = 1;

  expect(cypher.caeserCipher(test, key).encrypt()).toBe(
    'IFZ UIFSF UIJT JT B UFTU',
  );
});
