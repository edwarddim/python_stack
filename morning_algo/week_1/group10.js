function stringReverse(string) {
    let reversedString=''
    for (let i = string.length-1; i>=0; i--){
        reversedString += string[i];
    }
    return reversedString
}
console.log(stringReverse("Hello"))


//Create an empty string to concat
//Iterate through each character in string in reverse
// concat each character to the return
//return the answer