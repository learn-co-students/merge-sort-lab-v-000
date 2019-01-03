function findMinAndRemoveSorted(array){
  return array.shift()
}

function merge(first, second){
  let sorted = []
  while (first.length != 0 && second.length != 0){
    if(first[0] < second[0]){
      sorted.push(findMinAndRemoveSorted(first))
    }else {
      sorted.push(findMinAndRemoveSorted(second))
    }
  }
  return sorted.concat(first).concat(second)
}

function mergeSort(array){
  let mid = array.length/2
  let first = array.slice(0, mid)
  let second = array.slice(mid, array.length)
  let sorted

  if(array.length < 2){
    return array
  }else{
    sorted = merge(mergeSort(first), mergeSort(second))
  }
  return sorted
}
