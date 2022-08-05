{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T | undefined | null;
  }

  interface Head<T> extends NodeItem<T> {}

  interface NodeItem<T> {
    index: number;
    value: T;
    next?: NodeItem<T>;
  }

  class StackImpl<T> implements Stack<T> {
    private head: Head<T> | null = null;
    private nodes: { [key in number]: NodeItem<T> } = {};

    get size() {
      if (!this.nodes) return 0;
      return Object.keys(this.nodes).length;
    }
    constructor() {}

    push(value: T): void {
      const nodeItem: NodeItem<T> = {
        index: this.size,
        value,
        next: this.nodes?.[this.size - 1],
      };

      this.nodes[nodeItem.index] = nodeItem;

      this.head = nodeItem;
    }

    pop(): T | undefined | null {
      if (!this.head) return null;
      const result = this.head.value;
      delete this.nodes?.[this.head.index];
      this.head = this.head?.next || null;
      return result;
    }
  }

  // class Stack<T> {
  //   private _data: T[] = [];
  //   get data() {
  //     return this._data;
  //   }

  //   constructor() {}

  //   push(item: T) {
  //     this._data[this._data.length] = item;
  //   }

  //   pop() {
  //     const result = this._data[this._data.length - 1];
  //     this._data.splice(this._data.length - 1);
  //     return result;
  //   }
  // }

  const stack = new StackImpl<string>();

  stack.push("Henry");
  stack.push("Henry2");
  stack.push("Henry3");

  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.size);
}
