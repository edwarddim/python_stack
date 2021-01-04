//TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// EX. "Happy New Years" => "HNY"
// NOTE. YOU CAN USE .SPLIT() METHOD
// var strName = "Edward Im"
// var stringArr = strName.split(" ")
// ["Edward", "Im"]


function acronyms(string){
    var stringArr = string.split(" ");
    console.log(stringArr)
    var newString = "";
    for(var i = 0; i < stringArr.length; i++){
        newString += stringArr[i][0]
    }
    return newString
}
console.log(acronyms("Live From Saturday Night Live"))


// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
// NOTE. RETURN A NEW STRING
function stringReverse(string){