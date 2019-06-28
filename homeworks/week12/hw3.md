## 請說明 SQL Injection 的攻擊原理以及防範方法

### 攻擊原理
主要是鑽 SQL 語法上的漏洞，對它輸入奇特的字元，改變原本的邏輯，就能對資料庫動手腳，竊取或破壞資料。

以中文來說，大概像是 PTT 推文亂插話那種感覺：
```
→ scuderia:據我音樂系的學妹講的一句話：「你看那些外表不錯的，大   
→ lawrence99:便也是臭的                                     
```
如果是以 SQL 語法舉例，像是如果想在 users 這個 table 選取資料，或許或這樣輸入 SQL 語法：
```SQL
SELECT * FROM users WHERE account = '$account' AND password = '$password'
```

但此時如果使用者輸入的內容是 ```' or 1=1 --```，就會變成
```SQL
SELECT * FROM users WHERE account = '' or 1=1 --' AND password = '$password'
```
account 為空值或是 1=1(true)，並且把後面的內容變成註解，代表就算他沒有帳號密碼都能順利執行這段程式碼並登入。

亦或者是更嚴重一點的是搭配 ```UNION``` 語句，比如像是
```SQL
SELECT * FROM users WHERE account = '' OR 1=1 UNION SELECT account,password FROM users-- AND password = '$password'

// 其實我不知道這段能不能執行成功 
```
資料庫的資料就會在駭客面前裸奔了。

#### Mass SQL Injection
簡單理解的概念是，透過搜尋引擎尋找網址帶有特定參數的網站，比如 ```.asp?a=``` 或 ```Details.aspx?id=``` 等網址，然後大範圍的對這些網站進行 SQL Injection，此外駭客執行 SQL Injection 的方式不止如此，他也對被駭的資料庫寫入包含 script tag 的 HTML 碼，也就是結合 XSS 的方法來攻擊，只要使用者一進入網站就會中標。

### 防範方法
1. **mysqli_real_escape_string** 

一種治標不治本的方式，就是過濾一些特殊符號，但是能繞過這種限制的方式百百種，因此不是個好方法。

