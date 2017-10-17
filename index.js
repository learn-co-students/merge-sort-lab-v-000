const findMinAndRemoveSorted = (array) => {
  var min = array[0]
  var minIndex = 0;
  for (let i=1; i<array.length; i++) {
    if (min > array[i]) {
      minIndex = i;
      min = array[i]
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function merge(arrayA, arrayB) {
  var sorted = [];
  while (arrayA.length !== 0 && arrayB.length !==0) {
    if (arrayA[0] > arrayB[0]) {
      sorted.push(arrayB.shift());
    } else {
        sorted.push(arrayA.shift());
    }
  }
  return sorted.concat(arrayA).concat(arrayB);
}

function mergeSort(array){
  let midpoint = array.length/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)

  if(array.length < 2){
    return array
  } else {
    // console.log("first and second: ",firstHalf, secondHalf)
    var sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
}
