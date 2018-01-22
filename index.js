function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(left, right) {
  let res = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      res.push(findMinAndRemoveSorted(left));
    } else {
      res.push(findMinAndRemoveSorted(right));
    }
  }
  return res.concat(left.concat(right));
}

function mergeSort(myNumbers) {
  const midpoint = Math.floor(myNumbers.length / 2);
  const firstHalf = myNumbers.slice(0, midpoint);
  const secondHalf = myNumbers.slice(midpoint, myNumbers.length);
  //basecase
  if (myNumbers.length === 1) {
    return myNumbers;
  } else {
    const solution = merge(mergeSort(firstHalf), mergeSort(secondHalf));
    return solution;
  }
}
