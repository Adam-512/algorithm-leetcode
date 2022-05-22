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
  if (nums.length == 0) return []
  let res = []
  let _nums = [...nums].sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 1; i++) {
    let l = i + 1, r = nums.length - 1
    if (_nums[i] > 0) break
    if (i > 0 && _nums[i] == _nums[i - 1]) continue
    while (l < r) {
      let sum = _nums[i] + _nums[l] + _nums[r]
      if (sum < 0) {
        while (l < r && _nums[l] == _nums[++l]) { }
      }
      else if (sum > 0) {
        while (l < r && _nums[r] == _nums[--r]) { }
      }
      else {
        res.push([_nums[i], _nums[l], _nums[r]])
        while (l < r && _nums[l] == _nums[++l]) { }
        while (l < r && _nums[r] == _nums[--r]) { }
      }
    }
  }
  return res
};
// @lc code=end

