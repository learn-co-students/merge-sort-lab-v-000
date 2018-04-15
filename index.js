function findMinAndRemoveSorted(array) { //removes and returns smallest element in sorted array
  let min = array[0]
  let minIndex = 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1) //this is destructive
  return min
}

function findMinTwoArrays(arrayOne, arrayTwo) {
  let firstHalfMin = arrayOne[0]
  let secondHalfMin = arrayTwo[0]
  if(firstHalfMin < secondHalfMin) {
    return arrayOne.shift()
  }else{
    return arrayTwo.shift()
  }
}

function merge(arrayOne, arrayTwo) { //merge two sorted arrays
  let sorted = []
  let currentMin
  while(arrayOne.length != 0 && arrayTwo.length != 0) {
    currentMin = findMinTwoArrays(arrayOne, arrayTwo)
    sorted.push(currentMin)
  }
  return sorted.concat(arrayOne).concat(arrayTwo)
}

function mergeSort(array) { //sorts and unsorted array
  while(!!array){
    let mid = array.length/2
    let firstHalf = array.slice(0, mid)
    let secondHalf = array.slice(mid, array.length)
    if(array.length < 2){
      return array
    }else{
      return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
  }
}
