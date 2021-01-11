// MON
/* 
  Given an array of strings
  return a object to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
*/
function frequencyTable(arr) {
    var obj = {}
      for (var name in arr) {
        if (arr.hasOwnProperty(name)) {

        }
        else {
          
        }
      }
    return obj

    // obj.hasOwnProperty("key_Name")
}
console.log(frequencyTable(['A','A','B','C','C','C','D','D']))
console.log(frequencyTable(['A','C','C','C','D','D','A','B']))
  // EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
  // EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
  /* 
    Reverse Word Order
    Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
    .split()
  */
// okay thank you 
  function reverseWordOrder(string){
    var newString=""
    for(var i=string.length-1; i >= 0; i--){
        newString += string[i]
    }
    return newString
    }
  console.log(reverseWordOrder("THIS IS A TEST"))//"THIS IS A TEST" => "TEST A IS THIS"