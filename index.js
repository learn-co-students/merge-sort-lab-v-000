function findMinAndRemoveSorted(array) {
  let min = array[0];
  let minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  return array.splice(minIndex, 1)[0];
}

function merge(firstArray, secondArray) {
  let sortedArray = [];
  while (firstArray.length && secondArray.length) {
    if (firstArray[0] < secondArray[0]) {
      sortedArray.push(firstArray.shift());
    } else {
      sortedArray.push(secondArray.shift());
    }
  }
  return sortedArray.concat(firstArray).concat(secondArray);
}

function mergeSort(array) {
  const midpoint = Math.floor(array.length/2);
  const firstHalf = array.slice(0, midpoint);
  const secondHalf = array.slice(midpoint);

  if (array.length > 1) {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  } else {
    return array;
  }
}
