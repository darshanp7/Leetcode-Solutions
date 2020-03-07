/*

https://leetcode.com/problems/integer-to-roman

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10)
X can be placed before L (50) and C (100)
C can be placed before D (500) and M (1000)

MCMXCIV
(M) 1000 + (CM) 900 + (XC) 90 + (IV) 4 = 1994

LVIII

(L) 50 + (V) 5 + (I) 1 + (I) 1 + (I) 1 = 58
*/

var roman = "MCMXCIV"; // 1994

var romanArray = roman.split(""); // Convert the Roman string to Array
var result = 0;
var skipNextSymbol = false;

console.log("romanArray Length " + romanArray.length);
for (var i = 0; i < romanArray.length; i++) {
        var processedValue = processSymbol(romanArray[i], romanArray[i + 1]);
        result += processedValue;
        if(skipNextSymbol) i++;
        skipNextSymbol = false;
}

console.log("Value " + result);

function processSymbol(sym, nextSym) {
    var value;
    switch (sym) {
        case "I": value = processI(nextSym, value); break;
        case "X": value = processX(nextSym, value); break;
        case "C": value = processC(nextSym, value); break;
        case "L": value = 50; break;
        case "V": value = 5; break;
        case "M": value = 1000; break;
        case "D": value = 500; break;
    }
    console.log("returning value for " + sym + " is " + value)
    return value;
}

function processC(nextSym, value) {
    if (nextSym == "D") {
        value = 400;
        skipNextSymbol = true;
    }
    else if (nextSym == "M") {
        value = 900;
        skipNextSymbol = true;
    }
    else {
        value = 100;
    }
    return value;
}

function processX(nextSym, value) {
    if (nextSym == "L") {
        value = 40;
        skipNextSymbol = true;
    }
    else if (nextSym == "C") {
        value = 90;
        skipNextSymbol = true;
    }
    else {
        value = 10;
    }
    return value;
}

function processI(nextSym, value) {
    if (nextSym == "V") {
        value = 4;
        skipNextSymbol = true;
    }
    else if (nextSym == "X") {
        value = 9;
        skipNextSymbol = true;
    }
    else {
        value = 1;
    }
    return value;
}
