## hw1：Event Loop
```javascript
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```
### 輸出
* 1
* 3 
* 5
* 2
* 4

### 原因 - 先從 Event Loop 介紹起
JavaScript 是一個 single thread 的語言，也就是一次只能處理一件事情。

但這時候會有一個問題，也就是「要怎麼處理非同步的事情？」比如設定一個 setTimeout 的 5 秒定時器，我要怎麼在 5 秒後才能執行這件事情呢？在原地等它 5 秒再繼續往下並不合理，所以才會有 Event Loop 來處理整個 JavaScript 運作機制。

先介紹整個 Event Loop 機制中有的幾個東西：
* call stack
* Web APIs
* callback queue
* Event Loop

**Event Loop 執行方式：**
1. 從上到下執行程式碼，都會先丟進 call stack 中，如果是非同步的操作，就會丟進 Web APIs，等到處理好再丟進 callback queue 中。
2. Event Loop 會優先處理 call stack 的東西，後進先出。
3. call stack 清空後再處理 callback queue，而 callback queue 處理方式則是先進先出。

#### 小結：
先執行 call stack 的東西，Web APIs 的程式碼時間到會丟到 callback queue，但要等 call stack 清空才會輪到 callback queue 的程式碼。

#### 簡單小比喻
我會用餐廳來比喻
1. **Event Loop**：「餐廳外場帶位的服務生」
2. **同步的程式碼**：「有訂位的客人」
3. **非同步的程式碼**：「沒訂位的客人」

假設現在有下面這段程式碼：
```javascript
console.log('hi - 1');
setTimeout(function cb1() { 
    console.log('hi - 2'); 
}, 5000); 
console.log('ByeBye');
```
服務生一次只能處理一組客人，所以會由上到下一組一組客人慢慢確認他的身份，而且優先處理有訂位的客人，所以：
1. ```console.log('hi - 1')``` 先到 call stack 區，Event Loop 知道他是同步程式碼，是有訂位的人，所以就先讓他進餐廳，服務完就叫他滾出目前的 call stack，不要擋路。

2. ```setTimeout```到 call stack，服務生 Event Loop 發現是沒訂位的客人，就叫他先去 Web APIs 那裡等計時，時間到就自己去 callback queue，然後服務生要優先處理有訂位的人。

3. 往下處理 ```console.log('ByeBye')``` 這個有訂位的人，一樣處理完後叫他滾出 call stack。

4. 沒有訂位的客人了，服務生 Event Loop 終於可以回頭處理還沒訂位的客人了，按照在 callback queue 排隊的順序來處理客人。

### 實際範例流程
看完小比喻，用實際流程說一次。

1. 放 ```main()``` 進 call stack。

2. 先把```console.log('hi - 1')``` 丟進 call stack 中，然後執行印出 hi - 1，再 pop 出去。

3. 執行 ```setTimeout```，再丟進 Web Apis 中，等待五秒計時。

4. 再往下執行到 ```console.log('ByeBye')```，丟進 call stack 中，執行印出 ByeBye，再 pop 出去。

5. ```main()``` pop 出 call stack 中。

6. 五秒計時到了之後，把 ```function cb1``` 丟到 callback queue，再把它丟到 call stack 中。

7. 執行 ```function cb1```，```console.log('hi - 2')``` 丟進 call stack 中，疊到 ```function cb1``` 上面，執行 ```console.log('hi - 2')``` 並且 pop 出去，再把 ```function cb1``` pop 出去。

### hw1 順序解說
```javascript
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```

承接上面章節的規則，我們可以歸納出這樣的執行順序：
1. ```main()``` 丟進 call stack 中。

2. ```console.log(1)``` 先丟進 call stack 中，執行完印出 1，把 ```console.log(1)``` 從 call stack pop 出去。

3. ```setTimeout(() => {console.log(2)}, 0)``` 丟到 call stack 執行，Event Loop 發現他是非同步的程式碼，所以先丟到 Web APIs 讓它計時，0 秒計時過後會丟到 callback queue。 

