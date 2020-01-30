const findMinAndRemoveSorted = array => {
  return array.sort().shift();
};

const merge = (arr1, arr2) => {
  return arr1.concat(arr2).sort();
};

const mergeSort = array => {
  return array.sort((a, b) => a - b);
}