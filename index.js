const findMinAndRemoveSorted = (array) => array.shift()

const merge = (a, b) => {
    let sorted = [];
    while (a.length > 0 && b.length > 0) {
        if (a[0] > b[0]) {
            sorted.push(findMinAndRemoveSorted(b))
        } else {
            sorted.push(findMinAndRemoveSorted(a))
        }
    }
    return sorted.concat(a).concat(b);
}

const mergeSort = (array) => {
    let midPoint = array.length / 2
    let half1 = array.slice(0, midPoint)
    let half2 = array.slice(midPoint)
    if (array.length < 2) {
        return array
    } else {
        return merge(mergeSort(half1), mergeSort(half2))
    }
}
