function findMinAndRemoveSorted(array){ 
  var minElement = array[0]
  array.splice(0, 1)
  return minElement
}

function merge(firstArray, secondArray){

  var sortedArray = []

  while (firstArray.concat(secondArray).length > 1){

    if (firstArray[0] !== undefined && secondArray[0] !== undefined){
      if (firstArray[0] < secondArray[0]){
        sortedArray.push(findMinAndRemoveSorted(firstArray))
      }else{
        sortedArray.push(findMinAndRemoveSorted(secondArray))
      }
    }else if(firstArray[0] === undefined){
      sortedArray.push(findMinAndRemoveSorted(secondArray))
    }else{
      sortedArray.push(findMinAndRemoveSorted(firstArray))
    }
  }
  
  return sortedArray.concat(firstArray).concat(secondArray);
}

function mergeSort(array){
  var midpoint = Math.floor(array.length / 2)
  var firstArray = array.slice(0, midpoint)
  var secondArray = array.slice(midpoint, array.length)
  if(array.length < 2){
    return array
  }else{
   return merge(mergeSort(firstArray), mergeSort(secondArray))
  }
}