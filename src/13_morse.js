/*--MORSE

  Build a function that takes in a string (no numbers or punctuation) 
  and outputs the morse code for it.

  http://en.wikipedia.org/wiki/Morse_code

  Put two spaces between words and one space between letters.

  For example: morse("q") returns "--.-"
*/

var morse;

morse = function(str) {
    
    var letters = [ ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
            var morseLetters = [ "\xa0\xa0\xa0\xa0", ". ___", "___ . . .", "___ . ___ .", "___ . .", ".", ". . ___ .", "___ ___ .", ". . . .", ". .", ". ___ ___ ___", "___ . ___", ". ___ . .",  "___ ___", "___ .", "___ ___ ___", ". ___ ___ .", "___ ___ . ___", ". ___ .", ". . .", "_", ". . ___", ". . . ___", ". ___ ___", "___ . . ___", "___ . ___ ___", "___ ___ . .", ". ___ ___ ___ ___", ". . ___ ___ ___", ". . . ___ ___", ". . . . ___", ". . . . .", "___ . . . .", "___ ___ . . .", "___ ___ ___ . .", "___ ___ ___ ___ .", "___ ___ ___ ___ ___" ];
            

            var newText = "";
            for (var i = 0; i < str.length; i++) {
                for (var j = 0; j < 37; j++) {
                    if (str[i].toLowerCase() == letters[j]) {
                        newText += morseLetters[j];
                        newText += "\xa0\xa0\xa0";
                        break;
                    }    
                }
            }

  return newText;
};

/*--Mocha Testing--*/
console.log(morse("q"));


module.exports = morse;
