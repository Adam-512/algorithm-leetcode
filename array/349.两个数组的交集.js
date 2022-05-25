/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let intersection = new Set()
    if (set1.size > set2.size) {
        for (const v of set2) {
            if (set1.has(v)) {
                intersection.add(v)
            }
        }
    }
    else {
        for (const v of set1) {
            if (set2.has(v)) {
                intersection.add(v)
            }
        }
    }
    return [...intersection]
};
// @lc code=end

