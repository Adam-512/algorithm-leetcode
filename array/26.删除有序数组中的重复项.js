/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let n = nums.length;
    let index = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] != nums[index]) {
            nums[++index] = nums[i];
        }
    }
    return index + 1;
};
// @lc code=end

