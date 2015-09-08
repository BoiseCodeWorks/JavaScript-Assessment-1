//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;
// ANSWER
function doMath() {
    var num10 = 10;
    var string8 = '8';
    var one = 1;
    console.log(num10 + parseInt(string8) + one);
}
doMath();

//ANSWER
//2. write a loop that will log only numbers divisible by 3 between 20 - 100

//ANSWER
function loopLogger() {
    for (var i = 20; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }

    }
}
loopLogger();

//ANSWER

//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];
