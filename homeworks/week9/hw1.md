## 資料庫結構

### comments
   Name  | Type  |  Description
:--------------|:-----|:-------------------------
id | INT | 留言 id (Auto-Increment)
content | TEXT | 留言內容
user_id | INT | 使用者 id 
created_at | Datetime | 留言時間(預設值：current timestamp)

### users

Name | Type  |  Description
:--------------|:-----|:-------------------------
id | INT | 使用者 id (Auto-Increment)
account | VARCHAR(16) | 使用者帳號
password | VARCHAR(16) | 使用者密碼
nickname | VARCHAR(64) | 使用者暱稱
created_at | Datetime | 留言時間(預設值：current timestamp)

## user stroy
1. 身為使用者，在新增留言時應該可以輸入暱稱跟留言內容
2. 身為系統，應該顯示出留言者的暱稱跟留言內容以及留言時間
3. 身為系統，顯示留言時應該按照時間排序，最後留的顯示在最上面
4. 身為系統，應該只顯示最新的前五十筆留言

### 前台
* 首頁：index.php，顯示「最新的前五十則留言」，留言按照時間先後來排序，每則留言顯示留言者暱稱以及留言內容、時間，並且在上方有輸入暱稱跟新增留言的欄位。
* 新增留言：handle_add_comments.php，負責處理新增留言的功能。

### 後台
* 連線資料庫：conn.php，負責連線資料庫。
* 註冊頁面：register.php，顯示註冊頁面。
* 處理註冊頁面的 request： handle_register.php。
* 登入頁面：login.php，顯示登入頁面。
* 處理登入頁面的 request： handle_login.php。
* 登出：logout.php。

