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
    let num = nums[i]
    if (mp.has(target - num)) {
      return [i, mp.get(target - num)]
    }
    mp.set(num, i)
  }
};
// @lc code=end

