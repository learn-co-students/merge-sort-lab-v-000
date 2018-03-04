
function findMinAndRemoveSorted(array) {
  return array.shift();
};

function merge(array1, array2) {
  let array = [];
  while (array1.length !== 0 && array2.length !== 0) {
    array1[0] < array2[0] ? array.push(findMinAndRemoveSorted(array1)) : array.push(findMinAndRemoveSorted(array2))
  }
  return array.concat(array1).concat(array2)
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let med = array.length/2;
    let array1 = array.slice(0, med)
    let array2 = array.slice(med, array.length)
    return merge(mergeSort(array1), mergeSort(array2))
  }
}
