## 請解釋後端與前端的差異。

1. 網頁前端：就是使用者所看的到的頁面，比如進入一個網頁，看到的東西、各種花花綠綠的頁面、和網頁的互動效果，都是網頁前端的內容。

2. 網頁後端：就是使用者所看不到的，負責處理資料庫相關。

以比較淺白的文字來說，我會想用餐廳來比喻，網頁前端就是餐廳結構（HTML）、裝潢（CSS）、外場與顧客的互動（JavaScript），而網頁後端就是內場，顧客看不到他們在做什麼，而後端負責處理食物（資料庫的內容）


## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 瀏覽器問 DNS Server https://www.google.com/ 怎麼去

2. DNS Server 跟瀏覽器說 IP 位址，瀏覽器對 IP 位址送出 Request

3. DNS Server 收到 Request 後去跟資料庫要 JavaScript 這個關鍵字的資料

4. 資料料庫找到資料傳給 DNS Server，DNS Server 傳 Response 給瀏覽器

5. 瀏覽器將得到的結果渲染到畫面上，使用者看到搜尋結果


## 請列舉出 5 個 command line 指令並且說明功用

1. touch：新增檔案或是更新檔案最後修改時間

2. pwd：顯示目前所在位置

3. ls：列出目前所在位置的所有檔案及資料夾

4. cd：移動至某某資料夾

5. rm：刪除資料