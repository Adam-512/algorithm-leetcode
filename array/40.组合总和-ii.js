/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let tracks = [], sum = 0, res = [];
  candidates.sort((a, b) => a - b)
  function traversal(nums, start, target) {
    if (sum == target) {
      res.push([...tracks])
      return
    }
    if (sum > target) {
      return
    }
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] == nums[i - 1]) {
        continue;
      }
      sum += nums[i]
      tracks.push(nums[i])
      traversal(nums, i + 1, target)
      sum -= nums[i]
      tracks.pop()
    }
  }
  traversal(candidates, 0, target)
  return res;
};
// @lc code=end

