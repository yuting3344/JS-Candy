/** @format */

// 編號：CANDY-023
// 程式語言：JavaScript
// 題目：算出 N 個數字的最小公倍數
// 提示：可使用 023 計算最大公因數的函數

function calcLCM(...numbers) {
  function gcd(a, b) {
    //計算最大公因數函數
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  function lcm(a, b) {
    //最小公倍數函數：LCM(a,b)= a * b / GCD(a,b) 使用最小公因數函數求最小公倍數
    return (a * b) / gcd(a, b);
  }
  return numbers.reduce((acc, cur) => lcm(acc, cur)); //運用reduce將前後兩兩數取最大公倍後，再次呼叫直到最後一個數字。
}

console.log(calcLCM(10)); // 10
console.log(calcLCM(103, 27)); // 2781
console.log(calcLCM(21, 15, 18)); // 630
console.log(calcLCM(104, 96, 36, 88)); // 41184
