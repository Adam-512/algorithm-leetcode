/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let mp = new Map()
    for (let i = 0; i < nums.length; i++) {
        let parter = target - nums[i]
        if (mp.has(parter)) {
            return [mp.get(parter), i]
        }
        mp.set(nums[i], i)
    }
};
// @lc code=end

