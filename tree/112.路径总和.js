/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    let sum = 0
    let res = false
    function helper(node) {
        if (node == null) return
        sum += node.val
        if (node.left == null && node.right == null) {
            if (sum == targetSum) {
                res = true
            }
        }
        helper(node.left)
        helper(node.right)
        sum -= node.val
    }
    helper(root)
    return res
};
// @lc code=end

