/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const test = ["()", "{}", "[]"]

    if (typeof s !== "string" || s.length === 0) {
        return false
    }
    const pairs = s.match(/.{1,2}/g)
    
    for (const pair of pairs) {
        if (!test.includes(pair)) {
            return false
        }
    }
    return true
}

const cases = ["()", "(){}[]", "(["]

for (const c of cases) {
    console.log(c, isValid(c))
}
