// https://initjs.org/bubble-sort-in-javascript-19fa6fdfbb46#.k162givx8

function sort(values) {
  var origValues = values.slice();
  var length = origValues.length - 1;
  do {
    var swapped = false;
    for(var i = 0; i < length; ++i) {
      if (origValues[i] > origValues[i+1]) {
        var temp = origValues[i];
        origValues[i] = origValues[i+1];
        origValues[i+1] = temp;
        swapped = true;
      }
    }
  }
  while(swapped === true);
  return origValues;
}
