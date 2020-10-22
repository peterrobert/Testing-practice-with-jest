let analyze = (arr) => {
  function avarange() {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }

    return avg = total / arr.length
  }

  function min() {
    return Math.min(...arr);
  }

  function max() {
    return Math.max(...arr);
  }

  function length() {
    return arr.length;
  }

  return {
    averange: avarange(),
    min: min(),
    max: max(),
    length: length(),
  };
};


module.exports = {
  analyze,
};
