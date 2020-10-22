const caeserCipher = (str, key) => {
  const checkString = () => {
    const check = typeof str;
    if (check === 'string') {
      return true;
    }
    return false;
  };

  const encrypt = () => str
    .toUpperCase()
    .replace(/[A-Z]/g, (c) => String.fromCharCode(((c.charCodeAt(0) - 65 + key) % 26) + 65));

  return {
    checkString,
    encrypt,
  };
};

module.exports = { caeserCipher };
