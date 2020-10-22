
/* eslint-disable  consistent-return */
const capitalizeString = (value) => {
  value = 'hey there this is a test';
  const check = typeof value;

  return {
    check,
    value,
  };
};

const capitalizeIt = () => {
  let uppercase = false;

  if (capitalizeString().check === 'string') {
    const newValue = capitalizeString().value.slice(0, 1).toUpperCase();
    const rest = capitalizeString().value.slice(1);
    const capitalizedAns = newValue + rest;

    if (capitalizedAns.slice(0, 1).toUpperCase()) {
      uppercase = true;
    } else {
      uppercase = false;
    }

    return {
      capitalizedAns,
      uppercase,
    };
  }
};

module.exports = {
  capitalizeString,
  capitalizeIt,
};
