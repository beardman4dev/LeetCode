const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (str) {
    let lastBigNum = 0
    let total = 0

    for (let i = str.length - 1; i >= 0; i--) {
        if (!lastBigNum || lastBigNum <= symbols[str[i]]) {
            lastBigNum = symbols[str[i]]
            total += lastBigNum
        } else {
            total -= symbols[str[i]]
        }
    }
    return total
}


// https://leetcode.com/problems/roman-to-integer/
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
//
// Input: s = "III"
// Output: 3
// Explanation: III = 3.
//
//
// Example 2:
//
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
//
//
// Example 3:
//
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.





// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function (s) {
//     const groups = []

//     let i = 0
//     let j = 0

//     for (i = 0; i < s.length; i = j) {
//         let group = [symbols[s[i]]]
//         for (j = i + 1; j < s.length; j++) {
//             if (symbols[s[i]] === symbols[s[j]]) {
//                 group.push(symbols[s[j]])
//             } else if (symbols[s[i]] > symbols[s[j]]) {
//                 break
//             } else {
//                 group.push(symbols[s[j]])
//                 j++
//                 break
//             }
//         }
//         groups.push(group)
//     }

//     console.log(groups)

//     let scoreTotal = 0

//     for (const group of groups) {
//         let groupScore = 0
//         if (group.length === 1) {
//             scoreTotal += group[0]
//         } else if (group.length > 1) {
//             let first = group[0]
//             groupScore = first
//             for (let i = 1; i < group.length; i++) {
//                 if (group[i] === first) {
//                     groupScore += group[i]
//                 } else if (group[i] > groupScore) {
//                     groupScore = group[i] - groupScore
//                 }
//             }
//             scoreTotal += groupScore
//         }
//     }
//     console.log(scoreTotal)

//     return scoreTotal
// }

// const symbols = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
// }