## 為什麼我們需要 React？可以不用嗎？
可以不使用。

目前學了一個禮拜，覺得使用 React 有幾個好處：

1. state 跟 UI 綁定，製作 SPA 頁面比較方便。
2. 可以 import、export 各種東西，配合 webpack 用模組化的方式來撰寫，檔案分工更明確。
3. 把程式碼切分成各個 component，比較方便維護，因為出問題就直接去找那個 component 就好。

到現在為止我覺得用 React 把網頁變成 SPA 後，使用者體驗還蠻不錯的，但或許有些網頁不需要 SPA，以及狀態管理沒有那麼複雜的話，可能就不一定需要用到。

## React 的思考模式跟以前的思考模式有什麼不一樣？
### React 思考模式
關注 state 的變化，只要操作 state，UI 就會跟著變，你操作的不是畫面，而是因為你操作了 state 畫面才變。

### 過去的思考模式
操作 DOM，也就是直接去找 DOM 本人，殺進他家，塞資料給他然後改變畫面。

## state 跟 props 的差別在哪裡？
### state
component 本身的資料，所以可以直接在 component 內部用 setState 做改變。

### props
父子 component 之間溝通的橋樑，如果父想要傳給子資訊，就必須透過 props 來做連結。

大概像是大學時期的小孩，孩子要拿錢沒辦法直接自己用 setState 「提取爸爸戶頭的錢」，而是必須透過「手機(props)」和爸爸有所連結，說嗚嗚我沒錢了，然後你爸再用內部的「提款 Method」來改變他戶頭的 state。（這比喻好像怪怪的，家庭之間變好冷血）

## 請列出 React 的 lifecycle 以及其代表的意義
* constructor：component 建立的第一個 method，建構並初始化物件，通常會在這裡做 component state 的設置、bind method 的 this。

* render：處理 JSX 物件的階段，另外官網建議 render 盡量保持pure，例如盡量少在這邊處理 props 以及 state。

* componentDidMount：前面都還沒真正把東西展現到畫面上，把 component 真正塞到 DOM tree 的階段叫 「Mount」，經過 mount 後才是真正展示到畫面上，所以有關於 DOM 的操作在這地方會比較適合，才能確保不會有「response 在 DOM 建立好就回來」而出錯的狀況。

* shouldComponentUpdate：這個 function 的 true 和 false 決定 state 改變之後要不要呼叫 render function。

* componentDidUpdate：改變 state 就會叫它出來，「希望 state 更新後做某某事情」時可以使用。

* componentWillUnmount：負責做垃圾回收的 function，負責把不想使用的東西給清除掉，比如清除 timer。