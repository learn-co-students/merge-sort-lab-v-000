function findMinAndRemoveSorted(array){
  // 1. finds and removes the smallest element in a sorted array
  // 2. return the smallest element
  return array.shift()
}

function merge(array1, array2){
  // 1. find the minimum element as between the 2 arrays
  // 2. push the mininimum into a new array
  // 3. repeat 1 & 2 until array1 or array2 is empty
  // 4. concat the altered array1 & array2 (now empty or holding remaining elements)
  //    to the new array & return the combination
  let sorted = [];
  while(array1.length != 0 && array2.length != 0){
    if(array1[0]<array2[0]){
      sorted.push(findMinAndRemoveSorted(array1))
    }else{
      sorted.push(findMinAndRemoveSorted(array2))
    }
  }
  return sorted.concat(array1).concat(array2)
}

function mergeSort(array){
  // 1. Split the array in half
  // 2. keeping splitting until you have a collection of single element arrays
  // 3. merge the arrays until their combined
  // 4. return the merged array
  let midpoint = array.length/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)
  let sorted;
  if(array.length<2){
    return array
  }else{
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted;
}