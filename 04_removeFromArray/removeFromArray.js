const removeFromArray = function(array, ...element) {
  const arraySize = array.length
    for (let i = 0; i < arraySize; i++) {
      const index = array.indexOf(element[i]);
      if (index > -1) {
        const index = array.indexOf(element[i]);
        array.splice(index, 1);
      }
    }
    return array;
}
// Do not edit below this line
module.exports = removeFromArray;
