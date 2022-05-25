/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let pub = strs[0]
    for (let i = 1; i < strs.length; i++) {
        let index = 0
        for (let j = 0; j < strs[i].length; j++) {
            if (pub[j] == strs[i][j]) {
                index++
            }
            else {
                break
            }
        }
        pub = pub.slice(0, index)
    }
    return pub
};
// @lc code=end

