/** @format */

// /** @format */

// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
  const splitArray = str.split("");
  const array_o = [];
  const array_x = [];
  splitArray.filter((items) => {
    if (items === "o") {
      return array_o.push(items);
    } else if (items !== "A" && (items === "x" || items === "X")) {
      return array_x.push(items);
    }
  });
  return array_x.length === array_o.length;
}

console.log(xxoo("ooxx")); // true
console.log(xxoo("xxoo")); // true
console.log(xxoo("xxooo")); // false
console.log(xxoo("xoox")); // true
console.log(xxoo("ooAA")); // false
console.log(xxoo("xoXoA")); // true

-------------------------------

function xxoo(str) {
  const toLowerarray = str.toLowerCase().split("");
  countX = 0;
  countO = 0;
  toLowerarray.forEach((items) => {
    if (items === "o") {
      countO++;
    } else if (items === "x") {
      countX++;
    }
  });
  return countO === countX;
}

console.log(xxoo("ooxx")); // true
console.log(xxoo("xxoo")); // true
console.log(xxoo("xxooo")); // false
console.log(xxoo("xoox")); // true
console.log(xxoo("ooAA")); // false
console.log(xxoo("xoXoA")); // true

-------------------------

function xxoo(str) {
  const reGexX = /x/gi;
  const reGexO = /o/gi;
  console.log(str.match(reGexO));
  //   const countX = (str.match(reGexX) || []).length;
  //   const countO = (str.match(reGexO) || []).length;

  //   return countX === countO;
}
console.log(xxoo("ooxx")); // true
console.log(xxoo("xxoo")); // true
console.log(xxoo("xxooo")); // false
console.log(xxoo("xoox")); // true
console.log(xxoo("ooAA")); // false
console.log(xxoo("xoXoA")); // true

class Stack {
  constructor(arr) {
    this.stack = arr;
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  size() {
    return this.stack.length;
  }
  print() {
    return this.stack;
  }
}

const stack = new Stack([2, 4, 9, 5, 8]);
stack.pop(); //8
stack.peek(); //5

stack.push(7);
stack.print(); //[2, 4, 9, 5, 7]

stack.size(); //5
