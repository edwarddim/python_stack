// TUE
// HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS
function parensValid(string) {
  var openPar = {
      '(' : ')'
  }
  var closePar= {
    ')' : true
  }
  for(i = 0; i < string.length; i++){
      if(openPar == closePar){     //
        

          return true
      }
      else{
        return false
      }
  }
}
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE
// EX. ")))(((" => 

function bracesValid(string) {

}
// (),[],{}
// EX. "({})[]" => TRUE
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION

function isPalindrome(string) {
  var word1 = ''
  var word2 = string
  for(i = string.length - 1;i >= 0; i--){
    word1 += string[i];
  }
  if(word1 == word2){
    return true
  }
  else{
    return false
  }
}
console.log(isPalindrome('kayak'))

function isPalindrome(string) {
  for (var i = 0; i < string.length / 2; i++) {
      if (string[i] == string[string.length - 1 - i]) {
          continue
      }
      else {
          return false
      }
  }
  return true
}

console.log(isPalindrome('kayak'))


// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE
// "DAD" => TRUE 
// hello world!!
function isAnagram(string1, string2) {
  if (string1.length != string2.length) {
    return false
  }
  dict = {}
  for (var i = 0; i < string1.length; i++) {
      if (string1[i] in dict) {
            dict [string[i]] += 1;
      }
  } 
}
// HINT: YOU WANT TO USE A OBJECT(DICTIONARY) TO KEEP TRACK OF CHARACTERS AND THEIR FREQUENCY
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE