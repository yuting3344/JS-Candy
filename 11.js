/** @format */

// 編號：CANDY-011
// 程式語言：JavaScript
// 題目：找出一個數字陣列裡，出現奇數次數的數字
// 範例：[1, 1, 0]，`0` 只有出現 1 次
//      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次

function findOddElm(numbers) {
  const countingMap = {}; //宣告countingMap為空物件，用來儲存接下來陣列對應的數字及其出現的次數

  numbers.forEach((item) => {
    countingMap[item] = (countingMap[item] || 0) + 1; //使用變量item來獲取物件countingMap的屬性值；
    //如果 countingMap[num] 存在且不是假值，返回true並加1；如果不存在則設初始為0加上1(次)，也就是第一次看到的意思！
  });
  const keyofcoutingMap = Object.keys(countingMap); //使用Object.keys找到物件屬性
  const oddvaluefilter = (item) => countingMap[item] % 2 !== 0; //設置函數讓屬性值為奇數時，過濾並轉成數字呈現
  return Number(keyofcoutingMap.filter(oddvaluefilter));
}

console.log(findOddElm([1, 1, 2])); // 印出 2
console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])); // 印出 1
console.log(findOddElm([0, 1, 0, 1, 0])); // 印出 0
console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])); // 印出 -1
console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 印出 5
