/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start++], arr[end--]] = [arr[end], arr[start]]
        }
    }
    k %= nums.length
    nums.reverse()
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
    return nums
};
// @lc code=end

