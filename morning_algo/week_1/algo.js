// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD
function acronyms(string){
    var stringArr = string.split(" ") // [ "Live", "From", "Saturday", "Night", "Live"]
    var returnString = ""
    for(var i = 0; i < stringArr.length; i++){
        returnString += stringArr[i][0].toUpperCase()
    }
    console.log(returnString)
    return returnString
}
acronyms("Live From Saturday Night Live")
acronyms("Happy Birthday to you")


// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
function stringReverse(string){
    var returnString = ""
    for(var i = string.length-1; i >= 0; i--){
        returnString += string[i]
        // returnString = returnString + string[i]
    }
    console.log(returnString)
    return returnString
}
stringReverse("hello")
stringReverse("goodbye")


// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
function parensValid(string){
    var counter = 0
    for(var i = 0;i < string.length; i++){
        if(string[i] == "("){
            counter++
        }
        else{
            counter--
        }
        if(counter < 0){
            console.log("PARENS NOT VALID")
            return false
        }
    }
    if(counter == 0){
        console.log("PARENS VALID")
        return true
    }
    else{
        console.log("PARENS NOT VALID")
        return false
    }
}
// ")))((("
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()( () )" => TRUE
// EX. "( ()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE

function bracesValid(string){
    
}
// (),[],{}
// EX. "({})[]" => TRUE
// EX. " (}()[]"
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED
function isPalindrome(string){
    for(var i = 0; i < string.length/2; i++){
        if(string[i] != string[string.length -1 -i]){
            return false
        }
    }
    return true
    // var newstring = ""
    // for(var i= string.length-1; i >=0; i--){
    //     newstring += string[i]
    // }
    // if(string == newstring){
    //     return true
    // }
    // else{
    //     return false
    // }
}

// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "RACECAR" => TRUE


function isAnagram(string1, string2){
    if(string1.length != string2.length){
        return false
    }
    var wordcheck = {}
    for(var i =0; i < string1.lenght;i++){
        if(string1[i] in wordcheck){
            wordcheck[string[i]] += 1
        }
        else{
            wordcheck[string1[i]] = 1
        }
    }
    for(var i = 0; i < string2.length; i++){
        if(string2[i] in wordcheck){
            wordcheck[string2[i]] -= 1
            if(wordcheck[string2[i]] < 0){
                return false
            }
        }
        else{
            return false
        }
    }
    return true
}
// HINT: YOU WANT TO USE A DICTIONARY(OBJECT)
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// THUR
function bookIndex(array){
    var returnArr = []
    for(let i = 0; i < arr.length; i++){
        // IF CONSECUTIVE NUMBERS ARE FOUND
        if( (arr[i+1] - arr[i]) == 1 ){
            var dash = ''
            dash += arr[i]
            while((arr[i+1] - arr[i]) == 1){
                i++
            }
            // END OF CONSECUTIVE NUMBERS
            dash = dash + "-" + arr[i]
            returnArr.push(dash)
        }
        // NON-CONSECUTIVE NUMBERS
        else{
            returnArr.push(arr[i].toString())
        }
    }
    console.log(returnArr)
}
// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,3,13,14,15,16,17,36,37,38,70] => ["1","3" , "13-17", "36-38", "70"]

function join(arr, seperator){

}
// Given an arr and a separator string, output a string of every item in the array separated by the separator.
// EX. [1,2,3] , ", " => "1, 2, 3"
// EX. [1,2,3] , "-" => "1-2-3"
// EX. [1] , "-" => "1"
// EX. [], "," => ""

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//




// FRI
function invertObj(obj){

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