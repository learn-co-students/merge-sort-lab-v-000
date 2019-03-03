function findMinAndRemoveSorted(arr){
    return arr.shift()
}

function merge(a1, a2){
    const mergedArr = []
    while(a1.length > 0 && a2.length > 0){
        let minValue = a1[0] > a2[0] ? findMinAndRemoveSorted(a2) : findMinAndRemoveSorted(a1)
        mergedArr.push(minValue) 
    }
    return mergedArr.concat(a1).concat(a2)
}

function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }else{
        const midpoint = arr.length / 2
        return merge(mergeSort(arr.slice(0, midpoint)), mergeSort(arr.slice(midpoint, arr.length)))
    }
}
