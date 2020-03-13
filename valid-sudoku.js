/*

https://leetcode.com/problems/valid-sudoku


-----------------------------------------------------------
false-> [
        ["8","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]
------------------------------------------------------------
true -> [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]
------------------------------------------------------------
 
0 -> 2     0 -> 2      0 -> 2
0 -> 2     3 -> 5      6 -> 8
_________ __________ _________
00 01 02 | 03 04 05 | 06 07 08
10 11 12 | 13 14 15 | 16 17 18 
20 21 22 | 23 24 25 | 26 27 28
--------- ---------- ---------

3 -> 5     3 -> 5      3 -> 5  
0 -> 2     3 -> 5      6 -> 8 
_________ __________ _________
30 31 32 | 33 34 35 | 36 37 38
40 41 42 | 43 44 45 | 46 47 48 
50 51 52 | 53 54 55 | 56 57 58
--------- ---------- ---------
6 -> 8     6 -> 8      6 -> 8
0 -> 2     3 -> 5      6 -> 8
_________ __________ _________
60 61 62 | 66 67 65 | 66 67 68
70 71 72 | 73 74 75 | 76 77 78 
80 81 82 | 83 84 85 | 86 87 88
--------- ---------- ---------
*/


let board = [[".",".",".",".",".",".","5",".","."],
             [".",".",".",".",".",".",".",".","."],
             [".",".",".",".",".",".",".",".","."],
             ["9","3",".",".","2",".","4",".","."],
             [".",".","7",".",".",".","3",".","."],
             [".",".",".",".",".",".",".",".","."],
             [".",".",".","3","4",".",".",".","."],
             [".",".",".",".",".","3",".",".","."],
             [".",".",".",".",".","5","2",".","."]
]


let filteredRow = new Array()
let filteredColumn = new Array()

board.forEach((row) => {
    filteredRow.push(row.filter((element) => {
        if (element != '.')
            return parseInt(element)
    }))
})

for(let i=0; i<board.length; i++){
    let column = new Array();
    for(let j=0; j<board.length; j++){
        if(board[j][i] != ".")
            column.push(board[j][i])
    }
    filteredColumn.push(column)
}




function check3x3Box(startRowIndex, endRowIndex, startColumnIndex, endColumnIndex){
    let boxFlatArray = new Array()
    for(let i = startRowIndex; i <= endRowIndex; i++){
        for(let j = startColumnIndex; j <= endColumnIndex; j++){
            if(board[i][j] != "."){
                boxFlatArray.push(board[i][j])
            }
        }
    }
    return checkNoDuplicate(boxFlatArray.sort())
}


let rowUniqueness = filteredRow.every(checkNoDuplicateInArray)
let columnUniqueness = filteredColumn.every(checkNoDuplicateInArray)
let boxUniqueness = check3x3Box(0, 2, 0, 2) && check3x3Box(0, 2, 3, 5) && check3x3Box(0, 2, 6, 8)
&& check3x3Box(3, 5, 0, 2) && check3x3Box(3, 5, 3, 5) && check3x3Box(3, 5, 6, 8)
&& check3x3Box(6, 8, 0, 2) && check3x3Box(6, 8, 3, 5) && check3x3Box(6, 8, 6, 8)

if(rowUniqueness && columnUniqueness && boxUniqueness){
    console.log("Valid board")
}
else {
    console.log("Invalid board")
}

function checkNoDuplicate(arr){
    let result = true
    for(let i = 0; i < arr.length; i++){
        if(i != 0){
            if(arr[i] == arr[i-1]){
                result = false
                break
            }
        }
    }
    return result
}

function checkNoDuplicateInArray(element, index, arr)
{
    let result = true;
    element.sort();
    for(let i=0; i<element.length; i++){
        if(i != 0){
            if(element[i] == element[i-1]){
                result = false
                break
            }
        }
    }
    return result
}