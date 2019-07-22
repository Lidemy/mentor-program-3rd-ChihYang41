class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items[this.items.length] = element;
  }

  pop() {
    return this.items.splice(this.items.length - 1, 1)[0];
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items[this.items.length] = element;
  }

  pop() {
    return this.items.shift();
  }
}

const stack = new Stack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // 5
console.log(stack.pop()); // 10

const queue = new Queue();
queue.push(1);
queue.push(2);
console.log(queue.pop()); // 1
console.log(queue.pop()); // 2
