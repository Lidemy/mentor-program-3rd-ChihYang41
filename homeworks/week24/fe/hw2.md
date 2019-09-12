## Redux 如何解決非同步（例如說 call API 拿資料）的問題

利用 middleware 來解決相關問題，比如 call API 的話有 redux-thunk、redux-promise middleware 等等的。

middleware 就是在你發出 dispatch 後還會把 action 經過 middleware 處理再送去 reducer 那裡。

middleware 背後運作模式大概類似這樣：
```javascript=
const customMiddleware = store => next => action => {
  if(action.type !== 'custom') return next(action)
  // 這裡運作你要的 code
}
```

也就是 functional programming 的寫法，經過重重篩選後回傳 action。