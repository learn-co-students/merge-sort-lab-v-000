

// function findMinAndRemoveSorted(firstHalf, secondHalf){
//   let minfirstHalf = firstHalf[0]
//   let minsecondHalf = secondHalf[0]
//
//   if(minfirstHalf < minsecondHalf){
//     return firstHalf.shift()
//   } else {
//     return secondHalf.shift()
//   }
// }


// Note: the lesson assumes that the arrays are already ordered, so this is their solution:
// function findMinAndRemoveSorted(array){
//   return array.shift()
// }


function findMinAndRemoveSorted(array){
  let min = array[0]
  let index = 0
  for (let i=0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      index = i
    }
  }
  array.splice(index, 1)
  return min
}

function merge(firstHalf, secondHalf){
  let sorted = []
  let currentMin
  while (firstHalf.length != 0 && secondHalf.length != 0) {
      // this only works b/c the problem assumes the arrays are already in order
    if (firstHalf[0] < secondHalf[0]) {
      sorted.push(findMinAndRemoveSorted(firstHalf))
    } else {
      sorted.push(findMinAndRemoveSorted(secondHalf))
    }
  }
  return sorted.concat(firstHalf).concat(secondHalf)
}


function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)

    if (array.length < 2) {
      return array
    } else {
      return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
  }
