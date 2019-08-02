# Week18 hw4

###### tags: `Week18`

## gulp 跟 webpack 有什麼不一樣？我們可以不用它們嗎？
### gulp
gulp 是 task runner，也就是你把任務寫好，然後它就會照著你寫的 task 順序把任務處理完。
#### 為什麼要用？
讓工程師可以把心思花費在更有意義的產出上，而不是做重複性的動作，比如你要用 pug、scss、還有壓縮檔案，一個一個做很麻煩，所以才要用 gulp。

就像鋼鐵人在鋼鐵人 1 在山洞做出第一套鋼鐵裝的時候，他還要把裝備一個一個穿上去；到了復仇者聯盟 1 他可以邊走邊穿裝備了，他就是把「穿鋼鐵裝」這些重複性高、麻煩的工作自動化了。

用 gulp 也是為了更快速的處理這些重複性的事情，所以可以想像自己在當一個...比較不帥的鋼鐵人，對。

### webpack
webpack 就是讓你可以像寫 node.js 一樣 import 各種檔案。
#### 為什麼要使用？
過去我們可能會在 head 用 script、link 引入各種 JavaScript、CSS 程式碼，但這樣會有幾種壞處：
1. 亂到爆，沒辦法清楚看到程式碼依賴哪些外部的 library。
2. 會有引入順序的問題
3. 如果你引入了某段程式碼，但如果沒有使用到，就會白白下載沒用的 code 

使用 webpack 可以解決這些問題，把檔案像寫 node.js 那樣模組化，最後再把所有檔案都輸出成一個檔案，因此可以更方便的管理檔案。
### 兩者的差別？
跟前面提到的一樣，gulp 是 task runner，寫好處理的流程，輸入指令它就可以幫你跑完重複性的事務；webpack 則是 moudle bundler，就是讓你用 node.js 寫法來寫前端的東西，讓你可以在自己的 JavaScript 檔案中引入各種其他檔案。所以一個是自動化工具，一個是打包工具，。

分出兩者的差別之後，這週我主要的疑惑是什麼狀況下需要兩者共同使用呢？因為目前的東西不夠複雜，所以兩者在處理的事情上有重疊，所以這週有部分時間也在找怎樣的狀況需要兩者共同使用，但現在還沒辦法真正體會 QQ

[gulp 有哪些功能是 webpack 不能替代的？](https://www.zhihu.com/question/45536395)

[Task Runners (Gulp, Grunt, etc) and Bundlers (Webpack, Browserify). Why use together?](https://stackoverflow.com/questions/33561272/task-runners-gulp-grunt-etc-and-bundlers-webpack-browserify-why-use-toge)

[Gulp + Webpack or JUST Webpack?](https://stackoverflow.com/questions/33558396/gulp-webpack-or-just-webpack)

### 可以不使用它們嗎？
可以，但就是讓你寫 code 更麻煩。

到了最近幾週，我覺得都是在學習「如何更方便、快速地處理過去的某些任務」，這些工具之所以出現，就是讓你更簡單的處理日常寫 code 遭遇到的事情。

比如寫 css 遇到某些問題或是改東西很麻煩，所以出現 scss/sass，但如果任務一多，可能要把 sass 轉譯成 css、壓縮各種檔案、用 babel 轉換 js 語法等等，所以又出現 gulp；然後檔案又可能會常常有載入順序的問題、或者是引入一堆東西很麻煩又亂，於是又有 webpack。

## hw3 把 todo list 這樣改寫，可能會有什麼問題？
好像在 Week8 hw2 有類似疑問，取得留言板 API 的資料後重新渲染整個頁面，那時候發現的問題就是整個重新渲染很浪費資源吧，因為你真正更新的就只有一小部分的東西，但一次就是更新整個頁面，沒有在管什麼新資料舊資料的。

解決辦法 huli 是說可以取得未更新與更新後兩者之間的差集，多出來的就是新增的東西，然後把新增的東西渲染到畫面上就好，其他保持不變。
## CSS Sprites 與 Data URI 的優缺點是什麼？
### CSS Sprites
#### 優點
1. 一次就載入大張圖片、只需丟一次 request，省資源
2. 圖片載入更快

#### 缺點
1. 需要花費更多開發、設計的時間，因為處理各種排版很麻煩
2. 維護也麻煩，如果有更動的話，整張圖就要更動
### Data URI
#### 優點
1. 透過 base64 編碼，以文字方式儲存，可以直接寫在 HTML、CSS 中，減少下載圖檔的 reuqest。

#### 缺點
1. 因為是文字，所以沒辦法 cache
2. 檔案資料有變化就要重新編碼
3. 可讀性不好
