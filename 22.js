/** @format */
// 編號：CANDY-022
// 程式語言：JavaScript
// 題目：實作 Queue 資料結構

class Queue {
  constructor() {
    //我定義一個空間儲存
    this.queue = [];
  }
  enqueue(item) {
    //enqueue調用push方法來實現佇列，並更新長度
    if (item !== undefined) {
      this.queue.push(item);
      this.length = this.queue.length;
      return this.length;
    }
  }
  dequeue() {
    //dequeue調用shift方法並宣告第一個拿出元素（誰先進去，就先出來！），並更新長度，並返回第一個拿出元素
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const delefirstqueue = this.queue.shift();
    this.length = this.queue.length;
    return delefirstqueue;
  }
  size() {
    return this.length; //訪問更新後長度方法
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}

const queue = new Queue();
queue.enqueue(123);
queue.enqueue(456);
queue.enqueue();
console.log(queue.length); // 印出 2

const item = queue.dequeue(); // 取出元素
console.log(item); // 印出 123

queue.dequeue(); // 繼續取出元素
console.log(queue.length); // 印出 0
