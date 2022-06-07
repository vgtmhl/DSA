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
function isBalanced(root) {
    if (root === null) { return true }
    let heightDifference = getHeight(root.left) - getHeight(root.right)

    if (Math.abs(heightDifference) > 1) { return false }
    else { return isBalanced(root.left) && isBalanced(root.right) }
}

function getHeight(root) {
    if (root === null) { return -1 }
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1
}