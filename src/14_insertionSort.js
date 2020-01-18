/*--INSERTION SORT

  Write a function that sorts an array of integers 
  using the "Method Sort" methodology.

  http://en.wikipedia.org/wiki/Insertion_sort

  "Insertion sort iterates, consuming one input element each repetition, 
  and growing a sorted output list. Each iteration, insertion sort removes 
  one element from the input data, finds the location it belongs within 
  the sorted list, and inserts it there. It repeats until no input elements remain.
  Sorting is typically done in-place, by iterating up the array, 
  growing the sorted list behind it. At each array-position, it checks 
  the value there against the largest value in the sorted list 
  (which happens to be next to it, in the previous array-position checked). 
  If larger, it leaves the element in place and moves to the next. 
  If smaller, it finds the correct position within the sorted list, 
  shifts all the larger values up to make a space, and inserts into that correct position."
*/

var insertionSort;

insertionSort = function(arr) {
    for (var i = 1; i < arr.length; i++) 
  {
    if (arr[i] < arr[0]) 
    {
      //move current element to the first position
      arr.unshift(arr.splice(i,1)[0]);
    } 
    else if (arr[i] > arr[i-1]) 
    {
      //leave current element where it is
      continue;
    } 
    else {
      //find where element should go
      for (var j = 1; j < i; j++) {
        if (arr[i] > arr[j-1] && arr[i] < arr[j]) 
        {
          //move element
          arr.splice(j,0,arr.splice(i,1)[0]);
        }
      }
    }
  }
  return arr;
}

console.log(insertionSort([3, 0, 2, 5, -1, 4, 1]));



/*--Mocha Testing--*/


module.exports = insertionSort;
