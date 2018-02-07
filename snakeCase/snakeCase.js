var snakeCase = function(str) {
  str = str.split(/[^\w\s]|[\s]/g);
  str = str.filter(x => x.length > 0);
  str = str.join("_");
  if (str.indexOf("_") < 0) {
    str = str.replace(/([A-Z])/g, "_$1")
  }
  return str.toLowerCase();
}


module.exports = snakeCase
