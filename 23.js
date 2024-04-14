/** @format */

// 編號：CANDY-023
// 程式語言：JavaScript
// 題目：算出 N 個數字的最大公因素

function calcGCD(...numbers) {
  function gcd(a, b) {
    //歐幾里德演算法，當b=0時表示完全整除，找到最大公因
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  if (numbers.length === 1) {
    return numbers[0]; //數組只有一個，本身為最大公因
  } else if (numbers.length === 2) {
    return gcd(numbers[0], numbers[1]); //兩個則互相比較
  } else {
    return gcd(numbers[0], calcGCD(...numbers.slice(1))); //兩個以上，則將開頭跟剩下餘數再次使用輾轉相除。
  }
}

console.log(calcGCD(10)); // 10
console.log(calcGCD(103, 27)); // 1
console.log(calcGCD(21, 15, 18)); // 3
console.log(calcGCD(104, 96, 36, 88)); // 4
