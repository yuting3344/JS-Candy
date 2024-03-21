# JS-Candy

```js

// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

// function sumOfSmallestValues(arr) {
//     // 實作程式碼寫在這裡
//   }

//   const list1 = [19, 5, 42, 2, 77];
//   const list2 = [23, 15, 59, 4, 17];

//   console.log(sumOfSmallestValues(list1)); // 印出 7
//   console.log(sumOfSmallestValues(list2)); // 印出 19

//我的作法
function sumOfSmallestValues(arr) {
  const addition = (x, y) => (x > y ? x : y); //1.先定義一個function,並使用reduce來找出陣列中最大值
  const odd = (x) => x !== result; //2.使用filter將不等於最大值的數字過濾掉
  const rat = (x) => x !== Array;
  const box = (x) => x !== abc;
  const final = (x, y) => x + y;
  const result = arr.reduce(addition);
  const Array = arr.filter(odd).reduce(addition);
  const baby = arr.filter(odd).filter(rat); //3.並且操作1.及2.三次後
  const abc = baby.reduce(addition);
  const xyz = baby.filter(box);
  const finalValue = xyz.reduce(final);
  return finalValue;
}
const list1 = [19, 5, 42, 2, 77];
const list2 = [23, 15, 59, 4, 17];

console.log(sumOfSmallestValues(list1));
console.log(sumOfSmallestValues(list2));

//跟同學討論sort用法解答
function sumOfSmallestValues(arr) {
  //先用sort做排列後
  const newArray = arr.sort((a, b) => a - b); //定義新的參數且進行sort後，return陣列中第0跟1個物件相加值！
  return newArray[0] + newArray[1];
}

const list1 = [19, 5, 42, 2, 77];
const list2 = [23, 15, 59, 4, 17];

console.log(sumOfSmallestValues(list1));
console.log(sumOfSmallestValues(list2));
```
