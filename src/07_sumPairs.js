/*--SUM PAIRS

  Write a method that takes two parameters (array & target value)
  and returns an array of the pairs that sum the target value.

  For example: sumPairs([1, 2, 3, 4, 5], 7) returns [[2, 3], [4, 5]]
*/

var sumPairs;

sumPairs = function(arr, target) {
   const sum = [];
  for(let i = 0; i< arr.length; i++) {
    for(let j = i+1;  j < arr.length; j++) {
      if(target == arr[i] + arr[j]) {sum.push([arr[i],arr[j]])
    }
  }
  }
 return sum
}
    /*--Mocha Testing--*/
console.log(sumPairs([6, -6, 8, -8, 9, -10, 0, 0, 1], 0));

module.exports = sumPairs;
