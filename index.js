function findMinAndRemoveSorted(array){
  let min = array[0]
  let minIndex = 0
  for(let i = 0; i < array.length; i++){
    if(array[i] < min){
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function merge(firstHalf, secondHalf){
  let sorted = []
  while(firstHalf.length > 0 && secondHalf.length > 0){
    if(firstHalf[0] < secondHalf[0]){
      sorted.push(findMinAndRemoveSorted(firstHalf))
    }else {
      sorted.push(findMinAndRemoveSorted(secondHalf))
    }
  }
  return sorted.concat(firstHalf).concat(secondHalf)
}

function mergeSort(arr){
  let midpoint = arr.length/2
  let firstHalf = arr.slice(0, midpoint)
  let secondHalf = arr.slice(midpoint, arr.length)
 
  if(arr.length < 2){
    return arr
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}