function findMinAndRemoveSorted(array) {
  let min = array[0];
  let minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = 1;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function merge(array1, array2) {
  let answerArray = [];
  //let ind1 = 0;
  //let ind2 = 0;
  while (array1.length > 0 && array2.length > 0) {
    if (array1[0] < array2[0]) {
      answerArray.push(findMinAndRemoveSorted(array1));
    }
    else {
      answerArray.push(findMinAndRemoveSorted(array2));
    }
  }
  return answerArray.concat(array1).concat(array2);
}

function mergeSort(array) {
  let midpoint = array.length/2;
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint, array.length);

  if (array.length < 2) {
    return array
  }
  else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}
