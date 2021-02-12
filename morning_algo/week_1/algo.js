// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// EX. "Happy New Years" => "HNY"
// NOTE. YOU CAN USE .SPLIT() METHOD

var string = "HAPPY NEW YEAR"
var stringArr = string.split(" ") // ["Happy", "New", "Year"]

function acronyms(string) {
    var wordArr = string.split(" ")
    var returnString = ""
    for(var i = 0;i < wordArr.length; i+=2){
        returnString += wordArr[i][0]
    }
    return returnString
}
// console.log(acronyms("Live From Saturday Night Live"))


// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
// NOTE. RETURN A NEW STRING
function stringReverse(string) {
    // CREATE AN EMPTY STRING TO CONCAT ANSWER TO
    var returnString = ""
    // ITERATE TRHOGUH EACH CHARCTER IN STRING IN REVERSE
    for(var i = string.length - 1; i >= 0; i--){
        // CONCAT EACH CHARACTER TO THE RETURN
        returnString += string[i]
    }
    // RETURN THE ANSWER
    return returnString
}
// console.log(stringReverse("HELLO"))
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
// HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS
function parensValid(string) {
    // EARLY EXIT
    if(string.length % 2 == 1){
        return false
    }
    // ITERATE THROUGH THE STRING
    var counter = 0
    for(var i = 0; i < string.length; i++){
        // CHECK IF THE CHARACTER IS OPEN OR CLOSED PARENS
        // KEEP TRACK OF OPENING AND CLOSING PARENS
        if(string[i] == "("){
            counter++
        }
        else if(string[i] == ")"){
            counter--
        }
        if(counter < 0){
            return false
        }
    }
    if(counter == 0){
        return true
    }
    else{
        return false
    }
}
// 1. IS THERE A CORRESPONDING CLOSING PAREN FOR EACH OPENING PAREN
// 2. ARE THE PAREN BEING OPENED BEFORE BEING CLOSED
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE
// EX. ")))(((" => FALSE

function bracesValid(string) {
    var braceStack = []
    var checker = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    for (var char of string) {
        if (char == "(" || char == "{" || char == "[") {
            braceStack.push(char)
        }
        else {
            if (checker[braceStack[braceStack.length - 1]] == char) {
                braceStack.pop()
            }
            else {
                return false
            }
        }
    }
    if(braceStack.length != 0){
        return false
    }
    return true
}
console.log(bracesValid("({})[]"))
console.log(bracesValid("({])[]"))
console.log(bracesValid("((()))"))
console.log(bracesValid("([{}])"))
console.log(bracesValid("]["))
// (),[],{}
// EX. "( { ] ) [ ] " => TRUE
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//


function isPalindrome(string) {
    for(var i = 0; i < Math.floor(string.length/2); i++){
        if(string[i] != string[string.length - 1 - i] ){
            return false
        }
    }
    return true
}
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE
// "DAD" => TRUE

function isAnagram(string1, string2) {
    if(string1.length != string2.length){
        return false
    }
    var obj  = {}
    for(var i = 0; i < string1.length; i++){
        if(string1[i] in obj ){
            obj[string1[i]] += 1
        }
        else{
            obj[string[i]] = 1
        }
    }
    for(var i = 0; i < string2.length;i++){
        if(string2[i] in obj){
            obj[string2[i]] -= 1
            if(obj[string2[i]] < 0){
                return false
            }
        }
        else{
            return false
        }
    }
    return true
}
// HINT: YOU WANT TO USE A OBJECT(DICTIONARY) TO KEEP TRACK OF CHARACTERS AND THEIR FREQUENCY
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// THUR
function bookIndex(arr) {
    // INITIALIZE AN EMPTY ARRAY
    // ITERATE THROUGH THE ARR
        // LOOK FOR CONSECUTIVE NUMBERS
        // IF WE FIND A CONSECUTIVE NUMS, TAKE BEGINNING AND END NUMBERS AND CONCAT THEM
}

function bookIndex(arr) {
    // INITIALIZE AN EMPTY ARRAY
    var returnArr = []
    // ITERATE THROUGH THE ARR
    for(var i = 0; i < arr.length; i++){
        // LOOK FOR CONSECUTIVE NUMBERS
        // IF WE FIND A CONSECUTIVE NUMS, TAKE BEGINNING AND END NUMBERS AND CONCAT THEM
        if( (arr[i+1] - arr[i]) == 1 ){
            var temp = ""
            temp += arr[i].toString()
            while( (arr[i+1] - arr[i]) == 1 ){
                i++
            }
            temp += "-"
            temp += arr[i]
            returnArr.push(temp)
        }
        else{
            returnArr.push( arr[i].toString() )
        }
    }
    return returnArr
}
// var num = 70
// num.toString()
// var string = ""
// string += 40 => "40"
// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN A NEW ARRAY WITH INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//





// FRI
function minCoinChange(num) {
    
}
// console.log(minCoinChange(321))
// console.log(minCoinChange(79))
// GIVEN A NUMBER FIND THE LEAST AMOUNT OF COINS YOU CAN USE TO HAVE THE SAME AMOUNT
// EX. 321 => "12 QUARTERS, 2 DIMES, 1 PENNY"
// EX. 79 => "3 quarteres, 4 pennies"
// {
//     'quarter':3,
//     'dimes':0,
//     'nickel':0,
//     'penny':4
// }



function invertObj(obj) {

}
console.log(invertObj({
    'A':"ONE",
    'B':"TWO",
    'C':"THREE"
}))
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