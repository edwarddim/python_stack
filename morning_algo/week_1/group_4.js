//
//MON 
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD
function acronyms(string){
    var stringArr = string.split(" ") // [ "Live", "From", "Saturday", "Night", "Live"]
    
}

// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
function stringReverse(string){
    
}
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
function parensValid(string){

}
// can you write this in JS?
def parensValid(string):
    opencount = 0
    closecount = 0
    for i in range(len(string)):
        if string[i] == "(":
            opencount += 1
        elif string[i] ==")":
            closecount += 1
        if closecount > opencount:
            return False
    if opencount != closecount:
        return False
    else:
        return True









print(parensValid("()(())"))

// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE

function bracesValid(string){

}

def parensValid(string):
    openpar = 0
    closepar = 0
    openbra = 0
    closebra = 0
    opensqu = 0
    closesqu = 0
    for i in range(len(string)):
        if string[i] == "(":
            openpar += 1
        elif string[i] ==")":
            closepar += 1
        // if closepar > openpar:
            // return False
    if openpar != closepar:
        return False
        if string[i] == "(":
            openbra += 1
        elif string[i] ==")":
            closebra += 1
        // if closebra > openbra:
        //     return False
    if openbra != closebra:
        return False
        if string[i] == "(":
            opensqu += 1
        elif string[i] ==")":
            closesqu += 1
        // if closesqu > opensqu:
        //     return False
    if opensqu != closesqu:
        return False
    else:
        return True

const str1 = "({})[]"

    function bracesValid(str) {
        var opens = ['(','{','[']
        var closes =[')','}',']']
        var op_count= 0
        var ed_count = 0
        for (var i=0; i<str.length; i++){
        if (ed_count > op_count){
            return false
        }
        if(opens.includes(str[i]) ){
            op_count++
        }
        if(closes.includes(str[i]) ){
            ed_count++
        }
        }
        if (op_count==ed_count){
            return true
        }

        return false
    }

console.log("string 1:", bracesValid(str1))

print(parensValid("([]){}"))


def parensValid(string):
    openpar = 0
    closepar = 0
    openbra = 0
    closebra = 0
    opensqu = 0
    closesqu = 0
    for i in range(len(string)):
        if string[i] == "(":
            openpar += 1
        elif string[i] ==")":
            closepar += 1
        if openpar != closepar:
            return False
        if string[i] == "(":
            openbra += 1
        elif string[i] ==")":
            closebra += 1
        if openbra != closebra:
            return False
        if string[i] == "(":
            opensqu += 1
        elif string[i] ==")":
            closesqu += 1
        if opensqu != closesqu:
            return False
        else:
            return True




// (),[],{}
// EX. "({})[]" => TRUE
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED
function isPalindrome(string){

}
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE

function isAnagram(string1, string2){

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
function bookIndex(array){

}
// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]

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










