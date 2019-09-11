function findMinAndRemoveSorted(array) {
    let min = array[0]; 
    array.splice(0, 1); 
    return min;  
}

function findMinAndRemove(array){
    let min = array[0]
    let minIndex = 0
    for(let i = 0; i < array.length; i++){
      let currentElement = array[i]
      if(array[i] < min){
        min = array[i]
        minIndex = i
      }
    }
    array.splice(minIndex, 1);
    return min;
}

function findMinsAndRemove(firstHalf, secondHalf){
    let minfirstHalf = firstHalf[0]
    let minsecondHalf = secondHalf[0]
   
    if(minfirstHalf < minsecondHalf){
      return firstHalf.shift()
    } else {
      return secondHalf.shift()
    }
  }


function merge(arrayOne, arrayTwo) {
        let sorted = []
        let currentMin;
        while(arrayOne.length != 0 && arrayTwo.length != 0){
          let currentMin = findMinsAndRemove(arrayOne, arrayTwo)
          sorted.push(currentMin)
        }
        return sorted.concat(arrayOne).concat(arrayTwo)
}

function mergeSort(array){
    let newMin;
    let sorted = []
    while(array.length != 0){
      newMin = findMinAndRemove(array)
      sorted.push(newMin)
    }
    return sorted;
}