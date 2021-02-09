function stringReverse(string) {
    newString = ""
    for (var i = string.length -1; 1 >= 0; i--) {
        newString += string[i]
    }
    return newString
}
console.log(stringReverse("HELLO"))