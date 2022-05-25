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
    let n = s.length
    let mp = new Map()
    let start = 0
    let len = 0
    for (let i = 0; i < n; i++) {
        let alpha = s[i]
        if (mp.has(alpha)) {
            start = Math.max(mp.get(alpha) + 1, start)//重复的元素可能相邻，或者在之前，但start左边界需要往前走
        }
        //(i,start)
        len = Math.max(len, i - start + 1)
        mp.set(alpha, i)
    }
    return len
};
// @lc code=end

