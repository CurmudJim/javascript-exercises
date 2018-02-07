function add (a,b) {
	return a + b;
}

function subtract (a,b) {
	return a - b;
}

function sum (a) {
	const reducer = (accumulator, currentValue) => accumulator + currentValue;

	if (a.length > 0) {
		return a.reduce(reducer);
	} else {
		return 0
	}
}

function multiply (a) {
	const reducer = (accumulator, currentValue) => accumulator * currentValue;

	if (a.length > 0) {
		return a.reduce(reducer);
	} else {
		return 0
	}
}

function power(a,b) {
	return Math.pow(a,b)
}

function factorial(a) {
	if (a <= 1) {
		return 1;
	} else {
  var result = "";
  var i = 0;
  b = a;
  do {
    i += 1;
    a = a * (b-i);
  } while (b-i > 1);
  return a;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
