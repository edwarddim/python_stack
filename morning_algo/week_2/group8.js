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
  var tempObj = {};
  for (var i=0; i<arr.length; i++){
      if (tempObj.hasOwnProperty(arr[i])){
          tempObj[arr[i]] += 1;
      }
      else {
          var temp = arr[i];
          tempObj[arr[i]] = 1;
      }
  }
  return tempObj;
}

var array1 = ['A','A','B','C','C','C','D','D'];
var array2 = ['A','C','C','C','D','D','A','B',];

console.log(frequencyTable(array1));
console.log(frequencyTable(array2));

// EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
// EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
/* 
  Reverse Word Order
  Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
  .split()
*/

function reverseWordOrder(string){
  tempArr = [];
  tempStr = ""
  tempArr = string.split(" ");
  for (var i=tempArr.length - 1; i>=0; i--){
      if (tempArr[i + 1] == undefined){
          tempStr += `${tempArr[i]}`
      }
      else {
          tempStr += ` ${tempArr[i]}`;
      }
  }
  return tempStr;
}

var string3 = "THIS IS A TEST";

console.log(reverseWordOrder(string3));

// EX. "THIS IS A TEST" => "TEST A IS THIS"