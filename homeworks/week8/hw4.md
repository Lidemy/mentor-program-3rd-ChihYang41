## 什麼是 Ajax？

### 簡介
AJAX 是 Asynchronous JavaScript and XML 的縮寫，結尾之所以是 XML 是因為以前都用 XML 格式來傳遞資料，這串英文中最關鍵的詞是 ```Asynchronous``` ，也就是非同步的意思。

### 什麼是同步？什麼是非同步？
#### 同步
不知道大家有沒有看過型男大主廚，假如今天阿基師要做漢堡，他如果是先解決一個食材，再進行下一個步驟，像是「先切漢堡麵包 -> 處理生菜 -> 切番茄 -> 烤漢堡排 -> 組成漢堡 」的程序循序漸進的完成這道料理，我們就稱為這種處理方式為同步，也就是一般 JavaScript 的運作方式，由上到下一行一行等程式碼跑完後，再繼續往下處理，可能看起來很合理，但這樣的壞處是什麼呢？你必須等到這個程式跑完，才能繼續往下進行，如果今天丟一個 request ，而 response 回傳要等 20 秒，同步的狀況就要乾等 20 秒才能繼續進行下去，因此會浪費更多時間，使用體驗不佳。
#### 非同步
但其實阿基師做菜的方式不是這樣，他會先把漢堡排拿去烤，因為漢堡排需要烤一段時間等它熟；然後他再跑去快速的切番茄、處理麵包、生菜並且把他們先放上去麵包，這時漢堡排也差不多熟了，所以就可以把漢堡排放上去組成漢堡了，這種方式就稱為非同步，需要一段時間處理的事情，先放著讓它去跑，比如丟 reqeust 給 server 等 response 回來這件事情就可以先放著，然後讓程式碼繼續往下跑，等到 response 回來後，再用 function 處理送回來的資料，這就是非同步，而這個非同步的 function 則稱為 callback function。

簡而言之，AJAX 就是一種非同步處理資料的方式。

## 用 Ajax 與我們用表單送出資料的差別在哪？
### 表單
表單的進行流程是：
1. client 丟 request 給瀏覽器
2. 瀏覽器再把 reqeust 丟給 server 
3. server 回傳 response
4. 瀏覽器直接把 response 渲染到畫面上

也就是表單傳送資料 response 會直接渲染到瀏覽器畫面上，比較像是跟 server 說我要去這個網址，並且帶一些參數，因此表單的方式會刷新頁面。

### AJAX
AJAX 進行的流程是：
1. JavaScript 丟 request 給瀏覽器
2. 瀏覽器再把 reqeust 丟給 server 
3. server 回傳 response
4. 瀏覽器再把 response 傳給 JavaScript

和表單不同的地方在於瀏覽器會把 response 回傳給 JavaScript，而 JavaScript 已經寫好 function 摩拳擦掌等著處理 response 的資料，也因此不需要刷新頁面就能在畫面上動態產生資料。

## JSONP 是什麼？
瀏覽器中因為資料安全性的緣故，有 [同源政策 (Same-origin policy)](https://developer.mozilla.org/zh-TW/docs/Web/Security/Same-origin_policy) 這項限制，也就是需要你們在同個 Domain，同個 port，以及有同樣主機位置，並且都同為 http 或同為 https 才算同源，此時瀏覽器才會把 response 回傳給你的 JavaScript。但一般來說不會同源，不同源時丟 request 通常會出現 「No 'Access-Control-Allow-Origin' header is present on requested source 」的錯誤訊息，在這過程中瀏覽器有丟出 reqeust，server 也同樣有收到並回傳 response，但瀏覽器因為同源政策並沒有把 response 回傳給 JavaScript。

如同前面所言，同源政策的存在是為了資料的安全性，但有些資料並沒有安全性的問題，比如擁有 src 這個屬性的 tag ```img``` 或 ```script```，也因此 JSONP 因應而生，既然 script 沒被同源政策限制，那就把資料放在 script 當中，再從此 js 檔取出資料，算是繞過同源政策的小心機（？）

延伸參考資料：[Same Origin Policy 同源政策 ! 一切安全的基礎](https://medium.com/@jaydenlin/same-origin-policy-%E5%90%8C%E6%BA%90%E6%94%BF%E7%AD%96-%E4%B8%80%E5%88%87%E5%AE%89%E5%85%A8%E7%9A%84%E5%9F%BA%E7%A4%8E-36432565a226)、[說說 JSON 和 JSONP，也許你會豁然開朗](https://www.cnblogs.com/dowinning/archive/2012/04/19/json-jsonp-jquery.html)

## 要如何存取跨網域的 API？
需要透過 [CORS(Cross-Origin Resource Sharing)跨來源資源共享](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS) 的方式來處理，如同上題提及，由於同源政策的關係，不同源丟 request 會被瀏覽器給擋住沒辦法收到回傳的 response，因此 Server 需要在 response 的 header 中設置```Access-Control-Allow-Origin``` 允許跨來源的 request 存取資料。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為第四週是用 node.js 來發送 request 跟接收 response，在 node.js 環境下並沒有透過瀏覽器當作中間的仲介，而是 node.js 直接丟 reqeust 給 server，server 也是直接回傳 response 給 node.js，因此並沒有遇到跨網域的問題。

這週我們是透過瀏覽器發送 request 跟 response，而瀏覽器又有同源政策的限制，所以這週才會有跨網域的問題，也就是這週多了瀏覽器這個枷鎖。
