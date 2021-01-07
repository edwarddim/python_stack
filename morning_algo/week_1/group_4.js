

// HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS
function parensValid(string) {
    //check ratio > ( needs )
    //for loop? iterate over the array and check that para are paired
    //use booleans? 
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        // ( = +1, ) = -1
        if (string[i] = "(" /* || "[" || "{"*/) {
            count += 1
        }
        else if (string[i] = ")" /* || "]" || "}" */) {
            count += -1
        }
    }
    if (count == 0) {
        console.log("True")
    }
    else {
        console.log("False")
    }
}
console.log(parensValid("I went (to the) mall( and then i ( did this))"))

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
            continue // this makes the for loop continue without breakig the loop
        }
        else { return false }
    }
    return true
}

console.log(isPalindrome("HELLO"))
console.log(isPalindrome("KAYAK"))
console.log(isPalindrome("TACOCAT"))
console.log(isPalindrome("HSKWSHSH"))


// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE

function isAnagram(string1, string2) {
    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; i++) {

        }
    }
    console.log(isAnagram("ATE", "TEA"))
    console.log(isAnagram("LISTEN", "SILENT"))
    console.log(isAnagram("LISTEN", "SILENZ"))
    console.log(isAnagram("DEER", "REDD"))

    // HINT: YOU WANT TO USE A OBJECT(DICTIONARY) TO KEEP TRACK OF CHARACTERS AND THEIR FREQUENCY
    // RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
    // EX. "ATE", "TEA" => TRUE
    // EX. "LISTEN", "SILENT" => TRUE
    // EX. "LISTEN", "SILENZ" => FALSE
    // EX. "DEER", "REDD" => FALSE

    // THUR
    function bookIndex(array) {

        var pages = []
        var working_string = ""
        for (var i = 0; i < array.length; i++) {
            if ((i != array.length - 1) && (array[i] + 1 == array[i + 1])) {
                if (working_string == "") {
                    working_string += array[i]
                }

            } else {
                if (working_string == "") {
                    working_string += array[i]
                    pages.push(working_string)
                    working_string = ""
                } else {
                    working_string += "-" + array[i]
                    pages.push(working_string)
                    working_string = ""
                }
            }
        }
        return pages
    }


    var pages = [1, 13, 14, 15, 16, 17, 36, 37, 38, 70]
    console.log(bookIndex(pages))

// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]



