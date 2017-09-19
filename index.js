function findMinAndRemoveSorted(array) {
  let min = array[0];
  let minIndex = 0;

  for (var i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);

  return min;
}

function merge(left, right) {
  const sorted = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...left, ...right];
}

function mergeSort(array) {
  var midpoint = Math.floor(array.length / 2)
  var left = array.slice(0, midpoint);
  var right = array.slice(midpoint);

  if (array.length <= 1) {
    return array;
  }

  return merge(mergeSort(left), mergeSort(right));
}