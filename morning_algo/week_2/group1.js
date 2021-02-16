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
var table = { "A" : 0, "B": 0, "C":0, "D":0 }
// you don't know what characters we're going to see
//this was the only thing i could think of baessd on what we were given 0_0
    for(i=0;i<arr.length;i++){
      // arr[i] => represents the chars within the arr
      if(table.hasOwnProperty(arr[i])){
        // if char exists within obj then increment
        // table[]
        table.(arr[i])+=1;
      }
      else{
        //if the key doesn't exist then create the key with a value
        table.append(arr[i])
      }
  }
return table;
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

}
// EX. "THIS IS A TEST" => "TEST A IS THIS"