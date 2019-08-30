## React Router 背後的原理你猜是怎麼實作的？
### history
主要是依靠 window 裡面的 history 物件。

* **location**：裡面有一些關於 url 的 property，比如 ```path```為 url 當前的路徑、```search```為當前 url 的 query string、```hash```為當前 url 的 hash。

* **pushState**

* **replaceState**

### React Router
* Router ：consturctor 會創建一個叫 history 的 state，當中就是 window.history 的內容。當 Link 被點擊，發生路由變化的時候，就會觸發 setState 設置 history，當中設置的 state 關係到傳遞給 Route 的東西。扮演「監聽、掌控整個路徑資料」的角色。

* Route ：透過 computeMatch 函式來判斷現在路徑是否匹配，如果匹配就渲染 render 中的 component，算是一個負責判斷「當前路徑要渲染什麼」的角色

* Link :路由變化的原因通常是因為我們點擊了 Link，因為 Link 裡面包裝的是在 onClick 上寫了有關 setState 的 method，點擊後 history 發現到路由有變化，history 的 state 因此變化。扮演「改變 URL」的角色。


流程圖：
![image](https://zhuzhengyuan.xyz/2019/01/03/understanding-react-router/react-router-road.png)

### 小結
我先從 window 的 history 開始理解，到處看資料大致知道 React Router 是依靠這個來實踐的，比如靠裡面的 pushState 或 replaceState，但光是理解這兩個函式就滿滿的黑人問號。

比如 pushState 說可以傳入三個參數，其中一個是 URL，MDN 寫到「在 pushState() 被呼叫之後，瀏覽器並不會馬上嘗試載入這個 URL ，但是它可能在以後嘗試載入這個 URL。」

看完想說嗯？什麼叫可能？那我傳入之後要怎麼知道它怎樣才會載入？

然後因為這樣其實後面的 React Router 實踐原理也不太懂，大部分就是自己腦補用猜的 XDDD

最後的理解就決定簡單化，單純看官方文件寫的：
>React Router 是建立在 history 之上的。 簡而言之，一個 history 知道如何去監聽瀏覽器 URL 的變化，並且解析這個 URL 轉化成 location 的 object， 然後 Router 使用它匹配到路由，最後正確地渲染對應的 component。

結論就是覺得自己還是沒很懂，嗚嗚。
### 參考資料
[Histories](https://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html)

[History](https://developer.mozilla.org/en-US/docs/Web/API/History)

[Understanding The Fundamentals of Routing in React](https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e)

[操控瀏覽器歷史紀錄](https://developer.mozilla.org/zh-TW/docs/Web/API/History_API)

[理解 react-router 中的 history](https://zhuzhengyuan.xyz/2018/07/29/understanding-history-in-react-router/)

[浅谈 react-router 实现原理](https://zhuzhengyuan.xyz/2019/01/03/understanding-react-router/)

[react-router 源代码学习笔记](https://juejin.im/entry/5accc0b4f265da23a1423cba)

## SDK 與 API 的差別是什麼？
SDK(Software Development Kit) 是用來開發某個平台、產品的工具包，比如開發 Android 有 Android SDK、Facebook 有 Facebook SDK，是用來輔助你開發那個平台用的一個集合體，裡面可能有文件、範例、和一些工具、模擬器等等。

API 則是接口，讓你取用這個功能，但不用知道背後的運作邏輯。

越講越抽象，假設今天有個家具店好了，它推出了「木製傢俱組合包」，裡面有各種木製傢俱的範例、材料、製作工具，木製傢俱組合包就是 SDK，提供你開發木製傢俱的環境。

然後假如這個組合包提供一些功能，比如有些工具能夠使用，像是電鋸之類的、或是什麼一鍵做出木椅，這些提供的功能就是 API。

## 在用 Ajax 的時候如果不是同源，預設是不會把 Cookie 帶上的，要怎麼樣才能把 Cookie 一起帶上？

Server 端要把 Response header 的 Access-Control-Allow-Credentials 設置為 true；Access-Control-Allow-Origin 則不能是 ```*```  ，不然會出錯。

假如後端是用 express 寫大概是這樣設置：
```javascript=
const express = require('express');
const app = express();
const cors = require('cors'); // 這邊用了 cors 這個 middleware
app.use(cors{
  credentials: true,
  origin: '某某 url'
});
```

Client 端則是把 request 的 withCredentials 設置為 true，就可以在 reqeust headdr 帶上 cookie。

用 axios 大概是這樣：
```javascript=
import axios from 'axios';
axios.defaults.withCredentials=true;
```
### 參考資料
[XMLHttpRequest.withCredentials MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/withCredentials)

[axios中cookie跨域及相關配置示例詳解](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/226116/)

[axios的cookie跨域以及相关配置](https://segmentfault.com/a/1190000011811117)
