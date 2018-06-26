
function findMinAndRemoveSorted(arr) {
  let min = arr[0];
  arr.splice(0,1);
  return min;
}

function merge(arr1, arr2) {
  let merged_arr = [];
  while (arr1.length != 0 && arr2.length != 0) {
    if (arr1[0] <= arr2[0]) {
      merged_arr.push(arr1[0]);
      arr1.splice(0,1);
    } else {
      merged_arr.push(arr2[0]);
      arr2.splice(0,1);
    }
  }
  if (arr1.length != 0) {
    merged_arr = merged_arr.concat(arr1);
  } else if (arr2.length != 0) {
    merged_arr = merged_arr.concat(arr2);
  }
  return merged_arr;
}

function mergeSort(array){
   let midpoint = Math.floor(array.length/2);
   let firstHalf = array.slice(0, midpoint);
   let secondHalf = array.slice(midpoint, array.length);
   //console.log(firstHalf,secondHalf);
   if(array.length < 2){
     return array;
   } else {
     //console.log(firstHalf,secondHalf);
     return merge(mergeSort(firstHalf), mergeSort(secondHalf));
   }
 }

//console.log(mergeSort([12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]));
