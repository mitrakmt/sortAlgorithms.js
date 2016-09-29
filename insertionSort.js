// https://initjs.org/insertion-sort-in-javascript-6c48563b4643#.7zcyztrlu

function insertionSort(array) {
  var length = array.length;

  for(var i = 1; i < length; ++i) {
    var temp = array[i];
    var j = i - 1;
    for(; j >= 0 && array[j] > temp; --j) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }

  return array;
};
