/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// function left_bound;  function right_bound
// 统一使用两端闭区间，需要判断越界条件
var searchRange = function (nums, target) {
    function left_bound() {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = parseInt(left + (right - left) / 2)
            if (nums[mid] == target) {
                right = mid - 1
            }
            else if (nums[mid] < target) {
                left = mid + 1
            }
            else if (nums[mid] > target) {
                right = mid - 1
            }
        }
        if (left == nums.length) return -1
        return nums[left] == target ? left : -1
    }
    function right_bound() {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = parseInt(left + (right - left) / 2)
            if (nums[mid] == target) {
                left = mid + 1
            }
            else if (nums[mid] < target) {
                left = mid + 1
            }
            else if (nums[mid] > target) {
                right = mid - 1
            }
        }
        if (right < 0) return -1
        return nums[right] == target ? right : -1
    }

    return [left_bound(), right_bound()]
};
// @lc code=end