[PHP防SQL注入不要再用addslashes和mysql_real_escape_string了](https://web.archive.org/web/20171107192133/https://blog.csdn.net/hornedreaper1988/article/details/43520257)

2. **Prepared Statement** 

利用 PHP 內建的函式對 SQL 語法進行預處理，然後綁定參數或變數，在處理傳入的數值時，就會保證它處理的是一個值，不會變成 SQL 語句的一部份。


### 參考資料
[防堵SQL Injection](https://dotblogs.com.tw/code6421/2016/12/19/sqlinj)

[SQL Injection 的測試與防範](https://www.qa-knowhow.com/?p=131)

[【網頁安全】給網頁後端新人的 SQL Injection 介紹與防範 (PHP)](https://forum.gamer.com.tw/Co.php?bsn=60292&sn=11005)

[Types of SQL Injection (SQLi)](https://www.acunetix.com/websitesecurity/sql-injection2/)

## 請說明 XSS 的攻擊原理以及防範方法
分為儲存型、反射型以及 DOM-Based，以下的範例都是用 alert 當作簡單示範，但真正 XSS 攻擊可能會是在網頁植入惡意程式碼，誘使使用者點入這個網頁，偷走使用者的 cookie、資料等等。
### 儲存型（Stored XSS）
將惡意程式碼直接存進資料庫當中，會影響到進入這個網址的所有使用者，舉例而言，如果你將資料庫的資料提取出來的時候，沒有做任何防護措施，那如果使用者是輸入
```javascript=
<script>alert('Hello')</script>
```
那進入這個網址的使用者一進入就會跳出 alert 這個視窗。

### 反射型（Reflected XSS）
反射型不會被儲存在資料庫當中，而是後端直接將使用者所輸入的內容輸出到畫面上會出現的問題，舉個例子，假如前端這樣寫：
``` HTML
<form method="GET" name="name">
    <input type="text">
    <input type="submit">
</form>
```
後端這樣寫：
```PHP
<?php
    if (isset($_GET['name'])) {
        echo <h1> Hello , $_GET['name'] </h1>;
    }
?>
```
那如果使用者也是輸入 ```<script>alert('Hello')</script>```，並讓你點擊```https://test.php?name=<script>alert('Hello')</script>```  的連結，就一樣會出現資安的漏洞，只要點進去這個網址的使用者就會中招。

你可能會想說靠北我又不是智障，這麼怪的網址才不會點進去，但是如果搭配短網址，表面上就看不出來了，好奇心旺盛到可以殺死貓的人就很容易中招（譬如我）
### DOM-Based（DOM-Based XSS）
先示範程式碼：
``` HTML
<h1 class="show"><h1>
<input class="name" type="text">
<input class="btn" type="submit">

<script>
    function sayHi(){
        let name = document.querySelector('.name').value;
        document.querySelector('.show').innerHTML = name
    }
    
    document.querySelector('.btn').addEventListener(click, sayHi);
</script>
```
此時只要輸入
```
<img scr="XXXXX" onerror="alert('Hello')">
```
就可以跳出 alert 了，
大概就是利用你 DOM 的漏洞來輸入一些莫名奇妙的內容，一樣可以讓你的網頁出問題。
### 防範方式
XSS 防禦的方式大多都是透過 Server 端來進行防禦，因為 Client 端太多地方可以繞過，在前端限制輸入字元等等的方式都是防君子不防小人。
#### htmlspecialchars（後端）
讓輸入的內容可以跳脫字元，把一些特殊符號當作純文字顯示，不會被當作 HTML tag 的內容。

#### 謹慎使用 innerHTML（前端）
因為 innerHTML 會自動解析 HTML tag，所以容易出問題，前端能避免的方式就是改用 innerText 來輸出純文字的內容。
### 參考資料
這邊一併提供課程建議，有個 XSS 遊戲還不錯，模擬駭客的角度來用 XSS 來攻擊某網站，儲存型、反射型的攻擊方法都有。蠻推薦之後進入 Week12 的人來玩這個遊戲，或 Huli 試玩後，看要不要列入第四期的內容 XD

[XSS game](https://xss-game.appspot.com)


偷米騎巴哥也有講解這遊戲的詳細影片及 XSS 防範的方式（內容有遊戲的雷）

[[偷米騎巴哥]帶你認識XSS攻擊手法](https://www.youtube.com/watch?v=MMMkvHwqPRY)

**其他**

[【網頁安全】給網頁開發新人的 XSS 攻擊 介紹與防範](https://forum.gamer.com.tw/Co.php?bsn=60292&sn=11267)

[甚麼是 XSS？簡介黑客常用攻擊技倆](https://hkitblog.com/%E7%94%9A%E9%BA%BC%E6%98%AF-xss%EF%BC%9F%E7%B0%A1%E4%BB%8B%E9%BB%91%E5%AE%A2%E5%B8%B8%E7%94%A8%E6%94%BB%E6%93%8A%E6%8A%80%E5%80%86/)

[XSS (Cross-Site Scripting) 跨站腳本攻擊簡介和實作](https://blog.davidh83110.com/%E8%B3%87%E8%A8%8A%E5%AE%89%E5%85%A8/%E9%A7%AD%E5%AE%A2%E6%8A%80%E8%A1%93/owasp%20top10/2016/10/10/xss.html)

## 請說明 CSRF 的攻擊原理以及防範方法
### 攻擊原理
可能看起來和 XSS 很像，因為都是跨站式請求攻擊，但和 XSS 不一樣的地方在於 XSS 是在網站植入惡意程式碼，CSRF 則是在使用者「已登入」這個網站下的狀況才能成立。

比如今天你經營某 blog，預設是自動登入，然後不小心點進``` <a href='user_site/delete?articleId=1234'>可愛貓咪照</a>```，就可能刪除掉你 blog 的文章。

另外你可能會想說不要點進去就沒事了，但問題有兩個，第一是可愛貓咪照的連結很誘人，很難抗拒不點；第二是其實能夠更進一步地像是利用帶有 src 屬性的 tag 來讓使用者對那個 domain 丟 request，而使用者本身並不知情，比如像是：

```
<img src="https://user_site/delete?articleId=1234" width="0" height="0">
<a href="/cat">可愛貓咪照</a>
```
就可以讓使用者在不知情的情況下，對已登入的網站丟 request，做了他無意去進行的事，像是想看可愛貓咪卻是刪掉自己 blog 的文章。

### 防範方法
Client 端的防範方式有限，通常就是多登出，不要保持登入，但對懶惰的人來說其實有點麻煩。

Server 端才是該多做防禦措施的那端，因為會造成 CSRF 的前提是因為相信來自瀏覽器的資料，所以才會中招，所以簡單來說，網頁越信任瀏覽器，就越容易中招，而我們的資安金句說了：「永遠不要相信來自 Client 端的資料」，所以有幾個方式：

#### 檢查 Referer
檢查 requext 的 header 中 refer 這個欄位是不是來自合法的 domain，如果不是就拒絕 request，但這種檢查的字元方式都有百密一疏的風險，所以不算是很完善的做法。

#### 驗證碼
比如要接受 request 前，要使用者輸入驗證碼，像是簡訊驗證碼或是圖形驗證碼，因為 hacker 並不知道這些驗證碼，所以蠻安全的。

缺點是蠻麻煩的，像我就覺得選擇哪些圖片有紅綠燈、店家門口的驗證無敵麻煩 XDD

#### 檢查 token 
在 form 裡面偷放 token，透過對比 server 端 session 資訊與 form 的內容，就能夠知道是否為正常的 request。

或者資料不存 Server 端，而是在 client 端的 cookie 也設置一個 token，攻擊者沒辦法讀寫目標網站的 cookie，因此發送 request 的 cookie 內沒有 token，透過對比 cookie 內的 token 與 form 裡面的 token 是否一致，就能夠知道 request 是不是來自使用者。

#### 瀏覽器的防禦
SameSite 防禦機制，就是進行跨網域的 request 時，不會帶上 cookie，就不會有因為信任 seesion id 而發生問題的狀況。

### 參考資料
[讓我們來談談 CSRF](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)

[從防禦認識CSRF](https://www.ithome.com.tw/voice/115822)

