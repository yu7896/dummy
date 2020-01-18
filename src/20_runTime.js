/*--RUNTIME

  You are given some code in the form of a function. 
  Measure and return the time taken to execute that code.

  For example: runTime(someFunction) returns 17
*/

var runTime;
var t1=new Date();
runTime = function(func) {
    
  return t2;
};
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
    };
var t2=new Date()-t1;

/*--Mocha Testing--*/

runTime(nearestLarger([4,7, 8, 5, 9],2));

console.log(t2);
module.exports = runTime;
