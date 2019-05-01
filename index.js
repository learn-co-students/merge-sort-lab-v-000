function findMinAndRemoveSorted(array) {
  let min = array[0]
  let minIndex = 0
  for(let i = 0; i < array.length; i++){
    let currentElement = array[i]
    if(array[i] < min){
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function merge(firstSubarray, secondSubArray){
  let sorted = []
  while(firstSubarray.length != 0 && secondSubArray.length != 0){
    if(firstSubarray[0] < secondSubArray[0]){
      sorted.push(findMinAndRemoveSorted(firstSubarray))
    } else {
      sorted.push(findMinAndRemoveSorted(secondSubArray))
    }
  }
  return sorted.concat(firstSubarray).concat(secondSubArray)
}

function mergeSort(array) {
  let sorted = []
  while(array.length != 0){
    sorted.push(findMinAndRemoveSorted(array))
    };
  return sorted

}
