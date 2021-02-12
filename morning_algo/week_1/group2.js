// // RETURN THE REVERSED STRING OF INPUT
// // EX. "HELLO" => "OLLEH"
// // NOTE. DO NOT USE ANY BUILT IN METHODS
// // NOTE. RETURN A NEW STRING
// function stringReverse(string) {
//     var newString = ""
//     for(var i = string.length - 1; i >= 0; i --){
//         newString += string[i]
//     }
//     return newString
// }
// console.log(stringReverse("HELLO"))

// // WED
// function isPalindrome(string) {
//     // reversed = stringReverse(string);
//     // if (reversed == string) {
//     //     return true
//     // }
//     // else {
//     //     return false
//     // }
    
    
//     let leftIdx = 0;
//     let rightIdx = string.length - 1;
//     while (leftIdx < rightIdx) {
//         if (string[leftIdx] !== string[rightIdx]) {
//             return false
//         };
//         leftIdx++;
//         rightIdx--;
//     };
//     return true


// }
// // RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// // "HELLO" => FALSE
// // "KAYAK" => TRUE
// // "TACOCAT" => TRUE

// function isAnagram(string1, string2) {
//     string1Dict = {}
//     string2Dict = {}

//     if(string1.length !== string2.length) {
//         return false
//     }

//     for (let i = 0; i < string1.length; i++) {
//         string1Dict[string1[i]] = 0;
//         string2Dict[string2[i]] = 0;
//     }

//     for (let i = 0; i < string1.length; i++) {
//         string1Dict[string1[i]] += 1
//         string2Dict[string2[i]] += 1;
//     }

//     for (key in string1Dict) {
//         if (string2Dict[key] == undefined) {
//             return false
//         }
//         if (string1Dict[key] != string2Dict[key]) {
//             return false
//         }
//     }
    
//     return true

// }
// // HINT: YOU WANT TO USE A OBJECT(DICTIONARY) TO KEEP TRACK OF CHARACTERS AND THEIR FREQUENCY
// // RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// // EX. "ATE", "TEA" => TRUE
// // EX. "LISTEN", "SILENT" => TRUE
// // EX. "LISTEN", "SILENZ" => FALSE
// // EX. "DEER", "REDD" => FALSE
// // -----------------------------------------------------------------------------------------------//
// // -----------------------------------------------------------------------------------------------//

// THUR
function bookIndex(arr) {
    newArr = []
    for(i = 0; i < arr.length; i++){

        if((arr[i+1]) - arr[i] == 1){
            temp = ''
            temp += arr[i].toString()
            while(arr[i+1] - arr[i] == 1){
                i++
            }
            temp += '-'
            temp += arr[i]
            newArr.push(temp)
        }
        else{
            newArr.push(arr[i].toString())
        }
    }
    return newArr
}
  // GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
  // EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]
console.log(([1,13,14,15,16,17,36,37,38,70]))

// FRI
function minCoinChange(num) {
    var coins ={
        quarter : 25,
        dime : 10,
        nickle : 5,
        penny : 1
    }
    if(num )
}
// console.log(minCoinChange(321))
// console.log(minCoinChange(79))
// GIVEN A NUMBER FIND THE LEAST AMOUNT OF COINS YOU CAN USE TO HAVE THE SAME AMOUNT
// EX. 321 => "12 QUARTERS, 2 DIMES, 1 PENNY"
// EX. 79 => "3 quarteres, 4 pennies"
// {
//     'quarter':3,
//     'dimes':0,
//     'nickel':0,
//     'penny':4
// }
