function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(array1, array2) {
  const sorted = [];
  const length = array1.length + array2.length;

  for (let i = 0; i < length; i++) {
    if (array1.length > 0 && array2.length > 0) {
      sorted.push(array1[0] < array2[0] ? array1.shift() : array2.shift());
    } else {
      sorted.push(array1.length > 0 ? array1.shift() : array2.shift());
    }
  }

  return sorted;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const midPoint = Math.round(array.length / 2);
    const firstHalf = array.slice(0, midPoint);
    const secondHalf = array.slice(midPoint, array.length);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}










































// function findMinAndRemoveSorted(array){
//   return array.shift()
// }

// function merge(firstSubarray, secondSubArray){
//   let sorted = []
//   while(firstSubarray.length != 0 && secondSubArray.length != 0){
//     if(firstSubarray[0] < secondSubArray[0]){
//       sorted.push(findMinAndRemoveSorted(firstSubarray))
//     } else {
//       sorted.push(findMinAndRemoveSorted(secondSubArray))
//     }
//   }
//   return sorted.concat(firstSubarray).concat(secondSubArray)
// }

// function mergeSort(array){
//   let midpoint = array.length/2
//   let firstHalf = array.slice(0, midpoint)
//   let secondHalf = array.slice(midpoint, array.length)
//   let sorted;

//   if(array.length < 2){
//     return array
//   } else {
//     sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
//   }
//   return sorted
// }
