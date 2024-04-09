/** @format */

// 編號：CANDY-019
// 程式語言：JavaScript
// 題目：檢查是否為某個數字的平方數

function isSquare(num) {
  const squareRoot = Math.sqrt(num); //對傳入值開平方
  return squareRoot === Math.floor(squareRoot); //判斷使否能向下取整數，不能符合true則返回false
}

console.log(isSquare(0)); // true
console.log(isSquare(4)); // true
console.log(isSquare(5)); // false
console.log(isSquare(100)); // true
console.log(isSquare(-4)); // false
console.log(isSquare(-1)); // false
