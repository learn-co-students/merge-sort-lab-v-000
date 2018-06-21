function findMinAndRemoveSorted(array){
  return array.shift()
}

function merge(sortedArr1, sortedArr2){
  let sorted = []
  let currentMin;
  while(sortedArr1.length != 0 && sortedArr2.length != 0){
    let minSortedArr1 = sortedArr1[0]
    let minSortedArr2 = sortedArr2[0]

    if(minSortedArr1 < minSortedArr2){
      currentMin = sortedArr1.shift()
    } else {
      currentMin = sortedArr2.shift()
    }
    sorted.push(currentMin)
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
