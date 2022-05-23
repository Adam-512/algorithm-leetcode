/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // let sum = 0
    // for (let i = 1; i < height.length; i++) {
    //     let l_max = 0, r_max = 0;
    //     for (let j = i; j >= 0; j--) {
    //         l_max = Math.max(l_max, height[j])
    //     }
    //     for (let j = i; j < height.length; j++) {
    //         r_max = Math.max(r_max, height[j])
    //     }
    //     sum += (Math.min(l_max, r_max) - height[i])
    // }
    // return sum
    let l_max = 0, r_max = 0;
    let left = 0, right = height.length - 1;
    let res = 0;
    while (left < right) {
        l_max = Math.max(l_max, height[left])
        r_max = Math.max(r_max, height[right])
        if (l_max < r_max) {
            res += (l_max - height[left])
            left++
        }
        else{
            res += (r_max - height[right])
            right--
        }
    }
    return res
};
// @lc code=end

