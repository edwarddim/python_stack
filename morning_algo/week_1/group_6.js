// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD

function acronyms(string){
    // 1. Declare new variable of new string 
    var new_str = ""

    // 2. Split the given string into array of separate strings 
    var stringArr = string.split(" ");

    // 3. Create a for loop to iterate through the new array of separate strings
    for(var i=0; i < stringArr.length; i++){

        // 4. Concatenate the first letter of each word in the array into the new_str string 
        new_str += stringArr[i][0];
    }

    // 5. Return the new string.
    return new_str;
    
}

// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS

function stringReverse(string){
    // 1. Declare new variable for new string.          
     var new_word = "";
     
     // 2. Create a reversed for loop to reverse the old str and it to new_word
     for (let i=string.length -1; i>=0; i--) {

         // 3. Concatenate the letters into the new_word variable 
         new_word += string[i];
     }
     

    // 4. Return new string
    return new_word
    
}


// TUE
function parensValid(string){
    // interate through the string
    // if number of left and right parenths != return false
    // if right parenths comes before a left parenths return false
    // else return true
    count = 0;
    for(var i = 0; i < string.length; i++){
        if(string[i] == "("){
            count++;
        } else if(string[i] == ")"){
            count--;
        }
        if(count < 0){
            return false
        }
    }
    if(count != 0){
        return false;
    }
    return true;
}
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()( () )" => TRUE
// EX. "( ()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE

function bracesValid(string){
    parensCount = 0;
    squareCount = 0;
    curlyCount = 0;
    for(var i = 0; i < string.length; i++){
        if(string[i] == "("){
            parensCount++;
        } else if(string[i] == "["){
            squareCount++;
        } else if(string[i] == "{"){
            curlyCount++;
        } else if(string[i] == ")"){
            parensCount--;
        } else if(string[i] == "]"){
            squareCount--;
        } else if(string[i] == "}"){
            curlyCount--;
        }
        if(parensCount < 0 || squareCount < 0 || curlyCount < 0){
            return false;
        }
    }
    if(parensCount != 0 || squareCount != 0 || curlyCount != 0){
        return false;
    }
    return true;
}

console.log(bracesValid("(),[],}{}"));// returns false
// (),[],{}
// EX. "({})[]" => TRUE
// EX. " (}()[]"
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//