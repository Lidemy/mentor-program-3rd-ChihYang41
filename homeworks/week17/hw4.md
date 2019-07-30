## hw4：What is this?

```javascript
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??
```

## 輸出
```javascript
2
2
undefined
```

## 原因
在 JavaScript 物件下的話，簡單找 this 指向誰的方法是：「把呼叫 function 之前的東西都丟進 ```call()```。」

而因為 ```call()``` 的第一個參數就是 this，所以你就可以快速找到 this 了！

以下就按照這個原則來解釋 this。
### obj.inner.hello()
相當於 ```obj.inner.hello().call(obj.inner)```，所以 this 是 ```obj.inner```，這時候 value 會是 2，所以 this.value 就是 2，因此印出 2。。

### obj2.hello() 
相當於 ```obj2.hello().call(obj2)```，而 obj2 又賦予 obj.inner 的值，所以 this 是 ```obj.inner```，這時候 value 是 2，所以 this.value 會是 2，因此印出 2。

### hello
相當於 ```hello.call()```，如果在瀏覽器下會指向 window，在 node.js 會是 global，在嚴格模式下會是 undefined。

而 ```console.log(this.value)``` 不管在哪個環境都會是輸出 undefined。
