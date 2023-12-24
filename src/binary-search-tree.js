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

  hasOneChildren() {
      return (this.left === null && this.right !== null) || (this.left !== null && this.right === null);
  }

  getChildren() {
      if (this.left !== null) {
          return this.left;
      } else if (this.right !== null) {
          return this.right;
      }
  }

  hasZeroChildren() {
      return this.left === null && this.right === null;
  }
}

class BinarySearchTree {

  constructor() {
    this.rootElement = null;
    this.arrayDebugger = [];
  }

  root() {
    return this.rootElement;
  }

  add(data) {

    this.arrayDebugger.push(data);

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

  find(data) {
    let currentElement = this.rootElement;
    while (true) {

      if (currentElement === null) {
        return null;
      }

      if (data < currentElement.data) {
        currentElement = currentElement.left;
      } else if (data > currentElement.data) {
        currentElement = currentElement.right;
      } else if (data === currentElement.data) {
        return currentElement;
      }

    }
  }

  findParent(data) {
    let currentElement = this.rootElement;
    let parentElement = null;
    while (true) {

        if (currentElement === null) {
            return null;
        }

        if (data < currentElement.data) {
            parentElement = currentElement;

            currentElement = currentElement.left;

        } else if (data > currentElement.data) {
            parentElement = currentElement;

            currentElement = currentElement.right;
        } else if (data === currentElement.data) {

            return parentElement;
        }

    }
}

  remove(data) {
    let currentElement = this.find(data);
    let parentElement = this.findParent(data);

    if (currentElement.hasOneChildren()) {

        // debugger;
        // В родительском элементе left или right устанавливаем содержимое дочернего элемента
        if (parentElement.left === currentElement) {
            parentElement.left = currentElement.getChildren();
        } else if (parentElement.right === currentElement) {
            parentElement.right = currentElement.getChildren();
        }

        currentElement = currentElement.getChildren();
    } else if (currentElement.hasZeroChildren()) {
        // В родительском элементе left или right устанавливаем null
        if (parentElement.left === currentElement) {
            parentElement.left = null;
        } else if (parentElement.right === currentElement) {
            parentElement.right = null;
        }
    } else {
        // 2 дочерних элемента
        // Находим и удаляем максимальный элемент левого поддерева и
        // используем его значение в качестве корневого или промежуточного узла


        let maxLeft = this.maxElement(currentElement.left);
        const newData = maxLeft.data;
        this.remove(maxLeft.data);
        currentElement.data =  newData;
    }
}

  min() {
    // console.debug(this.arrayDebugger);
    let currentElement = this.rootElement;
    while (currentElement.left !== null) {
      currentElement = currentElement.left;
    }
    return currentElement.data;
  }

  max() {
    // console.debug(this.arrayDebugger);
    let currentElement = this.rootElement;
    while (currentElement.right !== null) {
      currentElement = currentElement.right;
    }
    return currentElement.data;
  }

  maxElement(startElement = undefined){
    let currentElement = this.rootElement;

    if(startElement !== undefined){
        currentElement = startElement;
    }

    while (currentElement.right !== null) {
        currentElement = currentElement.right;
    }
    return currentElement;
}

  print(currentElement = this.rootElement, level = 0) {
    // for debug
    if (!currentElement) {
      return;
    }

    this.print(currentElement.right, level + 1);

    console.log(`${" ".repeat(level * 4)}${currentElement.data}`);

    this.print(currentElement.left, level + 1);
  }

}

module.exports = {
  BinarySearchTree
};