function findMinAndRemoveSorted(array) {
    return array.shift();
}

function merge(firstSub, secondSub) {
    let sorted = [];
    while(firstSub.length !== 0 && secondSub.length !== 0) {
        if(firstSub[0] < secondSub[0]) {
            sorted.push(findMinAndRemoveSorted(firstSub));
        } else {
            sorted.push(findMinAndRemoveSorted(secondSub));
        }
    }
    return sorted.concat(firstSub).concat(secondSub);
}

function mergeSort(array) {
    let midpoint = array.length/2;
    let firstHalf = array.slice(0, midpoint);
    let secondHalf = array.slice(midpoint, array.length);
    let sorted;

    if(array.length < 2) {
        return array;
    } else {
        sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
    return sorted;
}