class Node {
    constructor(data) {
        this.data = data
        this.right = null
        this.left = null
    }
}
class Tree {
    constructor() {
        this.root = null
    }
    insert(data) {
        let node = new Node(data)
        if (this.root == null) {
            this.root = node
        }
        else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        if (node.data < root.data) {
            if (root.left == null) {
                root.left = node
            }
            else {
                this.insertNode(root.left, node)
            }
        }
        else {
            if (root.right == null) {
                root.right = node
            }
            else {
                this.insertNode(root.right, node)
            }
        }
    }
}

module.exports.Tree = Tree
module.exports.Node = Node