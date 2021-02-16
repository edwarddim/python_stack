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
            obj[arr[i]] = 1
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