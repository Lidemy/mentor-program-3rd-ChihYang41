## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
#### VARCHAR
1. 可以設定資料長度
2. 最多可以儲存 1 至 65535 個字元
3. 可以建立索引
4. 當字元小於等於 255 的時候，佔用 1 + 字元長度 bytes 的空間；當字元介於 256 和 65535 的時候，佔用 2 + 字元長度 bytes 的空間。

#### TEXT
1. 不能設定資料長度
2. 最多可以儲存 65535 個字元，但沒辦法限制資料最多可以放多少
3. 不能建立索引
4. 佔用 2 + 字元長度 bytes 的空間

#### 使用的結論
如果不能估算資料的長度，那就用 TEXT，但如果能估算資料的長度，就用 VARCHAR，因為效能會比較好。

參考資料：[Difference between VARCHAR and TEXT in mysql](https://stackoverflow.com/questions/25300821/difference-between-varchar-and-text-in-mysql)

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又會以什麼形式帶去 Server？
簡單來說 Cookie 就是 client 瀏覽器存放資料的地方，通常用於三個地方：session、個人化的設定以及追蹤使用者的行為。

session 可能放購物車紀錄、又或者是登入的時候給你類似通行證的東西，以用來確認這次 request 和上一次 request 是同一個人送出的。

Cookie 就是存放這些資料的地方，在 client 送出 request 的時候，server 回傳的 response 中的 header 會有一個叫做 set-Cookie 的欄位，在那邊會寫著你 Cookie 的 name、value、expires（Cookie 過期的期限）和 path（Cookie 有效的地方） 等等的資訊。

參考資料：[Cookie 是文檔還是餅乾？簡述HTTP網頁紀錄會員資訊的一大功臣。](https://progressbar.tw/posts/91)、[HTTP cookies
](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Cookies)
## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
* 我能想到的是自己寫出來的 setCookie 很可怕，因為 value 是 users 的 id，也就是固定的內容，只要被知道規律或是有辦法設定 Cookie 就挫賽了 XD 也許用個亂碼會安全一點嗎？但我一想到要是有人寫個網頁可以讓你無意間丟 request 給它的 server，比如像是之前講到 API 時，Huli 說有人會在 email 放一個超小的透明圖片夾帶一個 Web API 網址來驗證對方是否已讀信件的功能那樣，或許就可以在 response 裡的 set-cookies 動點手腳，總覺得 cookie 充滿各種危機，會想說瀏覽器應該會有阻擋的機制吧？然後也覺得認證不認人有點危險，可是想想自己家門的鑰匙好像也是一樣的運作模式欸？

* 總覺得資料庫有點不太安全，想說那一般後端工程師也是這樣把所有人的個資看光光嗎？有點怕怕。