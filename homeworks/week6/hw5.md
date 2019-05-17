## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
* ```<time>```：用以表示時間，比如 ```<p> 現在時間是 <time>20:00</time>，給我去寫 code 。</p>```

* ```<address>```：用來表示作者的聯絡資訊，像是 email 等等，用法像是：

	```
	<address>
  		<a href="mailto:ChihYang41@gmail.com">ChihYang41@gmail.com</a><br/>
	</address>
	```

* ```<smaller>```：可以縮小字型，用法就是直接包覆著要縮小的字型，至於縮小多少，我看 MDN 是寫 0.8em。

## 請問什麼是盒模型（box modal）

![avatar](https://ithelp.ithome.com.tw/upload/images/20171231/20107705cSYOze2GtX.png)

接下來會以上面圖片來說明盒模型當中的四個要素： 「content、padding、border 以及 margin。」

* ```content```：元素內容的大小，為上圖中藍色的部分。寬用 width 表示，長用 height 表示。

* ```padding```：內距，為 content 到 border 之間的距離，為上圖中綠色的部分，調整 padding 會吃到 background 所調整的顏色。

* ```border```： 邊框，上圖淡黃色的區塊。

* ```margin```：外距，也就是這個元素的邊框之外和其他元素的距離，為上圖最外圍橘色的地方。


以預設值而言，一個元素的長寬算法是 content + padding + border（藍色 + 綠色 + 淡黃色），舉例來說，今天有個元素 div width 是 100px，height 是 100px， padding 為 20px， border 為 2px，這樣子元素 div 的寬會是 100 + 20px + 2px + 20px + 2px = 144px，長度也是 100 + 20px + 2px + 20px + 2px = 144px。

由於這樣很麻煩，切版還要算來算去的，因此幫元素加上 ```box-sizing:border-box``` 後，元素的長寬就會固定， padding 跟 border 則會包括在元素指定的長寬之中，不影響元素的長寬。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
* ```inline```：元素只佔本身的空間，不能調整 width 跟 height。預設為 ```dispaly:inline```的 tag 有像是 ```<a>、<span>```

* ```block```：元素會佔一整行，除了本身的空間之外，其他都會用 margin 佔滿，並且可以調整 width 跟 height， 預設為 ```display:block```有 ```<div>、<p>```等等。

* ```inline-block```：同時擁有前面兩者的特性，元素只佔自己本身的空間，但是可以調整 width 跟 height。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

* ```static```：是每個 HTML 元素的預設值，在這個狀態下，不能用 top、left、bottom、right 調整元素位置。

* ```relative```：相對定位，在這個狀態下依然在所有元素排版的世界中，並且可以用 top、left 等等方式來調整位置，它會以「原本位置」為定位點來位移，而位移並不會影響到其他元素，也就是不會推擠到其他元素，而是會跟其他元素重疊。

* ```absolute```：絕對定位，在這個狀態中它會跳脫所有元素排版的世界，並且會向上尋找「非 position:static」的元素來當作定位點位移，如果都找不到就會以 body 當作定位點。依然可以用 top、left 等調整位置，並且不會影響到其他元素，而是會和其他元素重疊。

通常的用法是：把父元素容器寫 ```position:relative```，要調整位置的元素寫 ```position:absolute```，以此把父元素當作定位點來移動，絕對定位在生活中常見的例子像是網頁廣告上的叉叉。

* ```Fixed```：類似於絕對定位，但它的定位點是依照 viewport 來決定，並且可在頁面中固定住元素，不會因為頁面滾動而消失。生活中常見的例子像是購物網站中，固定在右下角的購物車。


