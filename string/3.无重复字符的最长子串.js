/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0;
    let mp = new Map();
    let len = 0;
    for (let right = 0; right < s.length; right++) {
        let str = s[right]
        if (mp.has(s[right])) {
            left = Math.max(left, mp.get(str) + 1)
        }
        len = Math.max(len, right - left + 1)
        mp.set(str, right)
    }
    return len;
};
// @lc code=end

