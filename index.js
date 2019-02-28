function findMinAndRemoveSorted(arr) {
    let min = arr[0];
    arr.shift();
    return min;
}

function merge(a, b) {
    let sorted = [];
    while(a.length !== 0 && b.length !== 0) {
        if (a[0] < b[0]) {
            sorted.push(findMinAndRemoveSorted(a))
        } else {
            sorted.push(findMinAndRemoveSorted(b))
        }
    }
    return sorted.concat(a).concat(b)
}

function mergeSort(array) {
    let midpoint = array.length / 2;
    let firstHalf = array.slice(0, midpoint);
    let secondHalf = array.slice(midpoint, array.length)

    if (array.length < 2) {
        return array 
    } else {    
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }    
}