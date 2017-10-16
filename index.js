function findMinAndRemoveSorted(array){
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
};

function merge(firstArray, secondArray){
	let sorted = [];
	let currentMin;

	while( firstArray.length != 0 && secondArray.length != 0 ){

		if ( firstArray[0] < secondArray[0] ){
			sorted.push(findMinAndRemoveSorted(firstArray))
		} else {
			sorted.push(findMinAndRemoveSorted(secondArray))
		}
	}
	return sorted.concat(firstArray).concat(secondArray);

};

function mergeSort(unSortedArray){
	let midPoint = unSortedArray.length/2;
	let firstHalf = unSortedArray.slice( 0, midPoint );
	let secondHalf = unSortedArray.slice( midPoint, unSortedArray.length );
	let sorted;

	if ( unSortedArray.length < 2 ){
		return unSortedArray;
	} else {
		sorted = merge( mergeSort(firstHalf), mergeSort(secondHalf) )
	}

	return sorted;
};