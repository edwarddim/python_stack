Group 2 Members: 

// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD
function acronyms(string){
    var stringArr = string.split(" "); // [ "Live", "From", "Saturday", "Night", "Live"]
    var newString = "";
    for(var i = 0; i < stringArr.length; i++){
        newString += (stringArr[i][0]);
    }
    return newString;
}   

// don't forget to call function

// "I'M CODING AND I KNOW IT"

// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
function stringReverse(string){
    var newString = "";          // sets value for new string
    for(var i = string.length - 1; i >= 0; i--){   // iterates through string starting at last indices.
        newString += string[i];     //
    }
    return newString;
}

function parensValid(string){

}
// can you write this in JS?
def parensValid(string){
    opencount = 0
    closecount = 0    
    for ( var i = 0; i<string.length; i++){  //iterate through the string 
        if (string[i] == "("){               //if string indices of i is equal to the numbers left of parens add the value to openCount
            openCount += 1;                 
        }
        else if (string[i] ==")"){         //if string indices of i is equal to the numbers left of parens add value to closeCount
            closeCount +=1;
        }
        if (closeCount > openCount){       //if closeCount is greater than openCount return false
            return False                   // return false here
        }
        if (openCount !=closeCount){      //if openCount is not equal to closeCount return false
            return False                  // return false here
        }
         else return true;                //return true here if none of the above statements are not true 
    }

}

    
        


    //     var op_count= 0
    //     var ed_count = 0
    //     for (var i=0; i<str.length; i++){
    //     if (ed_count > op_count){
    //         return false
    //     }
    //     if(str[i] == '(' ){
    //         op_count++
    //     }
    //     if(str[i] == ')' ){
    //         ed_count++
    //     }
    //     }
    //     if (op_count==ed_count){
    //     return true
    //     }
    //     return false
    // }
print(parensValid("()(())"))
    var count = 0
for ( var i = 0; i< arr.length; i++){

    }

// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE

function bracesValid(string){

}
// (),[],{}
// EX. "({})[]" => TRUE
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED
function isPalindrome(string){ 
    for(var i = 0; i < string.length/2; i++){
        if(string[i] != string[string.length-1-i]){
            return false;
        }
    }
    return true;
}
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE

function isAnagram(string1, string2){
    for (var i = 0; i < string.length; i++){
        words= {
        
        }

    }
}r



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










