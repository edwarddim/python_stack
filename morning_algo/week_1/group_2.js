// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// EX. "Happy New Years" => "HNY"
// NOTE. YOU CAN USE .SPLIT() METHOD
var strName = "Edward Im"
var stringArr = strName.split(" ")
// ["Edward", "Im"]
function acronyms(string) {

}
// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
// NOTE. RETURN A NEW STRING
function stringReverse(string) {

}






// TUE
// HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS
function parensValid(string) {

    var obrace = 0
    for (var i = 0; i < string.length; i++) {
        if (string[i] == "(") {
            obrace++
        }
        if (string[i] == ")") {
            if (obrace == 0) {
                return false
            } else {
                obrace--
            }
        }
        console.log(obrace)
    }
    if (obrace == 0) {
        return true
    } else {
        return false
    }

}
console.log(parensValid("We're looking for (subtext)"))
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE

function bracesValid(string) {
    var opren = 0
    var obrace = 0
    var obrack = 0
    for (var i = 0; i < string.length; i++) {
        if (string[i] == "(") {
            opren++
        } else if (string[i] == "[") {
            obrace++
        } else if (string[i] == "{") {
            obrack++
        }



        if (string[i] == ")") {
            if (opren == 0) {
                return false
            } else {
                opren--
            }
        } else if (string[i] == "]") {
            if (obrace == 0) {
                return false
            } else {
                obrace--
            }
        } else if (string[i] == "}") {
            if (obrack == 0) {
                return false
            } else {
                obrack--
            }
        }


        console.log(opren)

    }
    if (opren == 0 && obrace == 0 && obrack == 0) {
        return true
    } else {
        return false
    }

}
console.log(bracesValid("{things} [inside] of (things)"))
// (),[],{}
// EX. "({})[]" => TRUE
// TAKE PARENS VA=LID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// TUE
// HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS


// WED
function isPalindrome(string) {
    var count = 0
    for (var i = 0; i < string.length / 2; i++)
        if (string[i] == string[string.length - 1 - i]) {
            count += 1
            if
        }


}
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE

function isAnagram(string1, string2) {

}
// HINT: YOU WANT TO USE A OBJECT(DICTIONARY) TO KEEP TRACK OF CHARACTERS AND THEIR FREQUENCY
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE








// THUR

function bookIndex(array) {
    var indexList = []
    var x = 0
    for (var i = 0; i < array.length; i++) {
        while (array[i] != array[i + 1] - 1) {
            indexList.push(array[i])
        }
        if (array[i] == array[i + 1] - 1) {

        }
        // while (array[i] == array[i + 1]) {}
    }
    return indexList
}
console.log(bookIndex([1, 13, 14, 15, 16, 17, 36, 37, 38, 70]))

// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]



// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//


// FRI

// GIVEN A NUMBER FIND THE LEAST AMOUNT OF COINS YOU CAN USE TO HAVE THE SAME AMOUNT
// EX. 321 => "12 QUARTERS, 2 DIMES, 1 PENNY"
// EX. 79 => "3 quarteres, 4 pennies"
// {
//     'quarter':3,
//     'dimes':0,
//     'nickel':0,
//     'penny':4
// }

function minCoinChange(num) {

    var change = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0,
    }

    while (num > 0) {
        if (num >= 25) {
            change['quarters'] ++
            num -=25
        } else if (num >= 10) {
            change['dimes'] ++
            num -= 10
        } else if (num >=5) {
            change['nickels'] ++
            num -= 5
        } else if (num >= 1) {
            change['pennies'] ++
            num -=1
        }
    }
    return change

}
console.log(minCoinChange(321))



function invertObj(obj) {

    var flip_dic = {}

    for (var [k,v] of Object.entries(obj)){
        flip_dic[v] = k
    }

    return flip_dic
}

var obj = {
    key: "value",
    key1: "value1",
    key2: "value2",
}

console.log(invertObj(obj))

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