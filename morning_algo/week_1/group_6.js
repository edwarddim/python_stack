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