/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let res = []
    let path = []
    function helper(node) {
        if (node == null) {
            return
        }
        if (node.left == null && node.right == null) {
            path.push(node.val)
            res.push(path.join('->'))
            path.pop()
            return
        }
        path.push(node.val)
        helper(node.left)
        helper(node.right)
        path.pop()
    }
    helper(root)
    console.log(res)
    return res
};
// @lc code=end

