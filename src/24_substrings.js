/*--SUBSTRINGS

  Write a function that will take a string 
  and return an array containing each of its substrings. 

  For example: substrings("of") returns ["o", "of", "f"]
*/

var substrings;

substrings = function(str) {
    for(let i=1;i<str.length+1;i++){
        for(j=str.length-1; j<i + 1;j++){
            var k = j + i - 1;
  
            for(let l=j;l<k + 1;l++){ 
                console.log(str[k],end="");
            }
        }
    }
    return 0;        
};

/*--Mocha Testing--*/

console.log(substrings("of"));
module.exports = substrings;
