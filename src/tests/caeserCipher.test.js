const cypher = require("../modules/caesercipher");

test("The value should return true if its a string", () => {
  let data = "this is a test case";
  expect(cypher.caeserCipher(data).checkString()).toBe(true);
});

test("The string should be encypted", () => {
  let test = "Hey there this is a test";
  let key = 1;

  expect(cypher.caeserCipher(test, key).encrypt()).toBe(
    "IFZ UIFSF UIJT JT B UFTU"
  );
});
