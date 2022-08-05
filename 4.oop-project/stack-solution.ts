{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T | undefined | null;
    peek(): T | undefined | null;
  }

  // 불변성 유지 하기위해 readonly
  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;
    get size() {
      return this._size;
    }
    constructor(private capacity: number) {}

    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error("Stack is full");
      }
      const node: StackNode<T> = {
        value,
        next: this.head,
      };
      this.head = node;
      this._size++;
    }
    pop(): T {
      if (this.head == null) {
        throw new Error("Stack is empty!");
      }
      const node = this.head; // 제거하고자 하는 타겟
      this.head = node.next;
      this._size--;
      return node.value;
    }

    peek(): T {
      if (this.head == null) {
        throw new Error("Stack is empty!");
      }
      return this.head.value;
    }
  }

  const stack = new StackImpl<string>(2);
  stack.push("Henry");
  stack.push("Henry2");
  console.log(stack.peek());

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
