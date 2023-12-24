const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.rootElement = null;
  }

  root() {
    return this.rootElement;
  }

  add(data) {
    if (this.rootElement === null) {
      this.rootElement = new Node(data);
      return; // для пустого дерева
    }

    let currentElement = this.rootElement;
    while (true) {
      if (data < currentElement.data) {
        // left
        if (currentElement.left === null) {
          currentElement.left = new Node(data);
          return;
        } else {
          currentElement = currentElement.left;
        }
      } else if (data > currentElement.data) {
        // right
        if (currentElement.right === null) {
          currentElement.right = new Node(data);
          return;
        } else {
          currentElement = currentElement.right;
        }
      }
    }
  }


  has(data) {

    let currentElement = this.rootElement;
    while (true) {

      if (currentElement === null) {
        return false;
      }

      if (data < currentElement.data) {
        currentElement = currentElement.left;
      } else if (data > currentElement.data) {
        currentElement = currentElement.right;
      } else if (data === currentElement.data) {
        return true;
      }

    }

  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let currentElement = this.rootElement;
    while(currentElement.left !== null){
        currentElement = currentElement.left;
    }
    return currentElement.data;
}

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  print(node = this.rootElement, level = 0) {
    // for debug
    if (!node) {
      return;
    }

    this.print(node.right, level + 1);

    console.log(`${" ".repeat(level * 4)}${node.data}`);

    this.print(node.left, level + 1);
  }

}

module.exports = {
  BinarySearchTree
};