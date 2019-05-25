## 什麼是 DOM？
DOM 就是把 HTML、XML、SVG 這類 Document 轉換為 Object，而 DOM 的結構是以階層關係來排序，並且將 Document 中的 element、text、attribute 轉換成一個一個的節點，而 DOM 用途是什麼呢？DOM 的用途就是讓 JavaScript 和瀏覽器可以溝通。

上面是文言文版本，白話文版本的話，我會用兩張圖來對比，這一張是 DOM tree 的示範圖：

![avatar](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png)

這是大雄家的族譜：

![avatar](https://camo.githubusercontent.com/23e81f1a1130fbecb8a502f1f16e3d743abf705f/687474703a2f2f61322e6174742e6875646f6e672e636f6d2f30342f38372f31393330303030313336353639353133313634393837333431383130322e6a7067)

看起來有 87% 像，既然大家都把元素的關係稱為父元素、子元素的，那我用族譜來看待應該不為過吧（？）你的 html 檔案變成族譜之後，JavaScript 就可以透過這張族譜，對瀏覽器說「欸，野比助的兒子野比大雄，當星期天的時候，你要去空地聽胖虎唱歌。」等等的方式來操作網頁元素。


## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
#### 事件傳遞機制的流程圖
![avatar](https://blog.techbridge.cc/img/huli/event/eventflow.png)

從上圖可以看到分為三個階段：
1. 從 Window 開始往 Target 傳遞的 Capture Phase

2. 到達 Target 後的 Target Phase

3. 從 Target 開始往上傳遞的 Bubbling Phase

我們從 Capture 和 Bubbling 的語意上來解讀事件傳遞的順序，Capture 就像是你要抓某個東西一樣，那東西就是 target ，因此是從 DOM tree 上層一路往下找尋目標，直到捕獲目標，這就是捕獲的階段；Bubbling 就像是泡泡會往上浮，一路從 target 漂浮到最高層的地方，所以稱為冒泡。

##### 小總結
所以我們可以把事件傳遞的順序用一句話總結「先捕獲，再冒泡」，從最上方的 Window 開始往下找尋目標為 Capture Phase，到達目標處後，就是 Target Phase，再從 target 一路往上漂浮，漂到最上方的 Window ，漂浮的過程就是 Bubbling Phase。

另外，在 Target Phase 沒有事件傳遞機制的順序，是按照程式碼的先後順序來決定哪邊先開始。

## 什麼是 event delegation，為什麼我們需要它？
因為事件傳遞機制的關係，我們可以從測試中發現，子元素觸發事件的時候，父元素同時也會因為冒泡的關係而被觸發。比如你點擊父元素 ul 中的三個子元素 li 其中之一，會發現父元素 ul 以及更上層的元素都會被點擊到。那如果我們要在 li 設置監聽事件的話，比起在三個 li 都寫監聽事件，不如把監聽事件設立在 ul 上，這樣就不需要設立三個監聽事件，而是只需要在 ul 設置一個監聽事件，這就是 event delegation。

好處就是方便並且效能更好，因為只要監聽一個元素就可以讓多個元素有同樣效果。

##### 譬喻時間
就像是今天大賣場發現有五個小偷，而五個小偷要逃跑一定會經過賣場大門，與其雇用五個保全叫他們在賣場內各自負責抓一個小偷，不如叫一個保全去賣場大門等待五個小偷，不僅省人力成本也比較不麻煩。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
1. ```event.preventDefault()``` 是讓元素預設的行為失效，比如點 a tag 會進入某個連結，但是寫上 ```event.preventDefault()``` 就會失效。值得注意的是，它並不會停止事件傳遞，只是讓原本元素預設的行為失效。

2. ```event.stopPropagation()``` 則是停止事件傳遞機制的過程，也就是把先前說的 event flow 的過程中斷，假如在冒泡階段的 body 寫上 ```event.stopPropagation()``` ，那事件就不會往上傳遞到 document、window 等更上層的地方，而是中斷在寫上 ```event.stopPropagation()``` 的地方。```event.stopPropagation()``` 也同樣不會影響到元素預設的行為，也就是說它只是停止事件傳遞機制，跟停止元素預設行為沒關係。

##### 小總結
```event.preventDefault()``` 跟 ```event.stopPropagation()``` 各司其職，並不互相影響，彼此沒有關聯。```event.preventDefault()``` 停止元素預設行為，不影響事件傳遞機制；而 ```event.stopPropagation()``` 停止事件傳遞機制，不會停止元素預設行為。


