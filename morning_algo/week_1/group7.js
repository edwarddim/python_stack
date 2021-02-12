    let counter = 0
    for (var i = 0; i < string.length; i++) {
      if(string[i] == "(") {
        counter++
      }
      else if (string[i] == ")") {
          counter--
          if (counter < 0) {
              return false
          }
      }
    }
    if (counter === 0) {
        return true
    }
    else {
        return false
    
    }
    // Check if they are open or closed
    // Count open and closed
  }
  
  testStr1 = "()(())";
  testStr2 = "(()()";
  testStr3 = "()()()";
  testStr4 = "())(()";
  testStr5 = ")))(((";


  console.log(parensValid(testStr1), parensValid(testStr2), parensValid(testStr3), parensValid(testStr4), parensValid(testStr5))
  
  function bracesValid(string) {
    let parenCounter = 0
    let bracketCounter = 0
    let curlyCounter = 0

    for (var i = 0; i < string.length; i++) {
      if(string[i] == "(") {
        parenCounter++
      }
      else if (string[i] == ")") {
          parenCounter--
          if (parenCounter < 0) {
              return false
          }
      }
      if(string[i] == "[") {
        bracketCounter++
      }
      else if (string[i] == "]") {
          bracketCounter--
          if (bracketCounter < 0) {
              return false
          }
      }
      if(string[i] == "{") {
        curlyCounter++
      }
      else if (string[i] == "}") {
          curlyCounter--
          if (curlyCounter < 0) {
              return false
          }
      }
    }
    if (parenCounter === 0 && bracketCounter === 0 && curlyCounter === 0 ) {
        return true
    }
    else {
        return false
    
    }
  }

  console.log(bracesValid("({}[)]"))
  // (),[],{}
  // EX. "({})[]" => TRUE
  // TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
  // WILL REQUIRE A STACK IMPLEMENTATION
  // -----------------------------------------------------------------------------------------------//
  // -----------------------------------------------------------------------------------------------//



function isPalindrome(string){
  var emptyStr = ""
  for (var i=string.length; i>=0; i--){
    emptryStr += string[i];
  }
  if (emptyStr == string){
    return true;
  }
  else {
    return false;
  }
}

// console.log(isPalindrome("HELLO"))
// console.log(isPalindrome("KAYAK"))
// console.log(isPalindrome("TACOCAT"))
// console.log(isPalindrome("DAD"))

// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE
// "DAD" => TRUE


function isAnagram(string1, string2) {
  emptyObj = {};
  for (var i=0; i<string1.length; i++){
      if (emptyObj[string1[i]] != undefined){
          emptyObj[string1[i]] += 1;
      }
      else {
          emptyObj[string1[i]] = 1;
      }
  }
  for (var j=0; j<string2.length; i++){
    if (emptyObj[string2[i]] == undefined){
      return false;
    }
    else {
      emptyObj[string2[i]] -= 1;
    }
  }
  
  // console.log(emptyObj);
};

console.log(isAnagram("ATTAETE","TEA"))

// HINT: YOU WANT TO USE A OBJECT(DICTIONARY) TO KEEP TRACK OF CHARACTERS AND THEIR FREQUENCY
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE

function bookIndex(arr) {
  // create return array
  let newArr = [];
  // loop through array
  for (let i = 0; i < arr.length; i++){
    // check if consecutive numbers are found
    if ((arr[i+1] - arr[i]) == 1){
      // create new variable to hold indexed string
      let idxString = " ";
      idxString += arr[i];
      // loop as long as numbers are consecutive to add to idxString
      while ((arr[i+1] - arr[i]) == 1){
        i++;
      }
      // create consecutive string in idxString (num - -num)
      idxString = idxString + "-" + arr[i];
      newArr.push (idxString);
    }
    else {
      newArr.push(arr[i].toString());
    }
  }


}
// var num = 70
// num.toString()
// var string = ""
// string += 40 => "40"
// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN A NEW ARRAY WITH INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//