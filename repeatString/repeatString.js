var repeatString = function(text,length) {
  if (length >= 0) {
    return text.repeat(length);
  } else {
    return "ERROR";
  }
}

module.exports = repeatString
