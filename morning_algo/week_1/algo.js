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
            else {
                return false
            }
        }
        return true
    }
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
    var returnArr = []
    // ITERATE THROUGH THE ARRAY
    for (var i = 0; i < arr.length; i++) {
        // CHECK TO SEE IF THE NEIGHBOURING INDEXES ARE CONSECUTIVE OR NOT
        if ((arr[i + 1] - arr[i]) == 1) {
            var dash = ""
            dash += arr[i]
            while ((arr[i + 1] - arr[i]) == 1) {
                i++
            }
            dash += "-"
            dash += arr[i]
            returnArr.push(dash)
        }
        else {
            returnArr.push(arr[i].toString())
        }
    }
    // HINT. USE A FOR LOOP WITH A WHILE LOOP INSIDE
    return returnArr
}
// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//


// FRI
function minCoinChange(num) {
    var obj = {}
    obj['quarters'] = Math.floor(num / 25) // calculates how many quarters goes into num
    num = num % 25
    obj['dimes'] = Math.floor(num / 10)
    num = num % 10
    obj['nickels'] = Math.floor(num / 5)
    num = num % 5
    obj['pennies'] = num
    return obj
}
console.log(minCoinChange(321))
console.log(minCoinChange(79))
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
    var invertObj ={}
    for(var [key, value] of Object.entries(obj)){
        invertObj[value] = key
    }
    return invertObj
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