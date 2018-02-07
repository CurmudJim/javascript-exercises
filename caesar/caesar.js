// function charRange(num) {
//   return Array.from({length: 26}, (x,i) => i + num);
// }
//
// function arrayRotate(arr, count) {
//   count -= arr.length * Math.floor(count / arr.length)
//   arr.push.apply(arr, arr.splice(0, count))
//   return arr
// }
//
// function offsetNumber(array , string , index, number) {
//   return arrayRotate(arrayRotate(array, string.charCodeAt(index) - array[0]) , number)[0];
// }
//
// var caesar = function(string, count=0) {
//   var wordIndex = 0
//   var rangeCap = charRange(65);
//   var rangeLow = charRange(97);
//   var newWord = ""
//
//   while (wordIndex < string.length) {
//     if (rangeCap.includes(string[wordIndex].charCodeAt(0))) {
//       newWord += String.fromCharCode(offsetNumber(rangeCap , string , wordIndex , count))
//     } else if (rangeLow.includes(string[wordIndex].charCodeAt(0))) {
//       newWord += String.fromCharCode(offsetNumber(rangeLow , string , wordIndex , count))
//     } else {
//       newWord += string[wordIndex]
//     }
//     wordIndex += 1
//   }
//
//   return newWord
//
// }

const caesar = function(string, shift) {
  return string
    .split("")
    .map(char => shiftChar(char, shift))
    .join("");
};


// The function codeSet takes a number and returns 65 if less than 97 and 97 if greater than or equal to 97.
const codeSet = code => (code < 97 ? 65 : 97);

const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shift) => {
  const code = char.charCodeAt();

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shift - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};

module.exports = caesar
