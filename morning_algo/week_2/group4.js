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