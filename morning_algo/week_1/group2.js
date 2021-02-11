// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
// NOTE. RETURN A NEW STRING
function stringReverse(string) {
    var newString = ""
    for(var i = string.length - 1; i >= 0; i --){
        newString += string[i]
    }
    return newString
}
console.log(stringReverse("HELLO"))

// WED
function isPalindrome(string) {
    // reversed = stringReverse(string);
    // if (reversed == string) {
    //     return true
    // }
    // else {
    //     return false
    // }
    
    
    let leftIdx = 0;
    let rightIdx = string.length - 1;
    while (leftIdx < rightIdx) {
        if (string[leftIdx] !== string[rightIdx]) {
            return false
        };
        leftIdx++;
        rightIdx--;
    };
    return true


}
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE

function isAnagram(string1, string2) {
    string1Dict = {}
    string2Dict = {}

    if(string1.length !== string2.length) {
        return false
    }

    for (let i = 0; i < string1.length; i++) {
        string1Dict[string1[i]] = 0;
        string2Dict[string2[i]] = 0;
    }

    for (let i = 0; i < string1.length; i++) {
        string1Dict[string1[i]] += 1
        string2Dict[string2[i]] += 1;
    }

    for (key in string1Dict) {
        if (string2Dict[key] == undefined) {
            return false
        }
        if (string1Dict[key] != string2Dict[key]) {
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
