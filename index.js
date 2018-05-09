//Implement a function that first finds and removes the smallest element in a sorted array.
function findMinAndRemoveSorted(array) {
  return array.shift();
}

//Implement the merge function to combine two sorted arrays into one larger array.
function merge(arr1, arr2) {
  let finalArr = [];

  while (arr1.length !== 0 && arr2.length !== 0) {
    if (arr1[0] < arr2[0]) {
      finalArr.push(arr1[0]);
      arr1.shift();
    } else {
      finalArr.push(arr2[0]);
      arr2.shift();
    }
  }
  return finalArr.concat(arr1).concat(arr2)
}

//Implement the mergeSort algorithm using the previous functions that you wrote.
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side

  return merge(mergeSort(left), mergeSort(right))
}

