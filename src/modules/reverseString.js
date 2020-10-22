
/* eslint-disable no-plusplus */
const checkString = (data) => {
  const check = typeof data;

  return {
    check,
  };
};

const reverseString = (string) => {
  const arr = [];

  for (let i = 0; i < string.length; i++) {
    arr.push(string[i]);
  }

  const reverseAns = arr.reverse();
  const ans = reverseAns.join(' ');

  return ans;
};

checkString('hey there am using whats app.');
reverseString('hey there am using whats app.');

module.exports = {
  checkString,
  reverseString,
};
