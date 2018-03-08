
function findMinAndRemoveSorted(array){
    let min = array[0];
    let minIndex = 0;

    for(let i = 0; i < array.length; i ++){
    	if(array[i] < min){
            min = array[i];
            minIndex = i;
    	}
    }
    array.splice(minIndex, 1);
    return min;
}

// [3, 4, 6, 7] [1, 2, 5, 8]
// the cost of merge is a1 + a2
function merge(a1, a2){
    let sorted = [];
    while(a1.length > 0 && a2.length > 0){
    	let min;
    	if (a1[0] < a2[0]){
           min = a1.shift()
           sorted.push(min)
        }else {
           min = a2.shift()
           sorted.push(min)
        }
    }
    return sorted.concat(a1).concat(a2);
}

// [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]

// [12, 10, 9, 14, 1, 3, 5, 11 ] 

// [12, 10, 9, 14] [1, 3, 5, 11] 

// [12, 10] [9, 14] [1, 3] [5, 11] 

// [12] [10] [9] [14] [1] [3] [5] [11] 
// the cost of sort is
function mergeSort(array){
    let middlePoint = array.length/ 2 ;
    let leftHalf = array.slice(0, middlePoint);
    let rightHalf = array.slice(middlePoint, array.length );
    let sorted = []
    if(array.length < 2 ){
    	return array;
    }else{
    	sorted = merge(mergeSort(leftHalf), mergeSort(rightHalf));
    }
    return sorted;
}


