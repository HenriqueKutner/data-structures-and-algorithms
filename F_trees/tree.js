class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    let currentNode = this.root;
    if (value === currentNode.value) {
      return currentNode;
    }
    if (value > currentNode.value) {
      while (true) {
        if (value === currentNode.value) {
          return currentNode;
        }
        currentNode = currentNode.right;
      }
    } else {
      while (true) {
        if (value === currentNode.value) {
          return currentNode;
        }
        currentNode = currentNode.left;
      }
    }
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(9);
tree.insert(12);
tree.insert(14);
console.log(tree.lookup(10));

console.log(JSON.stringify(traverse(tree.root)));
