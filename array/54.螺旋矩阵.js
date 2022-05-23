/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let res = []
    let m = matrix.length, n = matrix[0].length;
    let upper_bound = 0, lower_bound = m - 1;
    let left_bound = 0, right_bound = n - 1;
    while (res.length < m * n) {
        //顶部从左往右
        if (upper_bound <= lower_bound) {
            for (let i = left_bound; i <= right_bound; i++) {
                res.push(matrix[upper_bound][i])
            }
            upper_bound++
        }
        //右边从上往下
        if (left_bound <= right_bound) {
            for (let i = upper_bound; i <= lower_bound; i++) {
                res.push(matrix[i][right_bound])
            }
            right_bound--
        }
        //底部从右往左
        if (upper_bound <= lower_bound) {
            for (let i = right_bound; i >= left_bound; i--) {
                res.push(matrix[lower_bound][i])
            }
            lower_bound--
        }
        //左边从下往上
        if (left_bound <= right_bound) {
            for (let i = lower_bound; i >= upper_bound; i--) {
                res.push(matrix[i][left_bound])
            }
            left_bound++
        }
    }
    return res;
};
// @lc code=end

