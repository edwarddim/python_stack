// HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS
function parensValid(string) {

var count;
var string = "";
    for(var i = 0; i < string.length; i++){
        // you want to keep track of amount of opening and closing parens
        if(string[i] == ")"){
            count++;

            
        }
        if(string[i] == "(" ){
            count++;
        }


    }

}
console.log(parensValid());
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE
// EX. ")))(((" => 

