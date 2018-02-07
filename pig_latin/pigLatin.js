function translate(string) {
	let stringArray = string.split(" ");
  let newArray = [];
	stringArray.forEach(function(e) {
	  let f = "";
	  while (e[0].match(/[aeiouy]/ig) === null || (f.includes("q") && e[0] === "u")) {
	    f = f + e[0];
	    e = e.substr(1);
	  }
	  newArray.push(e + f + "ay");
  });
  return newArray.join(" ");
}


module.exports = {
	translate
}
