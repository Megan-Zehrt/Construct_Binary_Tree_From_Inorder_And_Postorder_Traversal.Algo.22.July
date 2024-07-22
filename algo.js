// 106. Construct Binary Tree from Inorder and Postorder Traversal



//  Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.









/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    
    if(!postorder) return []

    let i = inorder.length-1
    let p = postorder.length-1

    function build(stop){

        if(inorder[i] != stop){
            let root = new TreeNode(postorder[p--])
            root.right = build(root.val)

            i--

            root.left = build(stop)
            return root
        }

        return null
    }

    return build()
};