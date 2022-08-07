{
  class NodeQueue {
    constructor(value) {
      this.next = null;
      this.value = value;
    }
  }
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
    enqueue(value) {
      let nodeQueue = new NodeQueue(value);
      if (this.size == 0) {
        this.head = nodeQueue;
      } else {
        this.tail.next = nodeQueue;
      }
      console.log(this.head);
      this.tail = nodeQueue;
      this.size++;
    }
    dequeue() {
      if (this.size == 0) {
        return null;
      }
      let value = this.head.value;
      this.head = this.head.next;
      this.size--;
      if (this.size == 0) {
        this.tail = null;
      }
      return value;
    }
    isEmpty() {
      return this.size == 0;
    }
  }
  const queue = new Queue();
  queue.enqueue("henry1");
  queue.enqueue("henry2");
  queue.enqueue("henry3");
  // console.log(queue.dequeue());
  // console.log(queue.dequeue());
  // console.log(queue.dequeue());
}
