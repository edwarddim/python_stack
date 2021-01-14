// MON
/* 
    Given an array of strings
    return a object to represent how many times each array item is found (a frequency table)
    Useful methods:
    Object.hasOwnProperty("keyName")
        - returns true or false if the object has the key or not
*/
function frequencyTable(arr){
    var obj = {}
    obj.hasOwnProperty("key_Name")
    for (var i = 0; i <arr.length;i++){
        var x = arr[i]
        if (obj.hasOwnProperty(x)){
            obj[x]++
        }
        else{
            obj[x] = 1
        }
    }
    return obj
}

console.log(frequencyTable(['A','C','C','C','D','D','A','B',]))

    
    
  // EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
  // EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
/* 
    Reverse Word Order
    Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
    .split()
  */
function reverseWordOrder(string){
    var arr = (string.split(" "))
    for(var i = 0; i < arr.length/2; i++){
        var temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    var str = ''
    for(var i = 0; i < arr.length; i++){
        str += arr[i] + " "
    }
    return str
}

console.log(reverseWordOrder("This is a test"))


}
  // EX. "THIS IS A TEST" => "TEST A IS THIS"


  // TUE
/* 
  String: Dedupe
  Remove duplicate characters 
    - (case-sensitive)
  Bonus: Keep only the last instance of each character.
  1. USE A DICTIONARY TO KEEP TRACK OF SEEN CHARS
  2. CHALLENGE: USE A BUILT IN FUNCITON TO RETURN THE SAME STRING
*/
function dedupeString(string){
    result = {}
    var returnstr = ""
    for (i=0; i < string.length; i++) {
        if (result.hasOwnProperty(string[i]) == true) {
            continue;
        }
        else {
            result[string[i]] = 1
            returnstr += string[i]
        }
    }
    return returnstr

}
console.log(dedupeString("bbbbaaaffe"))

// Challenge
function dedupeString(string){
    return string
        .split('')
        .filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        })
        .join('');
}
console.log(dedupeString('faaabaccadbeffed'));

// EX. "aabacecbedd" => "abced" 
// EX. "bbbbaaaaffff" => "baf"
/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){
    var arr = (string.split(" "))
    console.log(arr)
    var newstring = ""
    for ( var i=0; i < arr.length; i++) {
        for (var x = arr[i].length-1; x>=0; x--){
            newstring += arr[i][x]
        }
        newstring += " "
    }
    return newstring
}
console.log(reverseWord("hello world"))
// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"
// EX. "THIS IS A TEST" => "SIHT SI A TSET"


  // TUE
/* 
  String: Dedupe
  Remove duplicate characters 
    - (case-sensitive)
  Bonus: Keep only the last instance of each character.
  1. USE A DICTIONARY TO KEEP TRACK OF SEEN CHARS
  2. CHALLENGE: USE A BUILT IN FUNCITON TO RETURN THE SAME STRING
*/
function dedupeString(string){
    result = {}
    var returnstr = ""
    for (i=0; i < string.length; i++) {
        if (result.hasOwnProperty(string[i]) == true) {
            continue;
        }
        else {
            result[string[i]] = 1
            returnstr += string[i]
        }
    }
    return returnstr

}
console.log(dedupeString("bbbbaaaffe"))

// Challenge
function dedupeString(string){
    return string
        .split('')
        .filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        })
        .join('');
}
console.log(dedupeString('faaabaccadbeffed'));

// EX. "aabacecbedd" => "abced" 
// EX. "bbbbaaaaffff" => "baf"
/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){
    var arr = (string.split(" "))
    var newstring = ""
    for ( var i=0; i < arr.length; i++) {
        for (var x = arr[i].length-1; x>=0; x--){
            newstring += arr[i][x]
        }
    newstring+= 
    }
    return newstring
}
console.log(reverseWord("hello world"))
// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"
// EX. "THIS IS A TEST" => "SIHT SI A TSET"
  // TUE
/* 
  String: Dedupe
  Remove duplicate characters 
    - (case-sensitive)
  Bonus: Keep only the last instance of each character.
  1. USE A DICTIONARY TO KEEP TRACK OF SEEN CHARS
  2. CHALLENGE: USE A BUILT IN FUNCITON TO RETURN THE SAME STRING
*/
function dedupeString(string){
    result = {}
    var returnstr = ""
    for (i=0; i < string.length; i++) {
        if (result.hasOwnProperty(string[i]) == true) {
            continue;
        }
        else {
            result[string[i]] = 1
            returnstr += string[i]
        }
    }
    return returnstr

}
console.log(dedupeString("bbbbaaaffe"))

// Challenge
function dedupeString(string){
    return string
        .split('')
        .filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        })
        .join('');
}
console.log(dedupeString('faaabaccadbeffed'));

// EX. "aabacecbedd" => "abced" 
// EX. "bbbbaaaaffff" => "baf"
/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){
    var arr = (string.split(" "))
    var newstring = ""
    for ( var i=0; i < arr.length; i++) {
        for (var x = arr[i].length-1; x>=0; x--){
            newstring += arr[i][x]
        }
    newstring+= 
    }
    return newstring
}
console.log(reverseWord("hello world"))
// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"
// EX. "THIS IS A TEST" => "SIHT SI A TSET"



//-----------------------------------------------------------------------------------------------------//
// THUR
/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the 
  right by that given integer amount.
  n will not be longer than the string length
*/


function rotateString(string, n){

    var newStr = ""
    var splitted = string.split('')
    
    if (n>0) {
        tobeg = []
        for (var i=0; i<n; i++){
            tobeg.push(splitted[splitted.length-1])
            splitted.pop()
        }
        for (var i=tobeg.length-1; i>=0; i--) {
            newStr+=tobeg[i]
        }

        for (var i = 0; i<splitted.length; i++) {
            newStr+=splitted[i]
        }
    } else {
        return string
    }

    return newStr
}
console.log(rotateString("HELLO WORLD", 2))



function rotateString(string, n){
    var seperate = string.split("")
    var returnString= ""
    
    for(var i=0; i< n; i++){
        returnString += seperate[seperate.length -1 -i]
    
    }
    for(var j=0; j < seperate.length - i; j++){
        returnString += seperate[j]
        }

    return returnString
}
console.log(rotateString("HELLO WORLD", 1))



// EX. "HELLO WORLD", 1 => "DHELLO WORL"
// EX. "HELLO WORLD", 2 => "LDHELLO WOR"

//-----------------------------------------------------------------------------------------------------//