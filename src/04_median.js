/*--MEDIAN

  Write a function that finds the median of a given array of integers.
  If the array has an odd number of integers, return the middle item 
  from the sorted array. If the array has an even number of integers, 
  return the average of the middle two items from the sorted array.

  For example: median([1, 3, 5]) returns 3
*/

var median;

median = function(arr) {
    if(arr.length==0){
        return arr;
    }
    if(arr.length%2!=0){
        arr.sort((a,b)=>a>b?1:-1);
        return(arr[Math.floor(arr.length/2)]); 
        }
    else{
        med=arr.length/2;
        arr.sort((a,b)=>a>b?1:-1);
        ele=Math.ceil((arr[med]+arr[med-1])/2);
        return ele;
        
    }
    }
    

  console.log(median([1, 3, 5,7,9]));


/*--Mocha Testing--*/


module.exports = median;
