function findMinAndRemoveSorted(array) {
  var min = array[0];
  var minIndex = 0;
  for (var i = 0; i < array.length; i++) {
    if(array[i] < min){
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function merge(firsthalf, secondhalf){
  let sorted = [];
  let firstMin;
  let secondMin;
  while(firsthalf.length != 0 && secondhalf.length != 0){
    let firstMin = findMinAndRemoveSorted(firsthalf);
    let secondMin = findMinAndRemoveSorted(secondhalf);
    firstMin < secondMin ? sorted.push(firstMin) : sorted.push(secondMin);
    firstMin < secondMin ? secondhalf.push(secondMin) : firsthalf.push(firstMin);
  }
  while(firsthalf.length != 0){
    let firstMin = findMinAndRemoveSorted(firsthalf);
    sorted.push(firstMin);
  }
  while(secondhalf.length != 0){
    let secondMin = findMinAndRemoveSorted(secondhalf);
    sorted.push(secondMin);
  }
  return sorted.concat(firsthalf).concat(secondhalf);
}

function mergeSort(array){
  var midPoint = array.length/2;
  var firstHalf = array.slice(0, midPoint);
  var secondHalf = array.slice(midPoint, array.length);

  if(array.length < 2){
    return array;
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}
