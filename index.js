
function findMinAndRemoveSorted(array){
  let min = array[0]
  let minIndex = 0

  for (let i=0; i<array.length;i++){
    if (array[i]<min){
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex,1)
  return min
}

function merge(first,second){
  let sorted = []
  while (first.length != 0 && second.length !=0){
    let array = [first[0],second[0]]
    if (findMinAndRemoveSorted(array) === first[0]){
      sorted.push(first.shift())
    } else {
      sorted.push(second.shift())
    }
  }// end while
  sorted.push(...first,...second)

  return sorted
}

function mergeSort(array){
  if (array.length<2){
    return array
  }
  let middle = Math.floor(array.length/2)
  let left = array.slice(0,middle)
  let right = array.slice(middle)

  return merge(mergeSort(left),mergeSort(right))
}
