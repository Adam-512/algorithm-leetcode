/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let tb = Array.from({ length: 26 }).fill(0)
    for (let i = 0; i < s.length; i++) {
        tb[s[i].charCodeAt(0) - 97]++
    }
    for (let i = 0; i < s.length; i++) {
        if (tb[s[i].charCodeAt(0) - 97] === 1) {
            return i
        }
    }
    return -1
};
// @lc code=end

