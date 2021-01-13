
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
