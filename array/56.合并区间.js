/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length < 2) {
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);//按照起始位置排序
    let result = [];
    result.push(intervals[0])
    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i]
        let last = result[result.length - 1]
        if (last[1] >= curr[0]) {
            last[1] = Math.max(last[1], curr[1])
        }
        else {
            result.push(curr)
        }
    }
    return result;
};
// @lc code=end

