/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let fasten = 0
    for (let i = 0; i < nums.length - 1; i++) {
        fasten = Math.max(fasten, nums[i] + i)
        if (fasten <= i) {
            return false
        }
    }
    return fasten >= nums.length - 1
};
// @lc code=end

