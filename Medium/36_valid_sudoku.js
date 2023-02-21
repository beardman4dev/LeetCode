/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const groups = {}
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            const cX = Math.floor(x / 3)
            const cY = Math.floor(y / 3)

            pushInGroup(groups, `c_${cX}_${cY}`, board[x][y])
            pushInGroup(groups, `h_${x}`, board[x][y])
            pushInGroup(groups, `v_${x}`, board[y][x])
        }
    }
    for (const groupName of Object.keys(groups)) {
        console.log(groupName)
        if (!isValidGroup(groups[groupName])) {
            return false
        }
    }
    return true
}

function pushInGroup(groups, groupName, value) {
    if (groups.hasOwnProperty(groupName)) {
        groups[groupName].push(value)
    } else {
        groups[groupName] = [value]
    }
}

function isValidGroup(group) {
    const clearGroup = group.filter((el) => el !== ".")
    console.log(clearGroup)
    if (clearGroup.length && clearGroup.some((el, index, array) => array.indexOf(el) !== index)) {
        return false
    }
    return true
}

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.



// const boardTrue = [
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ]

// const boardFalse = [
//     ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ]

// const boardTest = [
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ]

// const boardTest2 = [
//     [".", ".", "4", ".", ".", ".", "6", "3", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//     ["5", ".", ".", ".", ".", ".", ".", "9", "."],
//     [".", ".", ".", "5", "6", ".", ".", ".", "."],
//     ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
//     [".", ".", ".", "7", ".", ".", ".", ".", "."],
//     [".", ".", ".", "5", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
// ]

// //console.log('true', isValidSudoku(boardTrue))
// //console.log('false', isValidSudoku(boardFalse))
// // console.log('test', isValidSudoku(boardTest))
// console.log("test2", isValidSudoku(boardTest2))
