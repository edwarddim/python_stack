function isPalindrome(string) {
    for (var i =0;i<string.length/2;i++){
        if (string[i]!=string[string.length-(i+1)]){
            return false
        }
    }
    return true
    

}
console.log(isPalindrome("Hello"));
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE
// "DAD" => TRUE

function isAnagram(string1, string2) {
    var object1={}
    var object2={}
    for (i of string1){
        if (object1[i]>0) {object1[i]++}
        else{object1[i]=1}
    }
    console.log(object1)
    for (i of string2){
        if (object2[i]>0) {object2[i]++}
        else{object2[i]=1}
    }
    console.log(object2)

    for (i of string1){
        if (object1[i]!=object2[i]){ return false }
    }
    for (i of string2){
        if (object1[i]!=object2[i]){ return false }
    }
    return true
}
console.log(isAnagram('ATE','TEA'))
// HINT: YOU WANT TO USE A OBJECT(DICTIONARY) TO KEEP TRACK OF CHARACTERS AND THEIR FREQUENCY
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//