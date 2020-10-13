const calculator =  require("./calculator");
const capitalize = require('./capitalize')
// Tests for the calculator

test("adds the values given", () =>{
    expect(calculator.sum(2, 5)).toBe(7);
});

test("subtracts the values given", () =>{
    expect(calculator.subtract(3, 2)).toBe(1);
});


test("Multiplies the values given", () =>{
    expect(calculator.multiply(3, 2)).toBe(6);
});

test("Divides the values given", () =>{
    expect(calculator.divide(3, 2)).toBe(1.5);
});


// == Capitalize  string 

test("The value should be a string", () => {

    let data = "this is a test case"
  expect (capitalize.capitalizeString.check(data)).toBe('string');
})
