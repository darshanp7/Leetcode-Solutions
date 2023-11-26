# Leetcode-Solutions
My Solutions to Leetcode problems

Link to Problems Solved:

1) https://leetcode.com/problems/palindrome-number
2) https://leetcode.com/problems/integer-to-roman
3) https://leetcode.com/problems/roman-to-integer
4) https://leetcode.com/problems/valid-parentheses
5) https://leetcode.com/problems/valid-sudoku


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
