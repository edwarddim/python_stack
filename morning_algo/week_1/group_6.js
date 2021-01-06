// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// EX. "Happy New Years" => "HNY"
// NOTE. YOU CAN USE .SPLIT() METHOD
var strName = "Edward Im"
var stringArr = strName.split(" ")
// ["Edward", "Im"]
function acronyms(string) {
    var string = string.split(" ")

    for (i < 0; i < string.length / 2; i++) {
        if 
    }

    return stringArr;


    // RETURN THE REVERSED STRING OF INPUT
    // EX. "HELLO" => "OLLEH"
    // NOTE. DO NOT USE ANY BUILT IN METHODS
    // NOTE. RETURN A NEW STRING
    function stringReverse(string) {

    }
    // -----------------------------------------------------------------------------------------------//
    // -----------------------------------------------------------------------------------------------//

    // TUE
    // HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS
    function parensValid(string) {
        counter = 0
        for (i = 0; i < string.length; i++) {
            if (string[i] === "(") {
                counter++;
            }
            if (string[i] === ")") {
                counter--;
            }
            if (counter < 0) {
                return false;
            }
        }
        if (counter == !0) {
            return false;
        }
        else {
            return true;
        }
    }
    console.log(parensValid("())(()"))

    // RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
    // EX. "()(())" => TRUE
    // EX. "(()()" => FALSE
    // EX. "()()()" => TRUE
    // EX. "())(()" => FALSE

    function bracesValid(string) {
        counter = 0
        for (i = 0; i < string.length; i++) {
            if (string[i] === "(") {
                counter++;
            }
            else if (string[i] === ")") {
                counter--;
            }
            if (string[i] === "[") {
                counter++;
            }
            else if (string[i] === "]") {
                counter--;
            }
            if (string[i] === "{") {
                counter++;
            }
            else if (string[i] === "}") {
                counter--;
            }
            if (counter < 0) {
                return false;
            }
        }
        if (counter == !0) {
            return false;
        }
        else {
            return true;
        }
    }
    console.log(bracesValid("({})[]"))
    // (),[],{}
    // EX. "({})[]" => TRUE
    // TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
    // WILL REQUIRE A STACK IMPLEMENTATION

    // -----------------------------------------------------------------------------------------------//
    // -----------------------------------------------------------------------------------------------//

    // WED
    // function isPalindrome(string) {
    //     word length = original.length()
    //     for (word i = length - 1; i >= 0; i--)
    //     reverse = reverse + original.char(i)
    // }

    function isPalindrome(string) {
        for (i = 0; i < string.length / 2; i++) {
            if (string[i] = string.length - 1) {
                return true;
            }
            else {
                return false;
                isPalindrome("hello")
                // console.log(isPalindrome("HELLO"))
            }
        }
    }

    function isPalindrome(string) {
        for (var i = string.length; i > 0; i--) {
            // string.length - 1 - i => index on the right
            if (string[i] == string.charAt(string.length) - 1) {
                return ("True");
            }
            else {
            }
        }
        return ("True")
    }
    isPalindrome("hello")

    // RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
    // "HELLO" => FALSE
    // "KAYAK" => TRUE
    // "TACOCAT" => TRUE

    function isAnagram(string1, string2) {
        var string1 = [TEA]
        var string2 = [EAT]
        var checker = {
            "": "",
            "": "",
            "": ""
        }
        for (var char of string) {
            if (char == "" || char == "" || char == "") {
                string.push(char)
            }
            else {
                if (checker[string[string.length - 1]] == char) {
                    string.pop()
                }
                else {
                    return false
                }
            }
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