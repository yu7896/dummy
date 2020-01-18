/*--DIGIT COMBINATIONS

  Write a function that takes a number with distinct digits 
  and returns a sorted array of all the numbers
  than can be formed with those digits.

  For example: digitCombos(123) returns [123, 132, 213, 231, 312, 321]
*/

var digitCombos;

digitCombos = function(num) {
  var num1=(""+num).split("");
    console.log(num1);
var combi = [];
var temp= "";
var letLen = Math.pow(2, num1.length);

for (var i = 0; i < letLen ; i++){
    temp= "";
    for (var j=0;j<num1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += num1[j]
        }
    }
    if (temp !== "") {
        combi.push(temp);
    }
}

return combi.join("\n");
};

/*--Mocha Testing--*/

console.log(digitCombos(123));
module.exports = digitCombos;
