// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// EX. "Happy New Years" => "HNY"
// NOTE. YOU CAN USE .SPLIT() METHOD
var strName = "Edward Im"
var stringArr = strName.split(" ")
// ["Edward", "Im"]
function acronyms(string) {
    //get an array containing each word
    var arr = string.split(" ");
    var newString = " ";

    for (var i = 0; i < arr.length; i++) {
        newString += arr[i][0];
    }

    console.log(newString);
}
var str = "Rocio John Haldan Fred Alber Sosa Anderson Acevedo";
(acronyms(str))
// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
// NOTE. RETURN A NEW STRING
function stringReverse(string) {
    var arr = "hello"
    for (var i = 0; i > arr.length; i--) {//start at the end of the string and work back

    }
}
stringReverse(string)

function stringReverse2(string) {
    var temp;
    var newString = "";
    for (var i = 0; i < (string.length); i++) {
        newString += string[string.length - 1 - i];
    }
    console.log(newString);
}
stringReverse2("HELLO Does this even work?");
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
function parensValid(string) {

}
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE

function bracesValid(string) {

}


function parValid(arr) {
    var countOpen = 0;
    var countClosed = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "(") {
            countOpen++;
        }
        if (arr[i] == ")") {
            countClosed++;
        }
        if (countOpen == countClosed) {
            return True;
        }
        else {
            return False;
        }
    }
}
console.log(parValid("(())()"));

// WED
function isPalindrome(string) {
    for (var i )

}
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE

function isAnagram(string1, string2) {

}
// HINT: YOU WANT TO USE A OBJECT(DICTIONARY) TO KEEP TRACK OF CHARACTERS AND THEIR FREQUENCY
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE
// WED
function isPalindrome(string) {
    for (var i )

}
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE

function isAnagram(string1, string2) {

}
// HINT: YOU WANT TO USE A OBJECT(DICTIONARY) TO KEEP TRACK OF CHARACTERS AND THEIR FREQUENCY
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE





// THUR
function bookIndex(array) {
    var counter = 0
    // i < array.length. since we're using just less than
    for (var i = 0; i < array.length; i++) {
        while i[0] == 1
    }

}




var arr = [1, 13, 14, 15, 16, 17, 36, 37, 38, 70]

function bookIndex(arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] + 1 == arr[i + 1]) {
            var start = arr[i];
            while (arr[i] + 1 == arr[i + 1]) {
                i++;
            }
            var end = arr[i];
            temp.push(start + "-" + end);
        } else {
            temp.push(arr[i]);
        }
    }
    var newstring = temp.join(',');
    return newstring
}

console.log(bookIndex(arr));

function bIndex(array) {
    var newArray = [];
    var first = "" + array[i] + "-";
    var last = "";
    var checking = true;
    for (var i = 0; i < array.length; i++) {
        if (checking == false) {
            if (array[i] + 1 == array[i + 1]) {
                first = "" + array[i] + "-";
                checking = true;
            }
            else {
                newArray.push("" + array[i] + "")
            }
        }
        first = "" + array[i] + "-";
        while (checking == true) {
            if (array[i] + 1 == array[i + 1]) {
                i++
            }
            if (array[i] + 1 != array[i + 1]) {
                last = "" + array[i] + "";
                newArray.push("" + first + last + "")
                checking = false;
            }
            console.log(newArray)
        }
    }
    return newArray
}
console.log(bIndex([1, 2, 3, 5, 9, 10]))

// GIVEN AN ARRAY OF BOOK PAGE NUMBERS RETURN INDEXED VERSION STRING OF BOOK PAGES
// EX. [1,13,14,15,16,17,36,37,38,70] => ["1", "13-17", "36-38", "70"]

// FRI
function minCoinChange(num) {

}
// GIVEN A NUMBER FIND THE LEAST AMOUNT OF COINS YOU CAN USE TO HAVE THE SAME AMOUNT
// EX. 321 => "12 QUARTERS, 2 DIMES, 1 PENNY"
// EX. 79 => "3 quarteres, 4 pennies"
// {
//     'quarter':3,
//     'dimes':0,
//     'nickel':0,
//     'penny':4
// }

minCoinChange(321)

function invertObj(obj) {
    var denominations = [1, 5, 10, 25] 
}


def give_change(num):
    num2=num
    coin_list = []
    change_given = {}

    if num2 > 25:
        while num2 >= 25:
            coin_list.append('quarter')
            num2 -= 25
    if num2 < 25:
        while num2 >= 10:
            coin_list.append('dime')
            num2 -= 10
    if num2 < 10:
        while num2 >= 5:
            coin_list.append('nickle')
            num2 -= 5
    if num2 < 5:
        while num2 >= 1:
            coin_list.append('penny')
            num2 -= 1
    for char in coin_list:
        if char not in change_given:
            change_given[char] = 1
        else:
            change_given[char] += 1
    return change_given

print(give_change(96))



function minCoinChange(amount) {
    amount = 321; 
    var cost = [1,5,10,25]; // denominations of coins
    var result = [];
    while (amount > 0) {
        var coin = cost.pop(); // 
        var count = Math.floor(amount/coin); 
        amount -= count * coin; 
        if (count) result.push([coin/100, count]); 
    }
    return result;
}
minCoinChange(321)

// 
function minCoinChange(amount) {
    amount = 321; 
    var cost = [1,5,10,25]; // denominations of coins
    var result = [];
    while (amount > 0) {
        var coin = cost.pop(); // 
        var count = Math.floor(amount/coin); 
        amount -= count * coin; 
        if (count) result.push([coin/100, count]); 
    }
    return result;
}
minCoinChange(321)

// 
function minCoinChange(amount) {
    amount = 321; 
    var cost = [1,5,10,25]; // denominations of coins
    var result = [];
    while (amount > 0) {
        var coin = cost.pop(); // 
        var count = Math.floor(amount/coin); 
        amount -= count * coin; 
        if (count) result.push([coin/100, count]); 
    }
    return result;
}
minCoinChange(321)

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