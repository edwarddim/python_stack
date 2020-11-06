

// MON
/* 
Given an array of strings
return a sum to represent how many times each array item is found (a frequency table)
Useful methods:
    Object.hasOwnProperty("keyName")
    - returns true or false if the object has the key or not
    Python: dict.has_key(key)
*/
function frequencyTable(arr){
    var output = {};
    for(var i = 0; i < arr.length; i++){
        if(output.hasOwnProperty(arr[i])) {
            output[arr[i]]++
        } else {
            output[arr[i]] = 1
        }
    }
    return output
}

console.log(frequencyTable(['A', 'A', 'B', 'C']))
// EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
// EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
/* 
Reverse Word Order
Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
*/
function reverseWordOrder(string){
    var result = "";
    var arr = string.split(" ");
    for(var i = arr.length -1; i >= 1; i--) {
        result += arr[i] + " ";
    }
   result += arr[0]
    return result;
}

console.log(reverseWordOrder("THIS IS A TEST"));
// EX. "THIS IS A TEST" => "TEST A IS THIS"
// EX. "GOOD MORNING VIETNAM" => "VIETNAM MORNING GOOD"

//-----------------------------------------------------------------------------------------------------//
// TUE
/* 
String: Dedupe
Remove duplicate characters 
    - (case-sensitive)
Bonus: Keep only the last instance of each character.
*/
function dedupeString(string){
    for (let i = 0; i < string.length; i++) {
        if (string.substring(0, i).includes(string[i])) {
            string = string.substr(i, 1)
        } 
    }
    return string
}
    
    // var temp = []
    // for (let i = 0; i < string.length; i++) {
    //     if(temp.indexOf(string[i]) < 0){
    //         temp.push(string[i])
    //     }
    //     
    // }
    // return temp.join('')
// }

// EX. "aabacecbedd" => "abced"
// EX. "bbbbaaaaffff" => "baf"
/* 
Given a string containing space separated words
Reverse each word in the string.
If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){
    var arr = string.split(" ")
    for (var i = 0; i < arr.length; i++){
        var temp = "";
        for (var j = arr[i].length-1; j >= 0; j--){
            temp += arr[i][j]; 
        }
        arr[i] = temp;
    }
    return arr.join(" ");
}

// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"
// EX. "THIS IS A TEST" => "SIHT SI A TSET"


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
    var newString = {}
    var finalResult = ""
        for (var i = 0; i <string.length; i++){
          if (newString.hasOwnProperty(string[i])){
             newString[string[i]]++
          } 
          else {newString[string[i]] = 1}
        }
        for (key in newString){
            finalResult += key + newString[key]
        }
        if (finalResult.length >= string.length){
            return string
        } else {
            return finalResult
        }
    }
    console.log(encode("aaaabbcddd"))
// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"

function decode(string){
    var result = ""
    // if (isNaN(parseInt(string))) == true;{
    for (var i = 0; i < string.length; i++){
        if ( i % 2 == 0){
          result += string[i-1] * parseInt(string[i])
        }
    }
    return result 
}

function decode2(string) {
    var result = ''
    if (string.length > 2 && isNaN(parseInt(string[1]))) {
        return string
    }
    for (var i = 0; i < string.length; i++) {
      if (!isNaN(parseInt(string[i+1]))) {
        for (var j = 0; j < parseInt(string[i+1]); j++) {
          result += string[i]
        }
      }
    }
    return result
  }


// HINT. YOU'RE GOING TO USE parseInt() function OR isNaN()
// EX. "a3b2c1d3" => "aaabbcddd"

// if (isNaN(parseInt(string))) {

// }

//-----------------------------------------------------------------------------------------------------//
// THUR
/* 
String: Rotate String
Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the 
right by that given integer amount.
*/

function rotateString(string, n){
    strArr = string.split('')
    for(var i = 1; i <= n; i++){
        strArr.unshift(strArr.pop());  
    }
    return strArr.join('')
}

// EX. "HELLO WORLD", 1 => "DHELLO WORL"
// EX. "HELLO WORLD", 2 => "LDHELLO WOR"
// EX. "HELLO WORLD", 11 => "HELLO WORLD"

/*
Given a Roman Numeral return the integer value of the Roman Numeral
EX. "III" => 3
EX. "IV" => 4
EX. "MMIV" => 2004
HINT: YOU NEED AN OBJECT THAT TRANSLATES ROMAN NUMERALS TO NUMBERS
*/
function romanToInt(string){
    var romanDict = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    var sum = romanDict[string[string.length-1]];
    for(var i = string.length-1; i > 0; i--){
        if(romanDict[string[i]] > romanDict[string[i-1]]){
            sum -= romanDict[string[i-1]];
        }
        else{
            sum += romanDict[string[i-1]];
        }
    }
    return sum;
}

function romanToInt(string){
    var romanDict = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
var outcome = 0 
var input = string.split('')

for (var i = 0; i < string.length; i ++){
    var current = romanDict[input[i]];
    var next =  romanDict[input[i+1]];
    if (current === undefined){
        return null
    }
    else {
        if(current < next){
            outcome = outcome + (current + next)
        }
        else {
            outcome += current
        }
    }
}
return outcome
}


// FRI

/*
    Given a string, return the first non-repeating character
    within string
    // EX. "stress" => "t"
    // EX. "moonmen" => "e"
*/

function firstNonRepeatingChar(string){
    for (var i = 0; i < string.length; i++) {
        if (!string.slice(0, i).includes(string[i]) && !string.slice(i+1).includes(string[i])) {
            return string[i]
        }
    }
}

/* 
  String: ionIs Rotat (Is Rotation)
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
  HINT: YOU CAN USE .INCLUDES()
  "ABC", "CAB" => true
  "ABCD", "BACD" => false
  "ABCD", "ABCD" => false
*/
function isRotation(string1, string2){
    // make a function that shifts string1 to the right by one 
        if (string1 == string2){
            return false
        }
        for (var i = 0; i < string1.length-1; i++){
            var last = string1[string1.length-1];
            var short =string1.slice(0, string1.length-1);
            string1 = last.concat(short)
            console.log(string1)
            if ( string1 == string2){
                return true
            }
            
            
        }
            return false
    }



