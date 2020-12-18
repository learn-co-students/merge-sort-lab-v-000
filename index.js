function mergeSort(array){
  // divide the array into half until only 1-element arrays are left
  let subset1 = array.slice(0,array.length/2)
  let subset2 = array.slice(array.length/2)
  let sorted;
  // if array is one element, it is already sorted
  if (array.length < 2){
    return array;
  // otherwise recursively call mergeSort, and then merge the result
  } else {
    sorted = merge(mergeSort(subset1), mergeSort(subset2));
  }
  return sorted;
}

function findMinAndRemoveSorted(array){
  return array.shift();
}

function merge(array1, array2){
  let sorted = [];
  while (array1.length > 0 && array2.length > 0){
    if (array1[0] < array2[0]){
      sorted.push(findMinAndRemoveSorted(array1));
    }
    else {
      sorted.push(findMinAndRemoveSorted(array2));
    }
  }
  return sorted.concat(array1, array2);
}