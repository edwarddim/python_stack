/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the 
  right by that given integer amount.
  n will not be longer than the string length
*/

function rotateString(string, n){
    var s2 ='';
    for (let i = string.length-n; i < string.length; i++) {
        s2+=string[i]
    }
    for (let i = 0; i < string.length-n; i++) {
        s2+=string[i]
    }
    return s2
}

function rotateString2(string, n){
    var s2 ='';
    s2+=string.slice(string.length-n,string.length) // grabbing latter half
    s2+=string.slice(0,string.length-n) // grabbing first half
    return s2
}

function rotateString3(string, n){
    var s2=''
    for(i=string.length-n; i<(2*string.length)-n; i++){
        s2+=string[i%string.length]
    }
    return s2
}
console.log(rotateString("Hello World", 1))
console.log(rotateString("Hello World", 2))
// "Hello World", 1 => "dHello Worl"
// "Hello World", 3 => "rldHello Wo"