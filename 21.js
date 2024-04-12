/** @format */
// 編號：CANDY-021
// 程式語言：JavaScript
// 題目：實作 Stack 資料結構

class Stack {
  constructor() {
    //我在stack裡面創建一個空的陣列元素儲存我的傳入值
    this.items = [];
  }
  push(item) {
    //創建push方法，並判斷是否傳入空值
    if (item !== undefined) {
      return this.items.push(item);
    }
  }
  pop() {
    //創建pop(取出)方法，現在抽象層面判斷是否符合清空的狀況；如果堆疊為空則為下溢(underflow)
    if (this.isEmpty()) {
      return "underflow";
    }
    return this.items.pop();
  }
  get size() {
    //getter方法回傳數組在stack中目前長度
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0; //清空狀態表示數組長度為0
  }
}

const stack = new Stack();
stack.push(123);
stack.push(456);
stack.push();
console.log(stack.size); // 印出 2

const item = stack.pop(); // 取出元素
console.log(item); // 印出 456

stack.pop(); // 繼續取出元素
console.log(stack.size); // 印出 0
