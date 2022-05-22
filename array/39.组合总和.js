/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let tracks = []
  let sum = 0
  let res = []

  function traversal(nums, start, target) {
    if (sum == target) {
      res.push([...tracks])
      return
    }
    if (sum > target) {
      return
    }
    for (let i = start; i < nums.length; i++) {
      tracks.push(nums[i])
      sum += nums[i]
      traversal(nums, i, target)
      sum -= nums[i]
      tracks.pop()
    }
  }
  traversal(candidates, 0, target)
  return res
};
// @lc code=end

