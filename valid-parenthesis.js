/*
https://leetcode.com/problems/valid-parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
----------------------------------------------------------------------------------------------------------------------
    "()[]{}"
    "([)]"
*/



function isValid() {

    var paren = "{]}"

    var parenthesisStack = new Array();
    var parenthesisMap = new Map();

    parenthesisMap.set(')', '(')
    parenthesisMap.set('}', '{')
    parenthesisMap.set(']', '[')
    
    var pArray = paren.split("")
    
    var result = false;
     
    if(pArray[0] == ']' || pArray[0] == '}' || pArray == ')')
        return false;

    for(var i=0; i < pArray.length; i++){
        if(pArray[i] == '(' || pArray[i] == '{' || pArray[i] == '['){
            parenthesisStack.push(pArray[i]);
        }
        else if(pArray[i] == ')' || pArray[i] == '}' || pArray[i] == ']'){
            if(parenthesisMap.get(pArray[i]) == parenthesisStack[parenthesisStack.length - 1]) {
                parenthesisStack.pop()  
            }
            else{
                parenthesisStack.push(pArray[i])
            }
        }
    }

    parenthesisStack.length > 0 ? result = false : result = true;

    return result;
}

console.log("Result " + isValid());