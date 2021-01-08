
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// EX. "Happy New Years" => "HNY"
// NOTE. YOU CAN USE .SPLIT() METHOD
// var strName = "Edward Im"
// var stringArr = strName.split(" ")
// // ["Edward", "Im"]
// function acronyms(string){


// }
// // RETURN THE REVERSED STRING OF INPUT
// // EX. "HELLO" => "OLLEH"
// // NOTE. DO NOT USE ANY BUILT IN METHODS
// // NOTE. RETURN A NEW STRING
// function stringReverse(string){

// }

function parensValid(string) {
    if (string.length % 2 == 0) {
        console.log(string.length)
        return true
    }
    else {
        return false
    }
}
console.log(parensValid("(())"))
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE

function funcRand(string) {
    if (string.length % 2 == 0) {
        return true
    }
    else {
        return false
    }

}


// WED
function isPalindrome(string) {

    for (var i = string.length - 1; i >= 0; i--) {
        if (string[i] != string[(string.length - 1) - i]) {
            return false
        }
    }
    return true
}
console.log(isPalindrome("racecar"))

// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE

function isAnagram(string1, string2) {
    if (string1.length != string2.length) {
        return false
    }

    var s1_c = {}
    var s2_c = {}

    for (var i = 0; i < string1.length; i++) {
        if (s1_c[string1[i]] == undefined) {
            s1_c[string1[i]] = 1
            s2_c[string1[i]] = 0
        } else {
            s1_c[string1[i]]++
        }
    }

    for (var i = 0; i < string2.length; i++) {
        if (s2_c[string2[i]] == undefined) {
            s2_c[string2[i]] = 1
        } else {
            s2_c[string2[i]]++
        }
    }

    for (var k in s1_c) {
        var v = s1_c[k]

        if (s2_c[k] == undefined || s2_c[k] != v) {
            return false
        }
    }

    for (var k in s2_c) {
        var v = s2_c[k]

        if (s1_c[k] == undefined | s1_c[k] != v) {
            return false
        }
    }

    return true


}


isAnagram("silent", "listen")

// HINT: YOU WANT TO USE A OBJECT(DICTIONARY) TO KEEP TRACK OF CHARACTERS AND THEIR FREQUENCY
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE
// -----------------------------------------------------------------------------------------------//
// 

function bookIndex(array) {
    // ITERATE THROUGH THE ARRAY
    // CHECK TO SEE IF THE NEIGHBOURING INDEXES ARE CONSECUTIVE OR NOT
    // HINT. USE A FOR LOOP WITH A WHILE LOOP INSIDE

}
// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//
function minCoinChange(num) {

}
// GIVEN A NUMBER FIND THE LEAST AMOUNT OF COINS YOU CAN USE TO HAVE THE SAME AMOUNT
// EX. 321 => "12 QUARTERS, 2 DIMES, 1 PENNY"
// EX. 79 => "3 quarteres, 4 pennies"
// {
function minCoinChange(num){
    var dict = {'quarters':'0', 'dimes' : '0', 'nickels' : '0', 'penny': '0'}
    
    if(num > 25){
        dict['quarters'] = Math.floor(num/25)
        num -= dict['quarters']*25
    }
    if(num > 10){
        dict['dimes'] = Math.floor(num/10)
        num -= dict['dimes']*10
    }
    if(num > 5){
        dict['nickels'] = Math.floor(num/5)
        num -= dict['nickels']*5
    }
    dict['penny'] = num
    return dict
}

console.log(minCoinChange(79))
console.log(minCoinChange(321))
//     'quarter':3,
//     'dimes':0,
//     'nickel':0,
//     'penny':4
// }

minCoinChange(321)

function invertObj(obj) {

}
// GIVEN AN OBJECT WITH KEY VALUE PAIRS, RETURN A DICTIONARY WITH THE KEYS AND VALUE SWAPPED
// EX.
// {
const data = {
    apple:10,
    orange:15,
    pear:20,
}
const newData = Object.keys(data).reduce(function(obj, key) {
    obj[data[key]] = key;
    return obj;
}, {});
console.log(newData);
//     'A':"ONE",
//     'B':"TWO",
//     'C':"THREE"
// }
// {
//     "ONE":'A',
//     "TWO":'B',
//     "THREE":'C'
// }
