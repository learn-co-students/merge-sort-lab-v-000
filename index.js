
function findMinAndRemoveSorted(a){
  return a.shift()
}

function merge(a1, a2){
  let sorted=[]
  while (a1.length > 0 && a2.length > 0){
    if (a1[0] <= a2[0]){
      sorted.push(a1.shift())
    }
    else{
      sorted.push(a2.shift())
    }
  }
  return sorted.concat(a1).concat(a2)
}

function mergeSort(a){
  let mid = a.length/2
  let a1 = a.slice(0,mid)
  let a2 = a.slice(mid)

  if (a.length < 2){
    return a
  }
  else {
    return merge(mergeSort(a1), mergeSort(a2))
  }
}
