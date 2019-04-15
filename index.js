function findMinAndRemoveSorted(array){
  let min = array[0]
  let index
  for(let i=1; i< array.length; i++){
    if(min>array[i]){
      min = array[i]
      index = i
    }
  }
  array.splice(index,1)
  return min
}


function merge(array1, array2){
  let newArray = []
  let min
  for(let i=0; array1.length != 0 && array2.length != 0; i++){
    if(array1[0] > array2[0]){
      min = array2.shift()
      newArray.push(min)
    }else{
      min = array1.shift()
      newArray.push(min)
    }
  }

  return newArray.concat(array1).concat(array2)

}

function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)

    if(array.length <= 1){
      return array
    } else {
      return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
  }





  let unsorted = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]
