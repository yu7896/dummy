/*--NEAREST LARGER

  Write a function that takes an array and an index.
  The function should return the index of the nearest
  larger integer. In case of a tie, choose the left larger integer
  and return null if no larger numbers are found.

  For example: nearestLarger([1, 4, 3, 2], 2) returns 1
*/

var nearestLarger;

nearestLarger = function(arr, idx) {
        if(arr[idx-1]>arr[idx]){
            return idx-1;
        }
    else{
        if(arr[idx+1]>arr[idx]){
            return idx+1;
        }
    else{
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[idx]){
                return i;
            }
        }
    }
        
        }
    return null;
    }
console.log(nearestLarger([4, 7, 8, 5, 9],2));

/*--Mocha Testing--*/


module.exports = nearestLarger;
