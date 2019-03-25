

// let array = [2, 3, 4, 5, 6, 7]

 function findMinAndRemoveSorted(array) {
   return array.shift()
 }

 function merge(firstHalf, secondHalf) {
   let sorted = []
   let currentMin;
   while (firstHalf.length != 0 && secondHalf.length != 0) {
     if (firstHalf[0] < secondHalf[0]) {
       sorted.push(findMinAndRemoveSorted(firstHalf))
     } else {
       sorted.push(findMinAndRemoveSorted(secondHalf))
     }
     }
   return sorted.concat(firstHalf).concat(secondHalf)
 }
