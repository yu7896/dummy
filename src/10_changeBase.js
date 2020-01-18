/*--CHANGE BASE

  Write a method that converts a number from one base to a different base.
  It should work for bases up to 16 (hexadecimal).

  For example: convert 4 from base 10 to base 2, changeBase(4, 10, 2) returns 100

  http://en.wikipedia.org/wiki/Numeral_system
*/

var changeBase;

changeBase = function(num, from, to) {
    
    var output = "";
    if (num !== undefined) {
        if (to >= 2 && to <= 36) {
            output = parseInt(num, from).toString(to);
        }
    }
    return output;
};
console.log(changeBase(2, 2, 16));

/*--Mocha Testing--*/


module.exports = changeBase;
