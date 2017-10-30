function findMinAndRemoveSorted(array) {
    let smallest = array[0]

    array.shift()

    return smallest
}

function merge(firstArray, secondArray) {
    console.log(`FirstArray: ${firstArray}, SecondArray: ${secondArray} Typeof FA: ${typeof firstArray}, Typeof SA: ${typeof secondArray}`)
    let sorted = []

    while (firstArray.length != 0 && secondArray.length != 0) {
        if (firstArray[0] < secondArray[0]) {
            sorted.push(firstArray[0])
            firstArray.shift()
        } else {
            sorted.push(secondArray[0])
            secondArray.shift()
        }
    }

    return sorted.concat(firstArray).concat(secondArray)
}

function mergeSort(array) {
    if (array.length > 1) {
        let mid = array.length / 2
        let firstArray = array.slice(0, mid)
        let secondArray = array.slice(mid, array.length)

        // console.log(`Array: ${array} FirstArray: ${firstArray} SecondArray: ${secondArray} Array length: ${array.length}`)
        return merge(mergeSort(firstArray), mergeSort(secondArray))
    }

    return array
}

// let d = findMinAndRemoveSorted([2, 3, 4, 5, 6, 7])
// let dn = d === 2
// console.log(d)
// console.log("Should be 2")
// console.log(dn)

// console.log("-------")

// let m = merge([3, 4, 6, 7], [1, 2, 5, 8])
// let mn = m === [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(m)
// console.log("Should be [1, 2, 3, 4, 5, 6, 7, 8]")
// console.log(mn)

// console.log("-------")

// let r = mergeSort([12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7])
// let rn = r === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
// console.log(r)
// console.log("Should be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]")
// console.log(rn)