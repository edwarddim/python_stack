
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