4. 繼續往下執行程式碼，```console.log(3)```丟到 call stack 中，執行完印出 3，把```console.log(3)``` 從 call stack pop 出去。

5. ```setTimeout(() => {console.log(4)}, 0)``` 丟到 call stack 中，Event Loop 發現他是非同步的程式碼，先丟到 Web APIs 計時，0 秒計時過後會丟到 callback queue。 

6. 繼續往下執行程式碼，```console.log(5)```丟到 call stack 中，執行完印出 3，把```console.log(5)``` 從 call stack pop 出去。

7. ```main()``` 從 call stack 中 pop 出去。
8. 此時 call stack 已經清空，Event Loop 會處理 calback queue 的程式碼。根據先進先出的順序，先把```()=>{console.log(2)}```丟到 call stack 中處理。

9. 執行匿名函式，把 ```console.log(2)``` 放進 call stack 中（壓在匿名函式上面），執行完印出 2，```console.log(2)``` pop 出 call stack。

10. 匿名函式 pop 出 call stack。

11. 把```()=>{console.log(4)}```丟到 call stack 中處理。

12. 執行匿名函式，把 ```console.log(4)``` 放進 call stack 中（壓在匿名函式上面），執行完印出 4，```console.log(4)``` pop 出 call stack。

13. 匿名函式 pop 出 call stack，結束。


### 關於寫本作業時冒出的疑惑
#### call stack 跟 callback queue
剛寫的時候可以很順利的跑出 1->3->5->2->4 的答案，也大致上知道怎麼解釋。

但我寫到一半會有個疑惑，就是「既然 Event Loop 會不斷檢查 call stack 和 callback queue，那為什麼不會發生 call stack 清空後直接把 callback queue 的東西拿進來執行的情況呢？」

比如為什麼不會發生 ```console.log(3)``` 執行完後，call stack 清空，然後 Event Loop 跑去處理 callback queue 的狀況？

於是我回頭去看 [Philip Roberts Help I'm stuck in an event loop](https://www.youtube.com/watch?v=6MXRNXXgP_0)，發現他都會在文件剛開始執行在 call stack 中放入 ```main()```，就是因為有這個 ```main()```，所以才不會發生我前面的疑惑，因為 ```main()``` 會保證同步的程式碼執行完後再 pop 出去，這時候 call stack 才真正清空，接著 Event Loop 才會處理 callback queue 的 function。

實際上，他在影片 [12:40 秒](https://youtu.be/6MXRNXXgP_0?t=761)也示範了把 setTimeout 計時設為 0 的狀況，原理大概就跟上面解釋一樣。

#### 什麼是 main()？
```main()```的出現解決了前面的疑惑，但影片中他沒有細講什麼是 ```main()```，大概只是說「You could think of the file as being like a main function, so we running the main function, so we push the main function on to the stack.」

於是又跑出一個問題：「```main()``` 是什麼呢？」，於是我跑去查了資料，[main() function in JavaScript?](https://stackoverflow.com/questions/8629859/main-function-in-javascript/8629865)、[Why doesn't JavaScript need a main() function?](https://stackoverflow.com/questions/9015836/why-doesnt-javascript-need-a-main-function) 發現是 C 或 Java 會有的東西，JavaScript 並沒有這東西，並且其中一篇說到：
>Because the entire code block is effectively one big ```main```

接著看到 [JavaScript随笔(三)：JS也有入口函数Main](https://www.cnblogs.com/manxisuo/p/4796709.html)，發現都會有人解釋成「可以把整份 JavaScript code 都看作是 main function」，大概就是 Philip Roberts 說的那樣，也可以解釋為什麼他在講解的時候一開始是在 call stack 放入 ```main()```。

這方面我並沒有詳細的查資料，就只是簡單的 global 看作 main function，也沒有去細看 ECMAScript 的內容，理解很有可能出錯。但根據這週 Execution Context 的講解，我覺得 global 編譯過程的確和 function 很像，差別只在 VO 跟 AO，把 global 看作 main function 這個說法也可以合理的解釋我對 Event Loop 的疑惑。


