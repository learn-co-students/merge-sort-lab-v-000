function findMinAndRemoveSorted(array){
  let smallest = array[0]
  for (var i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  let index = array.indexOf(smallest)
  return array.splice(index,1)
}


function findMinAndRemove(firstHalf, secondHalf){
  let minfirstHalf = firstHalf[0]
  let minsecondHalf = secondHalf[0]

  if(minfirstHalf < minsecondHalf){
    return firstHalf.shift()
  } else {
    return secondHalf.shift()
  }
}

function merge(firstHalf, secondHalf) {

  let sorted = []
  let currentMin;
  while(firstHalf.length != 0 && secondHalf.length != 0){
    let currentMin = findMinAndRemove(firstHalf, secondHalf)
    sorted.push(currentMin)
  }
  return sorted.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array){
    let newMin;
    let sorted = []
    while(array.length != 0){
      newMin = findMinAndRemoveSorted(array)
      sorted.push(newMin[0])
    }
    return sorted;
}
