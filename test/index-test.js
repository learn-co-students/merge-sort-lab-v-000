var chai = require('chai');
var sinon = require('sinon');
// change to give addresses of head,
// write function called get head.

describe('#findMinAndRemoveSorted', function() {
  it("should return the smallest element of an array", function() {
    let array = [2, 3, 4, 5, 6, 7]
    expect(findMinAndRemoveSorted(array)).toEqual(2)
  });

  it("should remove the smallest element from an array", function() {
    let array = [2, 3, 4, 5, 6, 7]
    findMinAndRemoveSorted(array)
    expect(array.includes(2)).toEqual(false)
  });
});

describe('#merge', function() {
  it("should merge two sorted arrays to produce one sorted array", function() {
    let firstSubarray = [3, 4, 6, 7]
    let secondSubArray = [1, 2, 5, 8]
    let sorted = merge(firstSubarray, secondSubArray)
    expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  });
});

describe('#mergeSort', function() {
  it("should sort an unsorted array", function() {
    let unsorted = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]
    expect(mergeSort(unsorted)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
  });
});
