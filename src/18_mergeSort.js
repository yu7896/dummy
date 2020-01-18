/*--MERGE SORT

  Write a function that sorts an array of integers 
  using the "Merge Sort" methodology.

  http://en.wikipedia.org/wiki/Merge_sort

  "Merge sort takes advantage of the ease of merging already sorted lists 
  into a new sorted list. It starts by comparing every two elements 
  (i.e., 1 with 2, then 3 with 4...) and swapping them if the first 
  should come after the second. It then merges each of the resulting 
  lists of two into lists of four, then merges those lists of four, 
  and so on; until at last two lists are merged into the final sorted list. 
  Of the algorithms described here, this is the first that scales well to 
  very large lists, because its worst-case running time is O(n log n). 
  It is also easily applied to lists, not only arrays, as it only requires 
  sequential access, not random access. However, it has additional 
  O(n) space complexity, and involves a large number of copies in simple implementations."
*/

var mergeSort;

mergeSort = function(arr) {
    if (arr.length <= 1) {
    return arr;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(arr.length / 2);

  // This is where we will be dividing the array into left and right
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}
console.log(mergeSort([1,10,0,30,20,15]));

/*--Mocha Testing--*/


module.exports = mergeSort;
