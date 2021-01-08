// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// EX. "Happy New Years" => "HNY"
// NOTE. YOU CAN USE .SPLIT() METHOD
var strName = "Edward Im"
var stringArr = strName.split(" ")
// ["Edward", "Im"]
function acronyms(string) {
    var words = string.split(" ")

    var nym = ""

    for (var i = 0; i < words.length; i++) {
        nym += words[i][0]
    }


    // Loop through.
    // catch what you want
    // put it in a string.
    // return it
    // call it.

    return nym;
}

console.log(acronyms("Hello Magnificent World"))


// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
// NOTE. RETURN A NEW STRING
function stringReverse(string) {

    var backs = ""

    for (var i = string.length - 1; i >= 0; i--) {
        backs += string[i]
    }
    return backs;
}
console.log(stringReverse("Robots"))
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
function parensValid(string) {
    for (var i = 0; i < string.length; i++) {
        var count = 0
        if (string[i] = ")") {
            count -= 1;
        }
        if (string[i] = "(") {
            count += 1;
        }
        if (count < 0) {
            return ("False")
        }

        else if (count > 0) {
            return ("False")
        }

        else {
            return ("True")
        }
    }
}
console.log(parensValid("(()()"))
//count
//( = +1
//) = -1
//if count = 0 is true
//if count <0 is false
}
print(parensValid(()(())))
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE






function bracesValid(string) {

}
// (),[],{}
// EX. "({})[]" => TRUE
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED
function isPalindrome(string) {
    for (var i = 0; i < string.length / 2; i++) {
        if (string[i] == string[string.length - i - 1]) {
            continue
        }
        else { return false }
    } function isPalindrome(string) {
        for (var i = 0; i < string.length / 2; i++) {
            if (string[i] == string[string.length - i - 1]) {
                continue
            }
            else { return false }
        }
        return true
    }

}
// looks good
console.log(isPalindrome("HELLO"))
console.log(isPalindrome('racecar'))







// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE

function isAnagram(string1, string2) {

}
// HINT: YOU WANT TO USE A DICTIONARY
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

console.log(bookIndex([1, 13, 14, 15, 16, 17, 36, 37, 38, 70]))

console.log(bookIndex([1, 13, 14, 15, 16, 17, 36, 37, 38, 70]))
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
//dict = {0:{1:'a'}, 1:{2:'b'}, 2:{3:'c'}}
//for (var key in dict){
//  console.log( key, dict[key] );
//}
function invertObj(obj) {
    var temp = ''
    console.log(obj.length)
    // for i in range(0,len(obj)):
    //     temp = obj[i];
    //     obj[i] = obi[i][0];
    //     obj[i][0] = temp;
    for (var i = 0; i < obj.length; i++){
        temp = obj['A'];
        obj['A'] = obi['A'][0];
        obi['A'][0] = temp;
    }
    console.log(obj)
}


// GIVEN AN OBJECT WITH KEY VALUE PAIRS, RETURN A DICTIONARY WITH THE KEYS AND VALUE SWAPPED
// EX.
var dict1 = {
    'A':"ONE",
    'B':"TWO",
    'C':"THREE"
    }

var dict2 = {
    "ONE":'A',
    "TWO":'B',
    "THREE":'C'
    }

invertObj(dict1);





function minCoinChange(num){
    var pocket = {
        'quarters' : 0,
        'dimes' : 0,
        'nickels' : 0,
        'pennies' : 0
    }
    // for (var j=0; j<=num; j++){
        if (num>=25){
            for (i=num; i>=25; i-=25){
                pocket['quarters']++;
                num-=25;
            }}
        if (num>=10){
            for (k=num; k>=10; k-=10){
                pocket['dimes']++;
                num-=10;
            }}
        if (num>=5){
            for (l=num; l>=5; l-=5){
                pocket['nickels']++;
                num-=5;
            }}
        if (num>=1){
            for (m=num; m>=1; m-=1){
                pocket['pennies']++;
                num-=1;
            }}
    console.log(pocket);
}

minCoinChange(207);

// GIVEN A NUMBER FIND THE LEAST AMOUNT OF COINS YOU CAN USE TO HAVE THE SAME AMOUNT
// EX. 321 => "12 QUARTERS, 2 DIMES, 1 PENNY"
// EX. 79 => "3 quarteres, 4 pennies"
// {
//     'quarter':3,
//     'dimes':0,
//     'nickel':0,
//     'penny':3
// }