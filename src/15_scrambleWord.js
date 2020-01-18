/*--SCRAMBLE WORD

  Write a function that takes two inputs: a word and an array of
  other words. Your program must return all of the words from the array
  that our input word can unscramble to.

  For example: scrambleWord("cat", ["tac", "toc"])) returns ["tac"]
*/

var scrambleWord;

scrambleWord = function(str, arr) {
    var a=[];
   var str1=str.split('');
    for(var i=0;i<str1.length;i++){
        for(var j=0;j<arr.length;j++){
            if(str1[i]==(arr[j].split(''))){
                console.log(arr[j]);
                a.push(arr[j]);
                console.log(a);
            }
        }
    }
    
  return a;
};

/*--Mocha Testing--*/
console.log(scrambleWord('cat',['tac','toc']));

module.exports = scrambleWord;
