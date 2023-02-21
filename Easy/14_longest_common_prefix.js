const cases = [
    ["flower", "flow", "flight"],
    ["sd", "ss", "ddd", "ddd"],
]

for (const c of cases) {
    const FinalResult = longestCommonPrefix(c)
    console.log({ aaa: FinalResult })
}

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return ""
    }

    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        console.log({ prefix: prefix, str: strs[i], strs: strs[i].indexOf(prefix) })
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1)
            if (prefix.length === 0) {
                return ""
            }
        }
    }
    return prefix
}

// var longestCommonPrefixd = function (strs) {
//     let longPrefix = []
//     let maxLength = 0

//     let result = ""

//     for (let i = 1; i < 200; i++) {
//         const syms = getSym(strs, i, longPrefix)

//         const prefixes = Object.keys(syms)

//         if (prefixes.length === 0) {
//             break
//         }

//         const groupedKeys = {}

//         for (const key of prefixes) {
//             console.log(syms[key])
//             if (groupedKeys[syms[key]]) {
//                 groupedKeys[syms[key]].push(key)
//             } else {
//                 groupedKeys[syms[key]] = [key]
//             }
//         }

//         console.log({ groupedKeys })

//         const prefixLength = parseInt(Object.keys(groupedKeys).sort()[Object.keys(groupedKeys).length - 1])
//         console.log({ prefixLength })
//         if (!maxLength) {
//             maxLength = prefixLength
//         }

//         if (prefixLength <= maxLength) {
//             break
//         }

//         if (prefixLength === 1) {
//             break
//         }
//         if (prefixLength > 1) {
//             result = longPrefix[0]
//         }
//         longPrefix = groupedKeys[prefixLength]
//     }
//     return result
// }

// function getSym(strs, length, longPrefix) {
//     const allPrefix = {}
//     for (let i = 0; i < strs.length; i++) {
//         const prefix = strs[i].slice(0, length)

//         if (longPrefix.length) {
//             for (const p of longPrefix) {
//                 if (prefix.indexOf(p) === 0) {
//                     addPrefix(allPrefix, prefix)
//                 }
//             }
//         } else {
//             addPrefix(allPrefix, prefix)
//         }
//     }

//     console.log({ allPrefix })

//     return allPrefix
// }

// function addPrefix(obj, prefix) {
//     if (obj.hasOwnProperty(prefix)) {
//         obj[prefix]++
//     } else {
//         obj[prefix] = 1
//     }
// }
