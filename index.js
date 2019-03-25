
 function findMinAndRemoveSorted(firstHalf, secondHalf) {
   let minfirstHalf = firstHalf[0]
   let minsecondHalf = secondHalf[0]
   if (minfirstHalf < minsecondHalf) {
     return firstHalf
   } else {
     return secondHalf
   }
 }
