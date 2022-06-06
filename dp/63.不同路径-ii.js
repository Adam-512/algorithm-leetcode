/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    //obstacleGrid 空位置0，障碍物 1
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    let memo = new Array(m).fill(0).map(() => new Array(n).fill(0)); //初始dp数组

    for (let i = 0; i < m && obstacleGrid[i][0] === 0; ++i) {
        //初始列
        memo[i][0] = 1;
    }

    for (let i = 0; i < n && obstacleGrid[0][i] === 0; ++i) {
        //初始行
        memo[0][i] = 1;
    }

    function dp(grid, x, y) {
        if (x == 0 && y == 0) {
            return 1
        }
        if (x < 0 || y < 0) {
            return 0
        }
        if (grid[x][y] == 1) {
            return 0
        }
        if (memo[x][y] > 0) {
            return memo[x][y]
        }
        memo[x][y] = dp(grid, x - 1, y) + dp(grid, x, y - 1)
        return memo[x][y]
    }
    return dp(obstacleGrid, m - 1, n - 1)
};
// @lc code=end

