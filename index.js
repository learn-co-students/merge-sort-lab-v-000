function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(firstArray, secondArray) {
  var outArray = [];
  while(firstArray.length > 0 && secondArray.length > 0) {
    if(firstArray[0] < secondArray[0]) {
      outArray.push(firstArray.shift());
    }
    else {
      outArray.push(secondArray.shift());
    }
  }
  return outArray.concat(firstArray).concat(secondArray);
}

function mergeSort(unsorted) {
  let mid = unsorted.length/2;
  let firstHalf = unsorted.slice(0, mid);
  let secondHalf = unsorted.slice(mid, unsorted.length);

  //base case
  if(unsorted.length === 1){
    return unsorted
  }

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
