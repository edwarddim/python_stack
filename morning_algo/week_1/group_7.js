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
    / -----------------------------------------------------------------------------------------------/ /
        // -----------------------------------------------------------------------------------------------//

        // TUE
        // HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS
        function parensValid(string) {
            var countopen = 0
            var countclose = 0
            for (var i = 0; i < string.lenght; i++);
            if (string[i] == "(") {
                countopen++
            }
            if (string[i] == ")") {
                counterclose++
            }
            if (Countopen > counterclose); {
                return false;
            }
            if (countclose > countopen); {
                return false;
            }
            else {
                return true;
            }
            console.log(parensValidityState("()"))




        }
    // RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
    // EX. "()(())" => TRUE
    // EX. "(()()" => FALSE
    // EX. "()()()" => TRUE
    // EX. "())(()" => FALSE

    //test test
    function bracesValid(string) {


    }
    // (),[],{}
    // EX. "({})[]" => TRUE
    // TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
    // WILL REQUIRE A STACK IMPLEMENTATION
    // -----------------------------------------------------------------------------------------------//
    // -----------------------------------------------------------------------------------------------//    / -----------------------------------------------------------------------------------------------//
    // -----------------------------------------------------------------------------------------------//

    // TUE
    // HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS
    function parensValid(string) {


    }
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
    // -----------------------------------------------------------------------------------------------//    / -----------------------------------------------------------------------------------------------//
    // -----------------------------------------------------------------------------------------------//

    // TUE
    // HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS
    function parensValid(string) {



    }
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
    // -----------------------------------------------------------------------------------------------//    // -----------------------------------------------------------------------------------------------//

    // TUE
    // HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS
    function parensValid(string) {




    }
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
    // TUE
    // HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS
    function parensValid(string) {
    }


    function isPalindrome(string) {
        for (var i = 0; i < string.length / 2; i++) {
            //compare index[0] to index[last]
            //compare index[1] to index[last-1]

            console.log("comparing " + string[i] + " to " + string[string.length - 1 - i])
            if ((string[i]) == (string[string.length - 1 - i])) {
                continue
            } else {
                return false
            }
        }
        return true
    }
    str = "HELLO"
    str2 = "KAYAK"
    str3 = "TACOCAT"
    console.log(str + " " + isPalindrome(str))
    console.log(str2 + " " + isPalindrome(str2))
    console.log(str3 + " " + isPalindrome(str3))
    // RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
    // "HELLO" => FALSE
    // "KAYAK" => TRUE
    // "TACOCAT" => TRUE

    function isAnagram(string1, string2) {
        var dict1 = {}
        // you only need one dict
        if (string1.length != string2.length) {
            return false
        }
        for (i = 0; i < string1.length; i++) {
            //put each letter into dict1
            dict1[string1[i]] = (dict1[string1] + 1) || 1//adds each letter to dictionary with a value of one

        }
        for (i = 0; i < string2.length; i++) {
            dict1[string2[i]] = (dict1[string2] - 1) || -1//add with a value of -1
        }

        //does each value in dict1 == 0?


        console.log(dict1)

    }

    console.log(isAnagram('ATE', 'TEA'))
    console.log(isAnagram('LISTEN', 'SILENT'))
    console.log(isAnagram('LISTEN', 'SILENZ'))
    console.log(isAnagram('DEER', 'REDD'))
    // HINT: YOU WANT TO USE A OBJECT(DICTIONARY) TO KEEP TRACK OF CHARACTERS AND THEIR FREQUENCY
    // RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
    // EX. "ATE", "TEA" => TRUE
    // EX. "LISTEN", "SILENT" => TRUE
    // EX. "LISTEN", "SILENZ" => FALSE
    // EX. "DEER", "REDD" => FALSE
    arr = [1, 13, 14, 15, 16, 17, 36, 37, 38, 70]
    function bookIndex(array) {
        var temp = []
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] + 1 == arr[i + 1]) {
                var start = arr[i];
                while (arr[i] + 1 == arr[i + 1]) {
                    i++;
                }
                var end = arr[i];
                temp.push(start + "-" + end);
            } else {
                temp.push(arr[i]);
            }
        }
        var newstring = temp.join(',');
        return newstring
    }
    console.log(bookIndex(arr));

        // ITERATE THROUGH THE ARRAY
        // CHECK TO SEE IF THE NEIGHBOURING INDEXES ARE CONSECUTIVE OR NOT
        // HINT. USE A FOR LOOP WITH A WHILE LOOP INSIDE


    // GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
    // EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]

    // FRI
function minCoinChange(num) {
    var coins = {
        quarter : 0,
        dimes : 0,
        nickels : 0,
        pennies : 0
    }
    while (num > 0){
        if (num >= 25) {
            coins['quarters'] ++
            num -= 25
        } else if (num >= 10){
            coins['dimes'] ++
            num -= 10
        } else if (num >= 5){
            coins['nickels'] ++
            num -= 5
        } else if (num >= 1){
            coins['pennies'] ++
            num -= 1
        }
    }
    return coins
}
console.log(minCoinChange(187))
// GIVEN A NUMBER FIND THE LEAST AMOUNT OF COINS YOU CAN USE TO HAVE THE SAME AMOUNT
// EX. 321 => "12 QUARTERS, 2 DIMES, 1 PENNY"
// EX. 79 => "3 quarteres, 4 pennies"
// {
//     'quarter':3,
//     'dimes':0,
//     'nickel':0,
//     'penny':4
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

    function dictSwap(zebra){
        for (var key in zebra){
            var temp = key
            = key
            key = temp
        }
        return zebra
    }
    
    dictSwap({'A':"ONE",
            'B':"TWO",
            'C':"THREE"})
    console.log(zebra)

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
// 

}