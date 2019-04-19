# deep copy & shallow copy
###### tags: `JavaScript` `Array`
>[關於 JS 中的淺拷貝和深拷貝](http://larry850806.github.io/2016/09/20/shallow-vs-deep-copy/)
>[Copy array by value](https://stackoverflow.com/questions/7486085/copy-array-by-value)
---
一、深層copy
* 先預設一個變數A並給值，接著將變數A放到新設的變數B，這樣A與B就相等。
* 接著改變A的值，log出來後會發現B的值不受A的影響而改變
```javascript=
var A = 5;
var B = A;
var C = B;
A = 99;
C = 6;
console.log(A);   // 99
console.log(B);   // 5
console.log(C);   // 6
```
二、淺層copy
* 先預設一個變數A並把它變成陣列，接著將變數A放到新設的變數B，這樣A與B就相等。
* 接著改變A裡陣列的其中一個值，log出來後會發現B陣列的值跟A陣列裡的值同步改變。
```javascript=
var A = [1,2,3,4];
var B = A;
var C = B;
A[0]= 99;
console.log(A);   // [99,2,3,4]
console.log(B);   // [1,2,3,4]
console.log(C);   // [1,2,3,4]
```
三、將陣列改成非同步
1. 使用for loop
2. 使用map
3. 使用concat
4. spread
5. 轉成JSON再轉回來
6. 使用Object.assign
#### 請參考 shallowToDeep.js 及 arrayCopy.js