 //1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
 // careful not to uppercase the i in the word pair
var sentence = 'When i went to the mall i bought a pair of shoes.'; //".*\Si.*" // THIS SHOULD WORK I DONT GET IT.

var re = /\si\s/g;
var str = 'When i went to the mall i bought a pair of shoes.';
var newstr = str.replace(re, ' I ');
console.log(newstr);


//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';

function myFunction() {
    var s = "JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.";
    var numUpper = s.length - s.replace(/[A]/g, '').length;
    var numLower = s.length - s.replace(/[a]/g, '').length;
    console.log("Total number of UPPERCASE letters:" + numUpper);
    console.log("Total number of LOWERCASE letters:" + numLower);

}
myFunction();


//3. Given the following sentence: Uppercase the word scream each time it appears in the sentence

var text = 'I scream, you scream, we all scream for icecream';

var regEx = /scream/g;
var text = 'I scream, you scream, we all scream for icecream';
var newstr = text.replace(regEx, 'SCREAM');
console.log(newstr);