var sumAll = function(start, end) {
  try {
    if (start < 0 || end < 0 || Number.isInteger(start) === false || Number.isInteger(end) === false) {
      throw new Error();
    }
    array = Array((Math.max(start,end)+1)-Math.min(start,end)).join(0).split(0).map(function(val, id) {return id+Math.min(start,end)});

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return array.reduce(reducer);
  } catch(e) {
    return "ERROR";
  }

}

module.exports = sumAll
