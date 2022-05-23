/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let end = 0, jump = 0, fasten = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        fasten = Math.max(nums[i] + i, fasten)
        console.log(fasten)
        if (end == i) {
            jump++
            end = fasten
        }
    }
    return jump
};
// @lc code=end

