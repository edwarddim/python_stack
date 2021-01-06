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