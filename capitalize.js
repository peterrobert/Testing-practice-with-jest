const capitalizeString = (value) => {
    value = "hey there this is a test"
  let check = typeof value;


  return {
    check,
    value,
  };
};



const capitalizeIt = () => {
  let uppercase = false;

  if (capitalizeString().check == "string") {
    let newValue = capitalizeString().value.slice(0, 1).toUpperCase();
    let rest = capitalizeString().value.slice(1);
    let capitalizedAns = newValue + rest;

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
  capitalizeIt
};
