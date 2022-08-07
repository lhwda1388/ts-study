{
  interface Queue<T> {
    readonly size: number;
    enqueue(value: T): void;
    dequeue(): T;
    peek(): T;
  }

  // 불변성 유지 하기위해 readonly
  type QueueNode<T> = {
    readonly value: T;
    next?: QueueNode<T>;
  };

  class QueueImpl<T> implements Queue<T> {
    private _size: number = 0;
    private front?: QueueNode<T>;
    private rear?: QueueNode<T>;

    get size() {
      return this._size;
    }

    constructor(private capacity: number) {}

    enqueue(value: T): void {
      if (this.capacity === this._size) {
        throw new Error("Queue is full");
      }
      const node: QueueNode<T> = {
        value,
      };
      console.log("node : ", node);
      if (this._size === 0) {
        this.front = node;
      } else {
        if (this.rear) this.rear.next = node;
      }

      this.rear = node;

      this._size++;
    }

    dequeue(): T {
      if (this.front == null) {
        throw new Error("Queue is empty");
      }
      const node = this.front;
      this.front = node.next;
      if (this.front == null) {
        this.rear = this.front;
      }
      this._size--;
      return node.value;
    }

    peek(): T {
      if (this.front == null) {
        throw new Error("Queue is empty");
      }
      return this.front.value;
    }
  }

  const queue = new QueueImpl<string>(2);

  queue.enqueue("henry1");
  queue.enqueue("henry2");
  queue.enqueue("henry3");
  console.log(queue.dequeue());
  console.log("peek", queue.peek());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
}
