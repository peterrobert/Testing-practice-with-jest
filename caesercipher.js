const caeserCipher = (str, key) => {
  const checkString = () => {
    let check = typeof str;
    if (check == "string") {
      return true;
    } else {
      return false;
    }
  };

  const encrypt = () => {
    return str
      .toUpperCase()
      .replace(/[A-Z]/g, (c) =>
        String.fromCharCode(((c.charCodeAt(0) - 65 + key) % 26) + 65)
      );
  };

  const decrypt = () => {
    return encrypt()
      .toUpperCase()
      .replace(/[A-Z]/g, (c) =>
        String.fromCharCode(((c.charCodeAt(0) - 65 + key) % 26) + 65)
      );
  };

  return {
    checkString,
    encrypt,
    decrypt,
  };
};

module.exports = {
  caeserCipher,
};
