## Bootstrap 是什麼？
一種網頁的框架，切版懶人的救星，提供各種網頁 UI 元件，可以快速地切出各種版面，本來我以為只是單純為了方便、快速開發才出現的，稍微找了文件之後發現有部分也是與網頁開發流程的流變有關。
#### 遠古時代
最開始開發網頁都是 PHP 與 HTML 混著寫，所以基本上只分為後端與設計兩個職位來處理網頁。
#### 中世紀
在 Gmail 使用 ajax 後，大家發現用 JavaScript 非同步產生畫面上的東西，使用者體驗更好，也因此分割出前端這個職位。
#### 近代
在分割出前端、後端、設計三個職位後，出現了要互相等待的狀況，後端要等前端給出可操作的網頁，整合後端才能測試，而前端要等設計師給出設計稿，才能切版和處理網頁操作。

在這個背景下如果有個標準化的元件庫，讓分工不互相卡住，設計師可以在 Bootstrap 的美術框架下設計，後端則是因為有基本網頁框架可以參照，就可以先做測試，以後要調整也不會太難。

參考資料：[為什麼要學習 Bootstrap 呢？](https://blog.frost.tw/posts/2018/11/27/Why-we-choose-the-Bootstrap/)
## 請簡介網格系統以及與 RWD 的關係
### 網格系統
網格系統是一種設計系統，基本上就是將平面分為 12 欄進行分配，這樣的好處是可以讓版面比較整齊劃一，在比例上看起來和諧，使用體驗及設計美感自然就會不錯，可以說是在有限的空間裡進行各種無限的創意排列組合。
> 「網格的概念是給你一套層級系統，但同時也給你豐富的多樣性；網格完全沒變，變的永遠是網格裡面的東西，就是這點讓事情變得更有趣。」
> 
![avatar](http://ithelp.ithome.com.tw/upload/images/20131021/201310211157015264a60d93848_resize.png)
### RWD
因應手機、平板等載具的盛行，網頁基本上都會支援 RWD，並且會配合網格系統的設計，基本上就是各種數字加起來為 12 的組合，比如在電腦 1024 px 的螢幕上是一個 row 分為 6 與 6 個 column 的組合，到了平板可能是 3、3、3、3 這樣 column 的組合，更小的手機螢幕可能就會是 1 個 column 就佔滿整個 row。

在 HTML 的結構大概會長得像這樣：
```html
...
<div class="row">
  <div class="col2">col2</div>
  <div class="col2">col2</div>
  <div class="col2">col2</div>
  <div class="col6">col6</div>
</div>
<div class="row">
  <div class="col4">col4</div>
  <div class="col2">col2</div>
  <div class="col6">col6</div>
</div>
...
```
兩者之間的關係可以說是因為過去平面設計是依照網格系統來設計，轉移到現今網頁設計就可依循過去的軌道一脈相承，也方便讓設計師、工程師都有一個溝通的標準。
## 請找出任何一個與 Bootstrap 類似的 library
pure.css ，好處是因為是純 css 比較輕巧，風格也蠻清新的，但可能就不像 Bootstrap 可以配合 JavaScript 做那麼多種的效果。

[鐵人賽 7 - CSS 框架架構參考 PURE CSS](https://wcc723.github.io/css/2016/12/07/framework-pure-css/)
## jQuery 是什麼？
一個 JavaScript 的 library，把之前比較複雜的程式碼包裝更簡潔，舉個例子，原本丟 GET request 可能是這樣：
```javascript
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var resp = request.responseText;
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
```
用 jQuery 寫則是被包裝成這樣：
```javascript
$.ajax({
  type: 'GET',
  url: '/my/url',
  success: function(resp) {

  },
  error: function() {

  }
});
```
它也可以更方便地實現一些動畫效果，比如 fadeIn、hide 等等，原本在原生 JavaScript 寫到手痠的動畫效果用 jQuery 的 method 就可以快速實現，當然盛行的原因不只這個，寫網頁有個很靠北的地方是瀏覽器兼容性的問題（特別是 IE），在這個瀏覽器可以跑，另一個瀏覽器說不定沒辦法跑，寫起來就很麻煩，jQuery 可以說是大大解決了相關問題，過去才會被廣為使用。
### 逐漸式微
但時至今日瀏覽器兼容性的問題沒那麼嚴重，IE 也算是被放棄了。另外 CSS3 的動畫效果也逐漸增加，還有 Animated.css 等東西的出現、JavaScript 也有了各種語法糖，jQuery 就沒顯得那麼方便了，性能、現代框架崛起的種種原因也都讓 jQuery 不像過去那麼風行。
## jQuery 與 vanilla JS 的關係是什麼？
### 無論過去、現在或未來，vanilla JS 都會是最輕量化的框架！沒有之一！

因為它就是原生 JavaScript 語法。

vanilla JS 指的是原生的 JavaScript，jQuery 則是 JavaScript 的 library，jQuery 用的還是 JavaScript，只是把各種語法包裝起來，使用起來比較簡單、程式碼比較簡潔，但就算用了 jQuery，還是會用到原生 JavaScript。

[精通VanillaJS](https://www.ithome.com.tw/voice/106182)
[What is VanillaJS?](https://stackoverflow.com/questions/20435653/what-is-vanillajs)

### 小感想
這週的感想是沒感覺有享受到 jQuery 讓語法變簡潔的爽快感，特別是這篇內容 [新手的困擾，Javascript 跟 JQuery 傻傻分不清楚](https://dotblogs.com.tw/maplenote/2014/07/21/146024) 講的我很有感，回傳東西的型別、語法什麼的都要花時間搞清楚，關於 $(this) 的坑也踩了，然後 ```.parent```、```.find```這些語法寫成一長串看了不是很舒服（但其實也是我自己要寫一長串的問題），來來回回處理後會覺得天啊好像回去用 vanilla JS 比較省時間和清晰喔 XDD 
