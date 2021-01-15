
/*  MON

Given an array of strings
return a object to represent how many times each 
array item is found (a frequency table)
Useful methods:
    Object.hasOwnProperty("keyName")
    - returns true or false if the object has the key or not
*/
function frequencyTable(arr){
    var obj = {}
    obj.hasOwnProperty("key_Name")
    for (var i=0; i < arr.length; i++) {}
}

console.log(frequencyTable(['A','A','B','C','C','C','D','D']))

  // EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
  // EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
  //* 



// Reverse Word Order
// Create a function that, given a string of words (with spaces), 
// returns new string with words in reverse sequence.
// .split()

function reverseWordOrder(string){

}

function reverseWordOrder(string){     
    var stringReverse = string.split(" ")
    var temp = ""
    for (var i = 0; i < arr.length/2; i++) {
        var temp = stringReverse[i]
        stringReverse[i] = stringReverse[stringReverse.length - i - 1]
        stringReverse[stringReverse.length - i - 1] = temp
    }     
    stringReverse.join(" ");      

console.log(reverseWordOrder("THIS IS A TEST"))

  // EX. "THIS IS A TEST" => "TEST A IS THIS"

  //-----------------------------------------------------------------------------------------------------//
// WED
/* 
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 


If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/
function encode(string){
    code = {}
    check = {}
    newStr = ""
    for(var i = 0; i<string.length; i++){
        if(code.hasOwnProperty(string[i]) == false){
            code[string[i]] = 1;
        } else {
            code[string[i]]++
        }
    }
    for(var x = 0; x<string.length; x++){
        if(check.hasOwnProperty(string[x]) == false){
            check[string[x]] = 1;
            newStr += string[x]
            newStr += code[string[x]]
        }
    }

    console.log(code)
    console.log(newStr)
}
encode("aaaaabbbbccc")

// encode = str => {
//     return str.split('').reduce((total, letter) => {
//         total[letter] ? total[letter]++ : total[letter] = 1;
//         return total;
//     }, {});
// };

// console.log(encode("aaaabbcddd"));

// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"

function decode(string){

}
// HINT. YOU'RE GOING TO USE parseInt() function OR isNaN()
// EX. "a3b2c1d3" => "aaabbcddd"

// THUR
/* 
String: Rotate String
Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the 
right by that given integer amount.
n will not be longer than the string length
*/

function rotateString(string, n){
//iterate through a string
//check the number and displace the string based on the number
    for (var i = 0; i < string.length; i++){
        
    }
//check the number and displace the string based on the number
    for (var i = 0; i < string.length; i++){
        
    }
}
// EX. "HELLO WORLD", 1 => "DHELLO WORL"
// EX. "HELLO WORLD", 2 => "LDHELLO WOR"

var strValue = "HELLO WORLD";
var temp;
for(var i = 0; i < strValue.length; i++){
    temp = "";
    for(var j = 1; j < strValue.length; j++){
        temp += strValue[j];
    }
    temp += strValue[0]
    strValue = temp;
    console.log(strValue)
}

// FRI

/*
    Given a string, return the first non-repeating character
    within string
    // EX. "stress" => "t"
    // EX. "moonmen" => "e"
*/
function firstNonRepeatingChar(string){
    dict = {}
    for (i=0; i < string.length; i++){
        if (dict.hasOwnProperty(string[i]) === true) {
            dict[string[i]]++
        }
        else {
            dict[string[i]] = 1
        }
    }
    for (let k in dict){
        if (dict[k] === 1){
            return k
        }
    }
}

console.log(firstNonRepeatingChar("stress"))
console.log(firstNonRepeatingChar("moonmen"))

1 == '1' //true

1 === '1'  //false


// Another way down here !
function firstNonRepeatingChar(string){
    for (var i = 0; i < string.length; i++) {
        if (!string.slice(0, i).includes(string[i]) && !string.slice(i+1).includes(string[i])) {
            return string[i]
        }
    }
}