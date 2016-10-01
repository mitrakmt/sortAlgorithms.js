// InsertionSort to be used within bucket sort
function insertionSort(array) {
  var length = array.length;

  for(var i = 1; i < length; ++i) {
    var temp = array[i];
    var j = i - 1;
    for(; j >= 0 && array[j] > temp; --j) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }

  return array;
}

// Implement bucket sort
function bucketSort(array, bucketSize) {
  if (array.length === 0) {
    return array;
  }

  var i,
      minValue = array[0],
      maxValue = array[0],
      bucketSize = bucketSize || 5;

  for (i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  // Initializing buckets
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var allBuckets = new Array(bucketCount);

  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }

  for (i = 0; i < array.length; i++) {
    allBuckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  }

  // Sorting buckets
  array.length = 0;
  for (i = 0; i < allBuckets.length; i++) {
    // Using helper insertion sort function to sort buckets
    insertionSort(buckets[i]);
    for (var j = 0; j < allBuckets[i].length; j++) {
      array.push(allBuckets[i][j]);
    }
  }

  return array;
}
