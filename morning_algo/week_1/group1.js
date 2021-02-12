// HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS
function parensValid(string) {
    // ITERATE THROUGH THE STRING
        // CHECK IF THE CHARACTER IS OPEN OR CLOSED PARENS
        // KEEP TRACK OF OPENING AND CLOSING PARENS
}
// 1. IS THERE A CORRESPONDING CLOSING PAREN FOR EACH OPENING PAREN
// 2. ARE THE PAREN BEING OPENED BEFORE BEING CLOSED
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE
// EX. ")))(((" => FALSE
// THUR
function bookIndex(arr) {
    var last = arr[0];
    var counter = 0;
    var newArr = [];
    var string = "";
    for(i=0;i<arr.length;i++){
        if (arr[i] == arr[i+1]-1){
            for(
                last = arr[i];
        }
        else{
            newArr.push(arr[i]);
        }
    }
    //determine if next index is current +1
    //store first incrementation in a variable
    // continue looking for incrementation
    //if incrementation is no longer present, push first value and first value and last value in a string
}
// var num = 70
// num.toString()
// var string = ""
// string += 40 => "40"
// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN A NEW ARRAY WITH INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//
