const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.head = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let newElement = new ListNode(value);
    if(this.head === null){
      this.head = newElement;
    }else{

      let currentElement = this.head;
      while(currentElement.next !== null){
        currentElement = currentElement.next;
      }
      currentElement.next = newElement;
    }
    // debugger;
  }

  dequeue() {
    const headValue = this.head.value;
    this.head = this.head.next;
    return headValue;
  }
}

module.exports = {
  Queue
};
