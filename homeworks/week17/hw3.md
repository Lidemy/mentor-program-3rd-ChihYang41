## hw3：Hoisting
```javascript
var a = 1
function fn(){
  console.log(a)
  var a = 5
  console.log(a)
  a++
  var a
  fn2()
  console.log(a)
  function fn2(){
    console.log(a)
    a = 20
    b = 100
  }
}
fn()
console.log(a)
a = 10
console.log(a)
console.log(b)
```
### 輸出
```javascript
undefined
5
6
20
1
10
100
```

## 原因
### 編譯 globalEC
```javascript
globalEC: {
    VO: {
        fn: function,
        a: undefined
    },
    scopeChain:[gloabalEC.VO]
}
```
### 執行 global EC
```javascript
gloabalEC: {
    VO: {
        fn: function,
        a: 1
    },
    scopeChain:[gloabalEC.VO]
}
```

### 編譯 fnEC
```javascript
fnEC: {
    AO: {
        fn2: function,
        a: undefined
    },
    scopeChain:[fnEC.AO, gloabalEC.VO]
}
```

### 執行 fnEC
**第一個 ```console.log(a)```**：因為目前在自身 scope 中 a 是 undefined，所以輸出 undefined。

接著執行第二行，a = 5，所以變成這樣：
```javascript
fnEC: {
    AO: {
        a: 5
    },
    scopeChain:[fnEC.AO, gloabalEC.VO]
}
```
執行到下一行，**第二個 ```console.log(a)```** 會輸出 5。

接著執行 ```a++```，因此變成這樣：

```javascript
fnEC: {
    AO: {
        a: 6 // a++
    },
    scopeChain:[fnEC.AO, gloabalEC.VO]
}
```
```var a``` 則是因為有宣告過，不鳥他。

接著執行到 fn2()，開始編譯

### 編譯 fn2EC
```javascript
fn2EC: {
    AO: {},
    scopeChain:[fn2.VO, fnEC.AO, gloabalEC.VO]
}
```
### 執行 fn2EC
**第三個```console.log(a)```** 因為自身 scope 找不到 a，因此往 ```fnEC.AO``` 找，找到 6，因此輸出 6。

執行 ```a = 20```，但自身 scope 找不到 a，所以```fnEC.AO``` 找，找到 a，賦予 20。

因此現在 ```fnEC``` 變成這樣：

```javascript
fnEC: {
    AO: {
        a: 20
    },
    scopeChain:[fnEC.AO, gloabalEC.VO]
}
```

執行 ```b = 100```，但自身 scope 找不到 b，所以往```fnEC.AO``` 找，依然找不到 b，再往```globalEC.VO``` 找，依然沒有，因此就在```globalEC.VO```  中宣告一個 b 的變數，並賦予 100 的值。

所以現在 ```globalEC``` 長這樣：
```javascript
gloabalEC: {
    VO: {
        fn: function,
        a: 1,
        b: 100,
    },
    scopeChain:[gloabalEC.VO]
}
```
此時 fn2EC 執行完畢。

### 繼續往下執行 fnEC
**第四個```console.log(a)```** 在自身 scope 找到 a 為 20，所以輸出 20。

此時 fnEC 執行完畢。

### 繼續執行 globalEC
**第五個```console.log(a)```** 從自身 scope 找到 a 為 1，因此輸出 1。

執行 ```a = 10``` ，此時 ```globalEC``` 長這樣：
```javascript
gloabalEC: {
    VO: {
        fn: function,
        a: 10,
        b: 100,
    },
    scopeChain:[gloabalEC.VO]
}
```

執行 **第六個```console.log(a)```**，從自身 scope 找到 a 為 10，因此輸出 10。

執行 **```console.log(b)```**，從自身 scope 找到 b 為 100，輸出 100。
