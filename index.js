function findMinAndRemoveSorted(arr) {
  let min = arr[0];
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      idx = i;
    }
  }
  const num = arr.splice(idx, 1);
  return num;
}

function merge(firstArr, secondArr) {
  const solArr = [];
  while (firstArr.length !== 0 && secondArr.length !== 0) {
    let num = 0;
    if (firstArr[0] < secondArr[0]) {
      num = findMinAndRemoveSorted(firstArr);
      solArr.push(...num);
    } else {
      num = findMinAndRemoveSorted(secondArr);
      solArr.push(...num);
    }
  }
  return [...solArr, ...firstArr, ...secondArr];
}

function mergeSort(arr) {
  const solArr = [];
  while (arr.length > 1) {
    let num = findMinAndRemoveSorted(arr);
    solArr.push(...num);
  }
  return [...solArr, ...arr];
}
