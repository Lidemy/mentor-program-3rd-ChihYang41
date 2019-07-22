class Deque {
  constructor() {
    this.items = [];
  }

  // 元素放到陣列最後面
  push(element) {
    this.items[this.items.length] = element;
  }

  // 元素放到陣列最前面
  inject(element) {
    this.items.unshift(element);
  }

  // 第一個元素被丟出來
  pop() {
    return this.items.shift();
  }

  // 最後一個元素被丟出來
  eject() {
    return this.items.splice(this.items.length - 1, 1)[0];
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  push(element, priority) {
    const queueElement = { element, priority };
    // 判斷陣列是否為空，空的話直接放進去
    if (this.items.length === 0) {
      this.items[this.items.length] = queueElement;
    } else {
      // 不管三七二十一，先丟進去再用 sort 排序
      this.items[this.items.length] = queueElement;
      this.items.sort((a, b) => a.priority - b.priority);
    }
  }

  pop() {
    return this.items.shift();
  }
}

const deque = new Deque();
deque.push(1);
deque.push(2);
deque.inject(3);
deque.inject(4);
console.log(deque.pop()); // 4
console.log(deque.eject()); // 2
console.log(deque.pop()); // 3
console.log(deque.pop()); // 1

const priorityQueue = new PriorityQueue();
priorityQueue.push('b', 2);
priorityQueue.push('a', 1);
priorityQueue.push('d', 4);
priorityQueue.push('c', 3);
console.log(priorityQueue.pop()); // { element: "a", priority: 1}
console.log(priorityQueue.pop()); // { element: "b", priority: 2}
console.log(priorityQueue.pop()); // { element: "c", priority: 3}
console.log(priorityQueue.pop()); // { element: "d", priority: 4}
