/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    var carry = 1; // 我们将初始的 +1 也当做是一个在个位的 carry
    for (var i = digits.length - 1; i > -1; i--) {
        if (carry) {
            var sum = carry + digits[i];
            console.log(sum)
            digits[i] = sum % 10;
            carry = sum > 9 ? 1 : 0; // 每次计算都会更新下一步需要用到的 carry
        }
    }
    if (carry === 1) {
        digits.unshift(1); // 如果carry最后停留在1，说明有需要额外的一个长度 所以我们就在首位增添一个 1
    }
    return digits;
};
// @lc code=end

