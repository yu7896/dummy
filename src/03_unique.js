/*--UNIQUE

  Write a function that takes an array and returns 
  a new sorted array containing all of the unique elements
  of the original array.

  For example: unique([1, 2, 2, 3]) returns [1, 2, 3];
*/

var unique;

var unique_items=[]
unique = function(arr) {
var a=arr.sort((c,d)=>c>d?1:-1)
console.log(a)
unique_items= new Set(a);

return Array.from(unique_items);

};
console.log(unique([0, 1, 12, 1, 2, 2, 3, 5, 6, 6, 10]))
/*--Mocha Testing--*/


module.exports = unique;
