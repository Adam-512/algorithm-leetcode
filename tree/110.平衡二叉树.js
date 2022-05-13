/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
    let balance = false
    function helper(node) {
        if (node == null) {
            return 0
        }
        let left = helper(node.left)
        let right = helper(node.right)

        balance = left - right <= 1

        return Math.max(left, right) + 1
    }
    helper(root)
    return balance;
};
// @lc code=end

