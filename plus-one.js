/*
    https://leetcode.com/problems/plus-one/

    Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

    The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

    You may assume the integer does not contain any leading zero, except the number 0 itself.

    Example 1:

    Input: [1,2,3]
    Output: [1,2,4]
    Explanation: The array represents the integer 123.

*/

var input = [2,2,2,2]

let lastElement = parseInt(input.slice(-1))

recursiveAdder(lastElement, input.length - 1)


function recursiveAdder(number, index) {
    if (number < 9) {
        input[index] = number + 1
        return
    }
    else {
        if(index < 0){
            input.unshift(1)
            return
        }
        input[index] = 0
        recursiveAdder(input[index - 1], index - 1)
    }
}

console.log(input)