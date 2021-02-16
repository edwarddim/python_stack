// MON
/* 
  Given an array of strings
  return a object to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
*/
function frequencyTable(arr){
    var o = {};
    for (elem of arr) {
      if( o.hasOwnProperty(elem)){
        o[elem]++;
      }
      else{
        o[elem]=1;
      }

    }
    return o
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
    var arr = string.split(" "); //need to pass empty string
    var string2 = '';
    for( let i = arr.length - 1; i >= 0; i--){
        string2 += arr[i]; 
        if (i > 0){
          string2 += ' ';
        }
    }
    return string2

}
console.log(reverseWordOrder('THIS IS A TEST'))
// EX. "THIS IS A TEST" => "TEST A IS THIS"

