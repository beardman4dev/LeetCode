/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let total = 0
    const merged = [].concat(nums1, nums2).sort((a, b) => {
        if (a === b) {
            return 0
        } else if (a > b) {
            return 1
        }
        return -1
    })

    if (merged.length % 2 === 0) {
        const center = merged.length / 2
        total = (merged[center - 1] + merged[center]) / 2
    } else {
        const center = merged.length / 2
        total = merged[Math.floor(center)]
    }

    return total
}

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
