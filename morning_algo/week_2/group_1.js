

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

if(substr)