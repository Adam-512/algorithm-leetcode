/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let memo = new Array(m).fill(0).map(() => new Array(n).fill(0)); //初始dp数组
    for (let i = 0; i < m; i++) {
        //初始化列
        memo[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        //初始化行
        memo[0][j] = 1;
    }
    function dp(x, y) {
        // base case
        if (x == 0 && y == 0) {
            return 1;
        }
        if (x < 0 || y < 0) {
            return 0;
        }
        // 避免冗余计算
        if (memo[x][y] > 0) {
            return memo[x][y];
        }
        // 状态转移方程：
        // 到达 (x, y) 的路径数等于到达 (x - 1, y) 和 (x, y - 1) 路径数之和
        memo[x][y] = dp(x - 1, y) + dp(x, y - 1);
        return memo[x][y];
    }
    return dp(m - 1, n - 1)
};
// @lc code=end

