
function findMinAndRemoveSorted(array){
  return array.shift()
}
 

function merge(a,b){
  let merged = []
  while(a.length != 0 && b.length != 0){
    if ( a[0] < b[0] ) {
      merged.push(findMinAndRemoveSorted(a))
    } else {
      merged.push(findMinAndRemoveSorted(b))
    }
  }
  return merged.concat(a).concat(b)
}

function mergeSort(array){
  let mid = array.length/2
  let a = array.slice(0, mid)
  let b = array.slice(mid, array.length)
  return array.length < 2 ? array : merge(mergeSort(a), mergeSort(b));
}