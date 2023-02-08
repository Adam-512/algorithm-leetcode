/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    let _nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < _nums.length; i++) {
        let l = i + 1, r = _nums.length - 1;
        if (_nums[i] > 0) break;
        if (i > 0 && _nums[i] == _nums[i - 1]) continue
        while (l < r) {
            let sum = _nums[i] + _nums[l] + _nums[r]
            if (sum < 0) {
                l++
            }
            else if (sum > 0) {
                r--
            }
            else {
                res.push([_nums[i], _nums[l], _nums[r]])
                while (l < r && _nums[l] == _nums[l + 1]) { l++ }
                while (l < r && _nums[r] == _nums[r - 1]) { r-- }
                l++
                r--
            }
        }
    }
    return res
};
// @lc code=end

