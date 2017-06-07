function findMinAndRemoveSorted(array){
  return array.shift();
}

function merge(firstSubarray, secondSubArray){
  let sorted = [];

  while (firstSubarray.length && secondSubArray.length) {
    firstSubarray[0] <= secondSubArray[0] ?
          sorted.push(findMinAndRemoveSorted(firstSubarray)) :
          sorted.push(findMinAndRemoveSorted(secondSubArray));
  }

  return sorted.concat(firstSubarray).concat(secondSubArray);
 }

function mergeSort(array){
  if (array.length < 2) { return array };

  let middle = parseInt(array.length / 2);
  let leftArray = array.slice(0, middle);
  let rightArray = array.slice(middle, array.length);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
