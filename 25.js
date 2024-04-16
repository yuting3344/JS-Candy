/** @format */

// 編號：CANDY-025
// 程式語言：JavaScript
// 題目：
//   一般我們常見的四捨五入計算方式在統計上容易造成計算偏差
//   於是有人推出了「銀行家捨入法」用來稍微平衡計算偏差
//   計算方式是「四捨六入五成雙」
//   當捨入計算位數剛好是 5 的時候，會算出離這個數字比較近的偶數

function bankersRounding(num, digits = 0) {
  //預設digits為0
  const roundNum = (num * Math.pow(10, digits + 1)) % 10; //根據提供的參數，定義一個數為乘上10的次方數後對10取餘數，得到最後一位的整數，作為接下來的判斷
  if (roundNum < 5) {
    //如果數字小於5，則捨去
    return Math.round(num * Math.pow(10, digits)) / Math.pow(10, digits);
    //如果等於5，則在判斷小數點前是奇數還是偶數，奇數進位，偶數捨去
  } else if (roundNum === 5) {
    const frontNum = Math.floor(num * Math.pow(10, digits)); //無條件捨入到小數點前一位避免誤判
    if (frontNum % 2 === 1) {
      //奇數則進位
      return Math.round(num * Math.pow(10, digits)) / Math.pow(10, digits);
    }
    return frontNum / Math.pow(10, digits); //偶數則捨去
  }
  return Math.round(num * Math.pow(10, digits)) / Math.pow(10, digits); //如果數字大於5則進位
}

console.log(bankersRounding(0.4)); // 0
console.log(bankersRounding(0.6)); // 1
console.log(bankersRounding(0.5)); // 0
console.log(bankersRounding(1.5)); // 2
console.log(bankersRounding(1.24, 1)); // 1.2
console.log(bankersRounding(1.26, 1)); // 1.3
console.log(bankersRounding(1.25, 1)); // 1.2

// 具體來說，銀行家捨入法通常根據以下規則進行捨入：

// 如果小數點後的數字小於5，則將其捨去。
// 如果小數點後的數字大於5，則進位。
// 如果小數點後的數字等於5，則根據前一位數字的奇偶性來決定是否進位。如果前一位數字是奇數，則進位；如果前一位數字是偶數，則捨去。
// 這樣做的目的是為了使捨入後的結果更加公平和合理，避免出現單方面地將數字捨入造成的誤差。銀行家捨入法在許多國家的金融機構和會計標準中都有所應用。

//房錚版本
function bankersRounding(num, digits = 0) {
  // 先將問題轉化成對 n 做捨入法保留整數部分
  const n = num * 10 ** digits; //num 乘上 10 的 digits（次方）
  // r 是 n 的小數部分
  const r = n % 1;
  // 捨去條件: 1. r < 0.5
  // 2. r = 0.5 且 n 的整數部分是偶數
  if (r < 0.5 || (r == 0.5 && (n - r) % 2 == 0)) {
    return num - r * 10 ** -digits;
  }
  // 進位
  return num + (1 - r) * 10 ** -digits;
}

console.log(bankersRounding(0.4)); // 0
console.log(bankersRounding(0.6)); // 1
console.log(bankersRounding(0.5)); // 0
console.log(bankersRounding(1.5)); // 2
console.log(bankersRounding(1.24, 1)); // 1.2
console.log(bankersRounding(1.26, 1)); // 1.3
console.log(bankersRounding(1.25, 1)); // 1.2
