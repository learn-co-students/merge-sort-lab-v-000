function findMinAndRemoveSorted(array){
  return array.shift()
}

function merge(sortedArr1, sortedArr2){
  let sorted = []
  while(sortedArr1.length != 0 && sortedArr2.length != 0){
    if(sortedArr1[0] < sortedArr2[0]){
      sorted.push(findMinAndRemoveSorted(sortedArr1))
    } else {
      sorted.push(findMinAndRemoveSorted(sortedArr2))
    }
  }
  return sorted.concat(sortedArr1).concat(sortedArr2)
}

function mergeSort(array){
  let midpoint = array.length/2;
  let firstHalf = array.slice(0,midpoint)
  let secondHalf = array.slice(midpoint)

  if(array.length < 2){
    return array
  }else{
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
