## CSS 預處理器是什麼？我們可以不用它嗎？
CSS 預處理器就是讓 CSS 可以像寫程式那樣進行編寫，比如可以做像是宣告變數、function、import 檔案等方式來寫 CSS，主要就是讓 CSS 更好維護、更好讀、然後可以切分檔案讓分工更明確。

當然可以不使用它，應該是說 CSS 預處理器依然是要把檔案 compile 成 CSS 檔，所以最終都是在寫 CSS，只是 CSS 預處理器讓人可以更加方便快速的撰寫。
## 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。
### Expires
制定一個絕對的時間，比如
```
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```
瀏覽器收到這個 Response 後，如果沒超過這個時間，就會把資源給快取起來。

但這個的問題是如果電腦時間和這個不同，像是比他還要快很多，那就會永遠被當作是過期的，就不會做快取。

[Expires](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires)
### Cache-Control
#### max-age

設定這個資源快取過期的時間，比如設定 ```Cache-Control: max-age=300```，就是 300 秒內不會過期。

#### no-store
設定不要有快取。

#### no-cache
和前者不同，指的是每次都會檢查檔案有沒有更新，沒更新就用快取內的檔案，有更新就下載新的檔案到快取內。

#### 關於我對 Cache-Control 的疑惑
在 MDN 中，[Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) 裡面寫到 Cache-Control 可以放在 Reqeust 和 Response 的 Header 中。但依照普遍的理解應該是由 Response header 決定 Cache 的設定，為何 Request 可以設定 Cache-Control 呢？這樣有什麼意義嗎？

於是我找了 [Why cache-control HTTP header for requests?](https://stackoverflow.com/questions/47507679/why-cache-control-http-header-for-requests) 、 [Why is Cache-Control attribute sent in request header (client to server)?](https://stackoverflow.com/questions/14541077/why-is-cache-control-attribute-sent-in-request-header-client-to-server) 兩篇文來解答疑惑。

**結論**： Cache-Control 在 request 中設置是 client 端對 server 端表達「希望的設置模式」，但真正 Cache 的設定如何還是看 response 來決定的。

## Stack 跟 Queue 的差別是什麼？
### Stack
![avatar](https://upload.cc/i1/2019/07/21/LBy5cr.png)

如圖所示，它儲存資料的方式是由下往上疊，而你要取用的時候也只能由上往下拿，也就是「後進先出」，大概就像是吃品客洋芋片那樣。

### Queue
![avatar](https://upload.cc/i1/2019/07/21/csaT3Y.png)

一樣如圖，儲存資料的方式和 Stack 一樣，但是取資料的方式則相反，是「先進先出」，也就是像排隊那樣，先到先贏。

## 請去查詢資料並解釋 CSS Selector 的權重是如何計算的（不要複製貼上，請自己思考過一遍再自己寫出來，沒有很完整也行）


### 權重順序：
```!important > inline style > Id > class、attribute、	Pseudo-class > element、Pseudo-Element > *```

依照這個順序，我們可以把權重寫成像下面這樣（當中的權重沒有包含 *）
```
0, 0, 0, 0, 0
```
### 全域選擇器 *
如果 CSS 寫這樣（只有寫 * )

```CSS
* {
    margin: 0 auto;
}
```
那權重就是
```
0, 0, 0, 0, 0
```
### element
如果 CSS 寫這樣
```CSS
div {
    margin: 20px 0;
}
```
那權重就是
```
0, 0, 0, 0, 1
```
如果這時把前面兩者同時寫在一起，而兩者同樣都在改變 margin 呢？
```CSS
* {
    margin: 0 auto;
}

div {
    margin: 20px 0;
}
```
那 div 就會蓋過前面的 *，因為權重比較大。

### class
接著依此類推
```css
.container {
    margin: 40px auto;
}
```
權重會是
```
0, 0, 0, 1, 0
```
### ID
```css
#myId {
    margin: 60px auto;
}
```
權重會是
```
0, 0, 1, 0, 0
```

### inline style
如果在 HTML 寫 inline style：
```HTML
<div style="color:red"></div>
```
那權重就會是
```
0, 1, 0, 0, 0
```

### important
權重會是
```
1, 0, 0, 0, 0
```
當中權重最大的就是 !important，但並不建議隨便亂用，因為只有 !important 可以蓋過權重更高的 !important，因此亂用的話要不就是很難蓋過去，不然就是..要在各種地方狂加 important。

### 選擇器注意點
#### 如果指向同個東西，但權重一樣怎辦？
寫在後面的會蓋過寫在前面的。
#### 可以寫一堆 class 蓋過一個 id 嗎？
不行，因為它不會進位，所以只要有一個「更高權重的」就會蓋過前面。
#### 可以示範幾個例子嗎？
舉幾個例子

1. **權重高蓋過權重低**
```css
.box {
    background: red;
}

.container .box {
    background: yellow;
}
```

這種狀況下，前者權重是 ```0, 0, 0, 1, 0``` ，後者是```0, 0, 0, 2, 0```，因此後者的背景色會蓋過前者寫的。

```css
.box{
    font-size: 18px;
}

#box{
    font-size: 36px;
}
```
假使同一個 element 都具有 class box 和 id box，這時候後者```#box```權重為```0, 0, 1, 0, 0``` ，會蓋過前者 ```.box```的權重```0, 0, 0, 1, 0```，因為 Id 權重較高。

2. **權重一樣，指向同個對象**
```css
.card{
    background: red;
}
.card{
    background: blue;
}
```
雖然權重一樣，指向對象也一樣，但是後面的會蓋過前面的。

3. **權重一樣，指向不同對象**

```css
.card{
    font-size: 18px;
    background: red;
}

.card-info{
    background: blue;
}
```
```.card-info``` 如果是包在 ```.card```裡面，背景色會改變，但是會繼承 ```font-size: 18px```，因為執行順序是：「先套用 .card 寫的內容，再套用 .card-info，蓋過 background 屬性。」

### 參考資料
[MDN Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

[HTML CSS(v1) Style 的優先次序](http://magicjackting.pixnet.net/blog/post/75300105-html-css(v1)-style-%E7%9A%84%E5%84%AA%E5%85%88%E6%AC%A1%E5%BA%8F)

[Day20：小事之 CSS 權重 (css specificity)](https://ithelp.ithome.com.tw/articles/10196454)
