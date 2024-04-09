/** @format */

// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數

// function getRandomInt(min,max) {
//     return Math.floor(Math.random() * max);
//   }

function randomNumber(min, max) {
  if (max === undefined) {
    //判斷max如果是未定義，也就是只接受一個參數的情況，設參數起始min為0，max為min
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min) + min); //如果有定義，則用返回值大於等於min，且小於max的範圍判斷來得到答案
}
console.log(randomNumber(50)); // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)); // 隨機印出 5 ~ 29 之間的任何一個數字
