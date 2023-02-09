/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//同向双指针的 l 一般用于满足条件的左边界
var removeDuplicates = function(nums) {
    let l = 0;
    for(let i=1;i<nums.length;i++){
        if(nums[l] != nums[i]){
            nums[++l] = nums[i]
        }
    }
    return l+1
};
// @lc code=end

