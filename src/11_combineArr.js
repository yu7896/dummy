/*--COMBINE ARRAYS

  Write a function that combines two unsorted arrays into a
  sorted array without any duplicates. Use the comparative
  operators for sorting instead of any sorting functions.

  For example: combineArr([2, 4], [1, 3]) returns [1, 2, 3, 4]
*/

var combineArr;
var arr3=[];

combineArr = function(arr1, arr2) {
    
    arr3=arr1.concat(arr2);
    arr3.sort((a,b)=>a>b?1:-1);
    arr4=new Set(arr3);
    arr5=Array.from(arr4);
    
    
  return arr5;
};

/*--Mocha Testing--*/
console.log(combineArr([2,4],[1,3]));

module.exports = combineArr;
