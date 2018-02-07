var palindromes = function(text) {
  text = text.replace(/[^\w]/g, "").toLowerCase();
  var reverse = text.split("").reverse().join("");
  return text === reverse;
}

module.exports = palindromes
