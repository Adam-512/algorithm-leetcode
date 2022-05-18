/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let res = 0
    function helper(node, isLeft) {
        if (node == null) {
            return
        }
        if (isLeft && node.right == null && node.left == null) {
            res += node.val
            return
        }
        helper(node.left, true)
        helper(node.right, false)
    }
    helper(root, false)
    return res
};
// @lc code=end

