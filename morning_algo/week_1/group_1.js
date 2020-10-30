// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD
// function acronyms(string){
//     // var stringArr = "Live From Saturday Night Live" 
//     var stringArr = string.split(" ") // ["Live", "From", "Saturday", "Night", "Live"]
//     for(var i = 0; i < stringArr.length; i++){
//         // This will print out the first character in each string
//         // you don't need that IF statement
//         console.log(stringArr[i][0])
    
//     if(stringArr[i] = stringArr[0]){
//         console.log(stringArr[i])
//     }
// }

// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
// function stringReverse(string){
    
// }
// tuesdaY
// function parensValid(str){
//     var count = 0
//     for (var i = 0; i < str.length; i++){
//         // if (str.)
//         if (count < 0) {
//             return false
//         }
//         if (str[i] == "(") {
//             count++

//         }
//         if (str[i] == ")") {
//             count--
//         }
//         if (count > 0){
//             return false
//         }
//         if (count == 0){
//             return true
//         }
//         return count
//     }
// }
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE

// function bracesValid(string){
//     var parenOpen =0;
//     va
// }
// (),[],{}
// EX. "({})[]" => TRUE
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED
// function isPalindrome(string){
//     for(var i = 0; i < string.length/2;  i++){
//         if(string[i] !== string[string.lengthNo worries!
//         ] ){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPalindrome("kayak"))
// console.log(isPalindrome("hello"))

// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE

// function isAnagram(string1, string2){

// }
// HINT: YOU WANT TO USE A DICTIONARY
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// THUR
// function bookIndex(array){

// }
// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]


// function join(arr, seperator){

// }
// Given an arr and a separator string, output a string of every item in the array separated by the separator.
// EX. [1,2,3] , ", " => "1, 2, 3"
// EX. [1,2,3] , "-" => "1-2-3"
// EX. [1] , "-" => "1"
// EX. [], "," => ""

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//






// let arr = [1, 2,3,13,14,15,16,17,36,37,38,68,69,70];
// function bookIndex(array){
//     var result = [];
//     var begin = -1;  // stores the beginning page of a series
//     for(var i = 0; i < array.length - 1; i++){
//         if(begin < 0){ // new series
//             if(array[i] + 1 == array[i + 1]){
//                 begin = array[i];
//             } else { // begin is storing a page number
//                 result.push(array[i]);
//             }
//         } else { // begin has a stored page
//             if(array[i] + 1 != array[i + 1]){
//                 result.push("" + begin + "-" + array[i]);
//                 begin = -1;
//             }
//         }
//     }
//     if(begin < 0){
//         result.push(array[array.length-1]);
//     } else { // begin is storing a page number
//         result.push("" + begin + "-" + (array[array.length - 1]));
//     }
//     return result;
// }

// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,3,13,14,15,16,17,36,37,38,70] => ["1","3" , "13-17", "36-38", "70"]

// function join(arr, seperator){
//     let result = "";
//     if (arr.length === 0) {
//         return ""
//     }
//     if (arr.length === 1) {
//         return "" + arr[0]
//     }
//     for (let i = 0; i < arr.length - 1; i++) {
//         result += "" + arr[i] + seperator
//     }
//     result += "" + arr[arr.length-1]
//     return result
// }
// let sampleArr = [1,2,3]
// let sep = "-"

// console.log(join(sampleArr, sep))

// Given an arr and a separator string, output a string of every item in the array separated by the separator.
// EX. [1,2,3] , ", " => "1, 2, 3"
// EX. [1,2,3] , "-" => "1-2-3"
// EX. [1] , "-" => "1"
// EX. [], "," => ""

// FRI
function invertObj(obj){
    var newObj = {};
    for(i in obj){
        newObj[obj[i]] = i;
    }
    return newObj;
}
// GIVEN AN OBJECT WITH KEY VALUE PAIRS, RETURN A DICTIONARY WITH THE KEYS AND VALUE SWAPPED
// EX.
// {
//     'A':"ONE",
//     'B':"TWO",
//     'C':"THREE"
// }
// {
//     "ONE":'A',
//     "TWO":'B',
//     "THREE":'C'
// }
function minCoinChange(num){
    quarters = Math.trunc(num / 25);
    num -= quarters * 25;
    dimes = Math.trunc(num / 10);
    num -= dimes * 10;
    nickles = Math.trunc(num / 5);
    num -= nickles * 5;
    pennies = num;
    result = "";
    if(quarters > 0) {
        result += quarters + " QUARTERS";
    }
    if(dimes > 0) {
        if(result !== ""){
            result += ", "
        }
        result += dimes + " DIMES";
    }
    if(nickles > 0) {
        if(result !== ""){
            result += ", "
        }
        result += nickles + " NICKLES";
    }
    if(pennies > 0) {
        if(result !== ""){
            result += ", "
        }
        result +=  pennies+ " PENNIES";
    }
    return result;
}
// GIVEN A NUMBER FIND THE LEAST AMOUNT OF COINS YOU CAN USE TO HAVE THE SAME AMOUNT
// EX. 321 => "12 QUARTERS, 2 DIMES, 1 PENNY"
// EX. 79 => "3 quarteres, 4 pennies"
// {
//     'quarter':3,
//     'dimes':0,
//     'nickel':0,
//     'penny':3
// }
