function findMinAndRemoveSorted(array){
    let min = array[0];
    let minIndex = 0;
    array.forEach((item, index) => {
        if (item < min){
            min = item;
            minIndex = index;
        }
    });
    array.splice(minIndex, 1);
    return min;
}

function merge(firstArr, secondArr){
    let sorted = [];
    while(firstArr.length !== 0 && secondArr.length !== 0){
        if (firstArr[0] < secondArr[0]){
            sorted.push(firstArr[0]);
            firstArr.shift();
        } else {
            sorted.push(secondArr[0]);
            secondArr.shift();
        }
    }
    return sorted.concat(firstArr).concat(secondArr);
}

function mergeSort(arr){
    let arrSorted = [];

    while (arr.length !== 0) {
        arrSorted.push(findMinAndRemoveSorted(arr));
    }

    return arrSorted;
}