
/* eslint-disable  no-plusplus */
const analyze = (arr) => {
  function avarange() {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }

    const avg = total / arr.length;

    return avg;
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
