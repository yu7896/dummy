/*--TRANSPOSE

  To represent a matrix, or two-dimensional grid of numbers, we can write an array containing arrays which represent rows:

    var rows = [[0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]]

  Write a method that will convert between the row-oriented and column-oriented representations.

  For example: transpose(rows) ===  [[0, 3, 6],
                                     [1, 4, 7],
                                     [2, 5, 8]]
*/

var transpose;

transpose = function(array) {
    
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        newArray.push([]);
    };

    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array.length; j++){
            newArray[j].push(array[i][j]);
        };
    };

    return newArray;
};
console.log(transpose([[0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]]))

/*--Mocha Testing--*/


module.exports = transpose;
