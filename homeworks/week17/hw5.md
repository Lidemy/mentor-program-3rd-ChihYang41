## 這週學了一大堆以前搞不懂的東西，你有變得更懂了嗎？請寫下你的心得。
## Event Loop
### 之前
以前完全沒聽過這東西，所以好像無從比較。

### 現在
知道 Event Loop 的運作模式，知道 call stack、Web APIs、callback queue。

另外，我終於搞懂為什麼
```javascript
var btn = document.querySelectorAll('button')
for(var i=0; i<=4; i++) {
  btn[i].addEventListener('click', function() {
    alert(i)
  })
}
```
這段程式碼運作有問題的原理，之前大概就知道改成 let 可以怎麼看而已，然後全域變數是 i = 5 所以印出 5 這樣，但其實背後還有一堆東西根本解釋不出來。

這問題放在 Closure 的時候說，但其實也牽涉到 Scope、Event Loop，就是全部是息息相關的，當我能夠用自己的方式來重新理解這段問題該怎麼解釋的時候無敵感動 Q_Q

## Scope、Hoisting
### 之前
知道全域變數、區域變數，然後知道 function 內可以拿到 function 外的值，知道盡量不要污染全域變數。

Hoisting 的理解就在可以在宣告前使用他這樣。然後變數會是 undefined。
### 現在
知道 Execution Context、Scope Chain 的概念，然後從 JavaScript 引擎模擬編譯、執行的過程，知道 VO、AO，可以很清楚的透過模擬來了解為什麼我在 function 中 scope 是如何運作。

然後也透過理解更底層的運作原理，知道為什麼在宣告之前使用的話那個變數會是 undefined。

## Closure
### 之前
完全不敢碰，想說很複雜。
### 現在
看影片的當下我都聽的懂，但覺得被搞得更混亂。

比如為什麼 Closure 扯到作用域、扯到 Eexcution Context、Scope Chain，應該是說當下聽得懂在幹嘛，但是不知道關聯性。

後來我自己去找[Javascript Closure tutorial ( Closures Explained)](https://www.youtube.com/watch?v=71AtaJpJHw0) 影片來看，重點就是一句:
>「Closures are nothing but FUNCTIONS WITH PRESERVED DATA.」
>

所以跳脫要把這些東西關聯起來的執念，去單純了解 Closure 的本質，再消化一下 Execution Context、Scope chain，就會了解 Closure 就像是怨念那樣，把應該成佛消散的 function 緊緊抓在原地，讓 function 變成地縛靈。

## prototype 
### 之前
看過[了解JavaScript中原型(prototype)、原型鍊（prototype chain）和繼承(inheritance)的概念](https://pjchender.blogspot.com/2016/06/javascriptprototypeprototype.html)，但看不懂在說什麼。
### 現在
看影片當下有點傻眼，不知道什麼叫做把```d.__proto__ = Dog.prototype```兩者做連結。

後來是去看[該來理解 JavaScript 的原型鍊了](https://github.com/aszx87410/blog/issues/18)，然後從 [Javascript继承机制的设计思想](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)，從設計初衷著手，用 OOP 的繼承開始理解我才領悟的。

## this
### 之前
在 Week9 左右看完 Huli 文章一度以為自己懂，大概知道物件導向的 this、function 內的 this 還有箭頭函示的 this 指向什麼。

但 JavaScript 物件內的 this 其實不懂。

### 現在
重看一次文章後，蠻清楚知道 this 會是誰了，特別是 JavaScript 物件內的 this 搞懂原則之後就是一法通，萬法通（可能沒那麼誇張）

另外我在看影片最大的困難就是 apply 和 call，看的當下知道第一個參數指向 this，但配合前面看 OOP 章節，特別是 new 那節，我整個腦袋就亂到爆炸。

不過現在沒問題了！覺得這些東西都變得友善好多啊～

## 小感想
學習這些基本觀念的過程很奇妙，剛開始聽不太懂，又或者是看作業知道輸出，就以為自己懂，但看 JS201 影片又突然覺得自己不懂，因為很難關聯起來，不知道前後影片的關聯性。

總之就是一直在懷疑人生，等我真正確定自己懂的時候是在寫作業的時候，我能夠真正用自己的話解釋出來的時候我才知道自己通了，就是一切的運作流程和概念都是息息相關的，很像打坐悟道。

我也發現這些東西是沒辦法分開理解的，比如 closure 講到 scope，但 hw2 是 Event Loop + Scope，而真正要解釋輸出也的確會牽涉到 Event Loop。

又或者是講到物件導向時講到 ```apply()``` ，然後用這個說明 constructor，接著又扯到 this，第一次我完全聽不懂在說什麼，超級精神渙散，但就是硬看下去，等到進入發散狀態，腦內資訊好像又自己重新整理並消化了。

接著換個吸收方式，我決定先看文章再看影片，比如原型鍊、this 我都先看文章，再回頭看一次影片，這才發現自己懂了，我覺得文章的慢步調比較適合自己，影片的快節奏反而是要在看完文章後，有一定認知基礎上才能理解，看的當下重播好幾次可能都還無法理解。

結束這週的心得是，我覺得「先看文章，再看影片」效果比較好，文章的脈絡似乎比影片還要清晰，可以順順讀下去，前後文關聯性強，影片我會跟不太上。

另外就是在看影片的時候要抓對理解的角度，因為影片分散成零碎的章節，眼光可能因此變得比較狹隘，對於這些觀念是碎塊狀的，這樣就不容易把觀念貫通；要把整個東西用宏觀角度來看，才可以把所有東西串再一起。越講越像幹話，但這是切身的領悟 QQ 比較具體的作法就是看下個章節的時候，試著跟前一個章節在腦內一起跑一遍程式碼，又或者隨便寫個程式碼從零到有思考看看。

這週真正感動的地方大概是...Huli 這系列文章我都看懂在幹嘛了，對。
