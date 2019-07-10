## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？
DNS 全名是 Domain Name Sever，一般來說為了好記、易讀等原因，我們都會用 domain name 來前往某網站，但實際在網路上辨識的還是 IP，因此 DNS 負責的工作就是將 domain name 轉為 IP。

提供 Public DNS 對 Google 最主要的好處是它可以知道哪些網頁最常被造訪、哪些網頁被造訪幾次，也就是可以搜集相關數據。

對一般大眾的好處第一是比較快速且安全，第二則是可以有其他選擇，如果現在用的 DNS 壞了還可以用 Google 的。

### 參考資料
[什麼是 DNS？](https://aws.amazon.com/tw/route53/what-is-dns/)

[什麼是 DNS](https://www.ithome.com.tw/node/6278)
## 什麼是資料庫的 lock？為什麼我們需要 lock？
主要是為了保持隔離性（Isolation），避免 Race condition 的狀況，Race condition 在維基百科是這樣舉例的：
>如果電腦中的兩個行程同時試圖修改一個共用記憶體的內容，在沒有並行控制的情況下，最後的結果依賴於兩個行程的執行順序與時機。而且如果發生了並行存取衝突，則最後的結果是不正確的。

所以為了避免一個欄位同時被兩個 transaction 修改數值，必須在進行一個 transaction 執行的時候把那個欄位給 lock 住，讓它不能被其他指令修改數值，等到結束後再輪到下一個 transaction 執行，也就是叫他們乖乖排隊照順序來，不要插隊。


### 參考資料
[Race condition 競爭危害](http://attzws.blogspot.com/2013/07/race-condition.html)
## NoSQL 跟 SQL 的差別在哪裡？
NoSQL 指的是 Not only SQL，指的是不只是 SQL，也就是混用關聯式資料庫和 NoSQL 讓儲存資料達到更好的效果。

### NoSQL 和 SQL 兩者的差別
1. **彈性**：NoSQL 因為是非關聯式資料庫，沒有 schema，儲存的類型有 Document、Big Table、Graph 以及 Key-Value，沒有嚴謹的結構限制，使用上比較彈性。SQL 則是有 schema，將資料標準化，結構上就比較嚴謹。

2. **JOIN**：NoSQL 因為是非關聯式資料庫，不使用 JOIN，而 SQL 會使用。

3. **語法**：NoSQL 和 SQL 語法不一樣，NoSQL 通常是用簡單的 API 來存取資料，SQL 則是用 SQL 語法。
4. **理論基礎**：NoSQL 的理論基礎是 CAP（Consistency、Availability、Partition Tolerance），而一個非關聯式資料庫沒辦法同時達成三個特性，三個要素通常只能滿足兩點。SQL 則是 ACID（Atomicity、Consistency、Isolation、Durability）

### 參考資料
[MongoDB 學習筆記之一 - 從 NoSQL 談起](http://garyliutw.blogspot.com/2014/05/mongodb-nosql.html)

[什麼是 NoSQL 資料庫？](https://aws.amazon.com/tw/nosql/)


[了解NoSQL不可不知的5項觀念](https://www.ithome.com.tw/news/92506)

[RDBMS v.s. NoSQL](https://shininglionking.blogspot.com/2018/04/rdbms-vs-nosql.html)
## 資料庫的 ACID 是什麼？
ACID 是 transaction 的特性，在此先介紹 transaction，可以把 transaction 視作連續執行一連串 SQL 指令的過程，為了確保 transaction 是可靠的，當中會有 ACID 這四項特性。

假設今天有個 table 叫做 balance，裡面有 account、money 兩個欄位，分別放名字以及金錢總額兩種資料。

如果現在有個狀況是：用戶 Alice 和 Peter 各有 1000 元，Alice 要轉帳給 Peter 三百元，那我們的 SQL 指令可能會這樣下：
```SQL
UPDATE balance SET money = 700 WHERE account = "Alice";
UPDATE balance SET money = 1300 WHERE account = "Peter"; 
```
這個過程就是一個 transaction，而當中就要保持 ACID 四種特性

* **A(Atomicity)原子性**：

要不就全部完成（Commit），如果在過程出錯，就全部都沒完成，當作沒什麼都發生過（rollback），就像是上面轉帳的例子，要不就轉帳成功，如果中途出錯，就要當沒發生過。

* **C(Consistency)一致性**：

以上面的交易當做例子，兩人的金錢合計是 2000 元，因此在轉帳這個交易的前後都必須保持一致，也就是轉帳後合計還是要為 2000 元。不能發生 Alice 扣錢、Peter 沒收到錢或是 Alice 沒扣錢但是 Peter 收到錢這種前後結果不一致的狀況。

* **I(Isolation)隔離性**：

我會把這特性視作「每一筆 transaction 都是獨立的」，也就是這一筆 transaction 在進行的時候，在 commit 之前，不會同時執行另一筆 transaction，以確保 transaction 之間不會互相影響。

同樣用上面當例子，假如 Peter 在 Alice 轉帳時同時想買另一個 200 元的東西，會產生的狀況只有「在 Alice 轉帳完，Peter money 變為 1300 後，再扣 200 變 1100」或「Peter money 1000 先扣 200 變 800，Alice 再轉帳進去 300 變 1100」，不會發生兩筆 transaction 同時執行的狀況，不然無法判定「這筆 transaction money 的值該從哪個數值開始減少或增加」

* **D(Durability)持續性**：

transaction 成功後，寫入的資料不會不見，永久保存在資料庫中。

### 參考資料
[資料庫交易的 Isolation](https://medium.com/getamis/database-transaction-isolation-a1e448a7736e)

[SQL 大小事](https://medium.com/@totoroLiu/%E8%B3%87%E6%96%99%E5%BA%AB-acid-bb87324035a8)

[Database Transaction第一話: ACID](http://karenten10-blog.logdown.com/posts/192629-database-transaction-1-acid)

[資料庫交易](https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E5%BA%93%E4%BA%8B%E5%8A%A1)

[簡介交易](https://openhome.cc/Gossip/EJB3Gossip/TransactionABC.html)


## 關於部署
### 部署超級懶人包
1. 註冊 gandi 會員，跟 Huli 要 coupon，買網域，購買時輸入 coupon 就可免費買網域
2. 註冊 AWS 會員，用 EC2
3. 連到遠端的機器，複製貼上大大們寫好的 command line
4. 跟前幾週差不多，到 Filezilla 丟檔案

### 過程、參考資料
* **註冊 AWS 會員看這個**：

[線上程式教學課程: Linux雲端伺服器，用 AWS 暸解 Apache 與 Nginx](https://progressbar.tw/courses/13)

免費章節的第五章有完整教學註冊 AWS 會員、建立 EC2 instance 影片

* **部署看這個**：

[部署 AWS EC2 遠端主機 + Ubuntu LAMP 環境 + phpmyadmin](https://github.com/Lidemy/mentor-program-2nd-yuchun33/issues/15)

註冊完會員後，照個上面這篇做，就可以順利完成基本的部署啦～

另外 AWS 內建的教學也可以看一下 [啟動 Linux 虛擬機器](https://aws.amazon.com/tw/getting-started/tutorials/launch-a-virtual-machine/)，內容基本上大同小異。
* **如何更改網域 IP**：

[程式導師實驗計畫：Lesson 8-3 之 hw8 作業檢討](https://youtu.be/w6MN-N2OFTg?t=1360) 22:40 秒處

簡單來說就是複製 EC2 Instance 的 Public IPv4 ，到 gandi 的區域檔紀錄那邊編輯，貼上剛剛複製的 IP。

* **如何上傳自己的檔案**：

我是用 Filezilla，感謝 @julypenguin 同學寫的[心得](https://github.com/Lidemy/mentor-program-3rd-julypenguin/blob/master/homeworks/week14/hw3.md)：

>FileZilla
>  1. 要把協定改成 SFTP
>  2. 主機填 EC2 的 IPv4 Public IP
>  3. 登入方式選「金鑰檔案」
>  4. 使用者 ubuntu
>  5. 金鑰檔案按瀏覽選擇 .pem 的那個
>  6. 連上後去 /var/www/html 資料夾放檔案
  
## 小小注意事項
### 用 Filezilla 丟檔案出現 permission denied：
Terminal 輸入：
```
sudo chown -R ubuntu:ubuntu /var/www/html

sudo chmod -R 755 /var/www/html
```
參考資料：[Amazon AWS Filezilla transfer permission denied
](https://stackoverflow.com/questions/19648712/amazon-aws-filezilla-transfer-permission-denied)

### 檔案丟到 Filezilla 了，但連到資料庫有問題
確定 conn.php 內資料庫是寫你虛擬機器 phpmyadmin 的帳號密碼和 dbname（我就是犯這種智障錯誤的人嗚嗚）
