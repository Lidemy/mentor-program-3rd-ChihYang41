# Week17 homework 2

###### tags: `Week17`

## hw2：Event Loop + Scope
```javascript
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
### 輸出
i: 0
i: 1
i: 2
i: 3
i: 4

5
5
5
5
5

### 原因
```javascript
// 編譯
globalEC:{
    VO:{
        i = undefined;
    }
    scopeChain: [globalEC.VO]
}

// 執行
1. 把 main() 放進 call stack 中

// for 迴圈第一圈
1. i = 0，console.log('i: ' + 0) 到 call stack 中，執行印出 i: 0，並 pop 出去。
2. setTimeout(() => {console.log(i)}, i * 1000) 到 call stack 中，把匿名函式放進 Web APIs 計時 0 秒，等時間到再把匿名函式丟進 callback queue 排隊。
3. i + 1 = 1

// for 迴圈第二圈
1. i = 1，console.log('i: ' + 1) 到 call stack 中，執行印出 i: 1，並 pop 出去。
2. setTimeout(() => {console.log(i)}, i * 1000) 到 call stack 中，把匿名函式放進 Web APIs 計時 1 秒，等時間到再把匿名函式丟進 callback queue 排隊。
3. i + 1 = 2

// for 迴圈第三圈
1. i = 2，console.log('i: ' + 2) 到 call stack 中，執行印出 i: 2，並 pop 出去。
2. setTimeout(() => {console.log(i)}, i * 1000) 到 call stack 中，把匿名函式放進 Web APIs 計時 2 秒，等時間到再把匿名函式丟進 callback queue 排隊。
3. i + 1 = 3

// for 迴圈第四圈
1. i = 3，console.log('i: ' + 3) 到 call stack 中，執行印出 i: 1，並 pop 出去。
2. setTimeout(() => {console.log(i)}, i * 1000) 到 call stack 中，把匿名函式放進 Web APIs 計時 3 秒，等時間到再把匿名函式丟進 callback queue 排隊。
3. i + 1 = 4

// for 迴圈第五圈
1. i = 4，console.log('i: ' + 4) 到 call stack 中，執行印出 i: 4，並 pop 出去。
2. setTimeout(() => {console.log(i)}, i * 1000) 到 call stack 中，把匿名函式放進 Web APIs 計時 4 秒，等時間到再把匿名函式丟進 callback queue 排隊。
3. i + 1 = 5

// for 迴圈執行完
1. 當 i 變成 5，不滿足條件，for 迴圈停止。此時 call stack 的同步程式碼執行完，main() 也從 call stack 中 pop 出去。
2. Event Loop 開始處理 callback queue 排隊的匿名函式。

此時的 globalEC 為：

globalEC:{
    VO:{
        i = 5;
    }
    scopeChain: [globalEC.VO]
}

3. 排在 callback queue 的匿名函式拉進 call stack 中，執行計時為 0 秒的匿名函式，把 console.log(i) 放進 call stack 中，這時 i 為 5，因此執行 console.log(5)，執行完印出 5 後 pop 出去。
4. 排在 callback queue 的匿名函式拉進 call stack 中，執行計時為 1 秒的匿名函式，把 console.log(i) 放進 call stack 中，這時 i 為 5，因此執行 console.log(5)，執行完印出 5 後 pop 出去。
5. 排在 callback queue 的匿名函式拉進 call stack 中，執行計時為 2 秒的匿名函式，把 console.log(i) 放進 call stack 中，這時 i 為 5，因此執行 console.log(5)，執行完印出 5 後 pop 出去。
6. 排在 callback queue 的匿名函式拉進 call stack 中，執行計時為 3 秒的匿名函式，把 console.log(i) 放進 call stack 中，這時 i 為 5，因此執行 console.log(5)，執行完印出 5 後 pop 出去。
7. 排在 callback queue 的匿名函式拉進 call stack 中，執行計時為 4 秒的匿名函式，把 console.log(i) 放進 call stack 中，這時 i 為 5，因此執行 console.log(5)，執行完印出 5 後 pop 出去。
```

### 為什麼 setTimeout 的 console.log(i) 印出 5 
我覺得上面一步一步的解釋可能不夠清楚，而現在找到的文章也沒辦法很明白解釋整個過程，所以再用自己的方式消化一遍，並且重新講解。

印出 5 有兩個前提：
1. **是一個非同步的程式碼，所以會被丟進 Web APIs**
2. **不是印出自身 scope 中宣告的數值。**

什麼意思呢？先講第一個條件，因為是非同步的程式碼，所以被丟進去 Web APIs ，丟進去的其實是 ```()=>{console.log(i)}``` ，也就是一個 function，當它執行的時候，已經是整個 ```main()``` 結束的時候了。

這時候匿名函式在 call stack 中執行，牽扯到了第二個條件，```console.log(i)``` 要找 i 這個值，在自身的 scope 中找不到 i，所以往 scope chain 的上方找，從 globalEC 找到 i，此時已經是 5（因為 for 迴圈跑完了），所以變成 console.log(5)。

[Open所有的函式都是閉包：談 JS 中的作用域與 Closure ](https://github.com/aszx87410/blog/issues/35?source=post_page---------------------------) 中所舉到 btn 點下去 i 會跳出 5 的例子也是相同，要用更清楚的方式來講解就是配合 Event Loop，就會知道為什麼文章說是：「**幫它加一個 function 是按下去的時候會跳出 i 而已，我又沒有直接執行這個 function。**」，

因為更詳細的運作方式是：
1. 點擊 btn 後，```function(){alert(i)}``` 到 call stack 後再被丟到 Web APIs
2. 接著從 Web APIs 再到 callback queue，接著 function 被抓進 call stack 執行，把 ```alert(i)``` 丟進 call stack 中。
3. ```alert(i)``` 順著 scope chain 找到 global 中 i 的值，跳出 5。
