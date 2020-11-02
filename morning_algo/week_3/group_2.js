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
    var dict = {}
    for (var i = 0; i < arr.length; i++){
        if(dict.hasOwnProperty(arr[i])){
            dict[arr[i]]++
        }
        else{
            dict[arr[i]] = 1
        }
    }
    return dict
}

frequencyTable()
// EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
// EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
/* 

// create an object to return
// itterarate through the array
// keep record of each element so that we can count and log each element




Reverse Word Order
  Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
*/
function reverseWordOrder(string){

}
// EX. "THIS IS A TEST" => "TEST A IS THIS"
// EX. "GOOD MORNING VIETNAM" => "VIETNAM MORNING GOOD"