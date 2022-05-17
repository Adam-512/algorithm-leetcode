/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    function helper(node, p, q) {
        if (node == null || p == node || q == node) {
            return node
        }
        let left = lowestCommonAncestor(node.left, p, q)
        let right = lowestCommonAncestor(node.right, p, q)
        if (left == null) {
            return right
        }
        if (right == null) {
            return left
        }
        return node
    }
    return helper(root, p, q)
};
// @lc code=end

