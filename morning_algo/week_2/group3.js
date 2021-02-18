// MON
/* 
  Given an array of strings
  return a object to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
*/
// obj = {}
// obj.hasOwnProperty("key_name") => if("key_name" in obj)
function frequencyTable(arr){
    var obj = {}
    for (i = 0; i < arr.length; i++){
        if(obj.hasOwnProperty(arr[i])) {
            obj[arr[i]]++
        }
        else {
          r  ogbj[arr[i]] = 1
        }
    }
    return obj
}
console.log(frequencyTable(['A','A','B','C','C','C','D','D']))
// EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
// EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
/* 
  Reverse Word Order
  Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
  .split()
*/
function reverseWordOrder(string){
    newString = ''
    for(i = string.length -1; i >= 0 ; i--){
    newString += string[i]
    }
return newString
}
console.log(reverseWordOrder('This is a test'))
// EX. "THIS IS A TEST" => "TEST A IS THIS"


function reverseWordOrder(string){
    var newString = string.split(" ")
    console.log(newString)
    for (i=0; i < newString.length/2; i++) {
        var temp = newString[i]
        newString[i] = newString[newString.length-1-i]
        newString[newString.length -1 - i] = temp
    }
    return newString.join(" ")
}
console.log(reverseWordOrder("THIS IS A TEST"))

// EX. "THIS IS A TEST" => "TEST A IS THIS"

// TUE
/* 
  String: Dedupe
  Remove duplicate characters 
    - (case-sensitive)
  Bonus: Keep only the last instance of each character.
  1. USE A OBJECT(DICTIONARY) TO KEEP TRACK OF SEEN CHARS
  2. EXTRA CHALLENGE: USE A BUILT IN FUNCITON TO RETURN THE SAME STRING
*/
function dedupeString(string) 
{
    var result = "";
    var freq = {};
    for (i = 0; i < string.length; i++) 
    {
        let char = string[i];
        if (freq[char]) 
        {
            freq[char]++;
        } else {
            freq[char] = 1
            result = result + char;
        }
    }
    return result;
}

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){
  stringArr = string.split(' ')


}
console.log(reverseWord("THIS IS A TEST"))
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
    
}
// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"

function decode(string){

}

parseInt("3") // 3
parseInt("a") // NaN
// HINT. YOU'RE GOING TO USE parseInt() function OR isNaN()
// EX. "a3b2c1d3" => "aaabbcddd"
