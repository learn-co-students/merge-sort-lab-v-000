function findMinAndRemoveSorted(firstArr, secondArr) {
  if (secondArr == undefined) {
    firstArr.sort((a, b) => {
      a - b;
    })
    return firstArr.splice(0, 1);
  } else {
    let minFirstHalf = firstArr[0];
    let minSecondHalf = secondArr[0];
    if (minFirstHalf < minSecondHalf) {
      return firstArr.shift();
    } else {
      return secondArr.shift();
    }
  }
}

function merge(firstArr, secondArr) {
  let sorted = [];
  let currentMin;
  while (firstArr.length != 0 && secondArr.length != 0) {
    currentMin = findMinAndRemoveSorted(firstArr, secondArr)
    sorted.push(currentMin)
  }
  return sorted.concat(firstArr).concat(secondArr);
}

function mergeSort(array) {
  let midpoint = array.length / 2;
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint, array.length);
  let sorted;
  if (array.length < 2) {
    return array;
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
  return sorted;
}