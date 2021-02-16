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

    let frequency = {

        "A": 0,
        "B": 0,
        "C": 0,
        "D":0,
    }
    for (let i = 0; i < arr.length; i++) 
        if (frequency.hasOwnProperty(arr[i])) {
            frequency[arr[i]]+= 1
        }
        return frequency;
    
    }
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

    var reverse = string.split(" ");
    var returnString = "" // you need an empty string
    for(var i = string.length; i > 0; i--){
        
        returnString += returnString.pus

    }
    return reverse;


}
console.log(reverseWordOrder("THIS IS A TEST"))
// EX. "THIS IS A TEST" => "TEST A IS THIS"
