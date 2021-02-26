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
    let arrObj = {};
    for (let i = 0; i < arr.length; i++){
        if (arrObj.hasOwnProperty(arr[i])){
            arrObj[arr[i]] += 1;
        }
        else {
            arrObj[arr[i]] = 1
        }
    }
    return arrObj;

}
// EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
// EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
/* 
  Reverse Word Order
  Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
  .split()
*/
function reverseWordOrder(string){
    let newString = "";
    let stringArr = string.split(" ");
    for (let i = stringArr.length - 1; i >= 0; i--){
        if (i == 0){
            newString = newString + stringArr[i];
        }
        else{
            newString = newString + stringArr[i] + " ";
        }
    }
    return newString

}
console.log (reverseWordOrder("THIS IS A TEST"))

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
function dedupeString(string){
    let chars = {};
    //let result = '';
    for( let i = 0; i < string.length; i++){
        if (chars[string[i]] ===undefined){
            chars[string[i]] = 1;
        }
        else{
            chars[string[i]]++
        }
    }
    console.log(chars);
    return chars
    // you also want to return
}
console.log(dedupeString("aabacecbedd")) // otherewise you won't see anything being printed on this line




// EX. "aabacecbedd" => "abced"
// EX. "bbbbaaaaffff" => "baf"
/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){

}
console.log(reverseWord("THIS IS A TEST"))
// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"
// EX. "THIS IS A TEST" => "SIHT SI A TSET"


/* 
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
*/
function encode(string){
    var encoded = ""
    var thisChar = string[0]
    var charCount = 0
    for(var i = 0; i < string.length; i++){
        if(string[i] == thisChar){
            charCount ++
        }
        if(string[i] != thisChar || i == string.length - 1){
            encoded += thisChar + charCount
            thisChar = string[i]
            charCount = 1
        }
    }
    if(encoded.length < string.length){
        return encoded
    }
    else{
        return string
    }
}

// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"


function decode(string){
	let letters = {}
	let returnString = ''

	for (let i = 0; i < string.length; i++) {
		const letter = string[i];
		
		if (isNaN(parseInt(letter))) {
			letters[letter] = 0
		} else {
			letters[string[i - 1]] = letter
		}
	}
	for (const [key, value] of Object.entries(letters)) {
		returnString += `${key}${value}`
	}
	return returnString
}

let testString2 = "a3b2c1d3"

console.log(decode(testString2));

parseInt("3") // 3
parseInt("a") // NaN
// HINT. YOU'RE GOING TO USE parseInt() function OR isNaN()
// EX. "a3b2c1d3" => "aaabbcddd"