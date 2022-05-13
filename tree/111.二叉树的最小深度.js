/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
    let depth = 0
    let stack = []
    if (root != null) {
        stack.push(root)
        depth = 1
    }
    while (stack.length > 0) {
        let len = stack.length
        for (let i = 0; i < len; i++) {
            let node = stack.pop()
            if (node == null) {
                return depth
            }
            if (node.left == null && node.right == null) {
                return depth
            }
            if (node.left) stack.unshift(node.left)
            if (node.right) stack.unshift(node.right)
        }
        depth++
    }
    return depth
};
// @lc code=end

