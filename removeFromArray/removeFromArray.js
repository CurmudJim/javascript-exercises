var removeFromArray = function(array, ...element) {

  element.forEach(function(i){
    array = array.filter(e => e !== i);
  });

  return array;

};

module.exports = removeFromArray
