// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// EX. "Happy New Years" => "HNY"
// NOTE. YOU CAN USE .SPLIT() METHOD
var strName = "Edward Im"
var stringArr = strName.split(" ")
// ["Edward", "Im"]
var stringList = []
function acronyms(string) {
    var stringArr = string.split(" ")
    var newString = ""
    for (var i = 0; i < stringArr.length; i++) {
        newString += stringArr[i][0]
    }
    return newString
}
// console.log(acronyms("Live From Saturday Night Live"))

for (var i = 0; i < 5; i += 2) {
    console.log(i)
}

var i = 0
while (i < 10) {
    console.log(i)
    i++
}

// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
// NOTE. RETURN A NEW STRING
function stringReverse(string) {
    var newString = ""
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i]
    }
    return newString
}
console.log(stringReverse("HELLO"))
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
// HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS
function parensValid(string) {
    // EARLY EXIT
    if (string.length % 2 != 0) {
        return false
    }
    var counter = 0
    // ITERATE THROUGH STRING
    for (var char of string) {
        if (char == "(") {
            counter++
        }
        else if (char == ")") {
            counter--
        }
        if (counter < 0) {
            return false
        }
    }
    if (counter == 0) {
        return true
    }
    else {
        return false
    }
}
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE
// EX. ")))(((" => 

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
}
// (),[],{}
// EX. "({})[]" => TRUE
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED
function isPalindrome(string) {
    // ITERATE THROUGH THE STRING
    for (var i = 0; i < string.length / 2; i++) {
        // COMPARE THE OPPOSITE ENDS OF THE STRING
        if (string[i] == string[string.length - 1 - i]) {
            continue
        }
        else {
            return false
        }
    }
    return true
}
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE

function isAnagram(string1, string2) {
    // EARLY EXIT
    if (string1.length != string2.length) {
        return false
    }
    // CREATE OBJECT WITH CHARACTER AND FREQ FOR STRING 1
    var dict = {}
    for (var i = 0; i < string1.length; i++) {
        if (string1[i] in dict) {
            dict[string1[i]] += 1
        }
        else {
            dict[string1[i]] = 1
        }
    }
    for (var i = 0; i < string2.length; i++) {
        if (string2[i] in dict) {
            dict[string2[i]] -= 1
            if (dict[string2[i]] < 0) {
                return false
            }
        }
        else {
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
function bookIndex(array) {

}
// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]

function join(arr, seperator) {

}
// Given an arr and a separator string, output a string of every item in the array separated by the separator.
// EX. [1,2,3] , ", " => "1, 2, 3"
// EX. [1,2,3] , "-" => "1-2-3"
// EX. [1] , "-" => "1"
// EX. [], "," => ""

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//




// FRI
function invertObj(obj) {

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
function minCoinChange(num) {

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