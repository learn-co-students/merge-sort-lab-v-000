let findMinAndRemoveSorted = (array) => {
	return array.shift()
}

let merge = (firstHalf, secondHalf) => {
	let sorted = []
	let currentMin
	while (firstHalf.length != 0 && secondHalf.length != 0) {
		let minFirstHalf = firstHalf[0]
		let minSecondHalf = secondHalf[0]

		if (minFirstHalf < minSecondHalf) {
			currentMin = firstHalf.shift()
		} else {
			currentMin = secondHalf.shift()
		}
		sorted.push(currentMin)
	}
	return sorted.concat(firstHalf).concat(secondHalf)
}

let mergeSort = (array) => {
	let midpoint = array.length / 2
	let firstHalf = array.slice(0, midpoint)
	let secondHalf = array.slice(midpoint)

	if (array.length < 2) {
		return array
	} else {
		return merge(mergeSort(firstHalf), mergeSort(secondHalf))
	}
}