// MON
/* 
    Given an array of strings
    return a object to represent how many times each array item is found (a frequency table)
    Useful methods:
    Object.hasOwnProperty("keyName")
        - returns true or false if the object has the key or not
*/
function frequencyTable(arr){
    var obj = {}
    obj.hasOwnProperty("key_Name")
    for (var i = 0; i <arr.length;i++){
        var x = arr[i]
        if (obj.hasOwnProperty(x)){
            obj[x]++
        }
        else{
            obj[x] = 1
        }
    }
    return obj
}

console.log(frequencyTable(['A','C','C','C','D','D','A','B',]))

    
    
  // EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
  // EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
/* 
    Reverse Word Order
    Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
    .split()
  */
function reverseWordOrder(string){
    var arr = (string.split(" "))
    for(var i = 0; i < arr.length/2; i++){
        var temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    var str = ''
    for(var i = 0; i < arr.length; i++){
        str += arr[i] + " "
    }
    return str
}

console.log(reverseWordOrder("This is a test"))


}
  // EX. "THIS IS A TEST" => "TEST A IS THIS"