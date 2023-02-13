/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;//
    let pos = -1
    while (left <= right) {
        let mid = parseInt(left + (right - left) / 2) //注意
        if (nums[mid] < target) {
            left = mid + 1 //
        }
        else if (nums[mid] > target) {
            right = mid - 1
        }
        else if (nums[mid] == target) {
            pos = mid //
            break
        }
    }
    return pos
};