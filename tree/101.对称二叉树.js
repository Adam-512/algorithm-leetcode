/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    function helper(node1, node2) {
        if (node1 == null && node2 == null) return true
        if (node1.val != node2.val) return false
        return helper(node1.left, node2.right) && helper(node1.right, node2.left)
    }
    return helper(root, root)
};
// @lc code=end

