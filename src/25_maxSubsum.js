/*--MAX SUBSUM

  Write a function that takes an array of integers
  and finds the contiguous subarray within the array with the largest sum.

  http://en.wikipedia.org/wiki/Maximum_subarray_problem 

  For example: maxSubsum([−2, 1, −3, 4, −1, 2, 1, −5, 4]) returns [4, −1, 2, 1]
*/

var maxSubsum;

maxSubsum = function(arr) {
    best_sum = 0; 
    current_sum = 0;
    for(let x=0;x<arr.length;x++){
        current_sum = Math.max(0, current_sum + x);
        best_sum = Math.max(best_sum, current_sum);
   
    }
   return best_sum;
};
console.log(maxSubsum([-2,1,-3,4,-1,2,1,-5,4]));


/*--Mocha Testing--*/


module.exports = maxSubsum;
