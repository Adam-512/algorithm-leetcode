/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let _nums = [...nums].sort((a, b) => a - b)
  let ans = _nums[0] + _nums[1] + _nums[2]
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1, r = nums.length - 1
    while (l < r) {
      let sum = _nums[i] + _nums[l] + _nums[r]
      if (Math.abs(sum - target) < Math.abs(ans - target)) {
        ans = sum
      }
      if (sum < target) {
        l++
      }
      else if (sum > target) {
        r--
      }
      else {
        return ans
      }
    }
  }
  return ans
};
// @lc code=end

