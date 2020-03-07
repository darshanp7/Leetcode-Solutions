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

1994

1000 + 900 + 90 + 4
  M + CM + XC + IV = MCMXCIV
*/

var n = 58;

var thousands;
var hundreds;
var tens;
var units;

thousands = Math.floor(n/1000);
hundreds = Math.floor((n/100) % 10);
tens = Math.floor((n/10) % 10);
units = n % 10;

console.log("Thousands " + thousands + " Hunderds " + hundreds + " tens " + tens + " units " + units);

var result = "M".repeat(thousands) + EvaluateHundreds() + EvaluateTens() + EvaluateUnits();

console.log("Result " + result);

function EvaluateHundreds() {
    var hString
    if (hundreds == 9) {
        hString = "CM";
    }
    else if (hundreds == 4) {
        hString = "CD";
    }
    else if (hundreds == 5) {
        hString = "D"
    }
    else if (hundreds > 5 && hundreds < 9) {
        hString = "D" + "C".repeat(hundreds - 5);
    }
    else {
        hString = "C".repeat(hundreds);
    }

    return hString
}

function EvaluateTens() {
    var tString
    if (tens == 9) {
        tString = "XC";
    }
    else if (tens == 4) {
        tString = "XL";
    }
    else if (tens == 5) {
        tString = "L"
    }
    else if (tens > 5 && tens < 9) {
        tString = "L" + "X".repeat(tens - 5);
    }
    else {
        tString = "X".repeat(tens);
    }

    return tString
}

function EvaluateUnits() {
    var uString
    if (units == 9) {
        uString = "IX";
    }
    else if (units == 4) {
        uString = "IV";
    }
    else if (units == 5) {
        uString = "V"
    }
    else if (units > 5 && units < 9) {
        uString = "V" + "I".repeat(units - 5);
    }
    else {
        uString = "I".repeat(units);
    }

    return uString
}