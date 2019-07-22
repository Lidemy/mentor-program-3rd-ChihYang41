## Postcss 好處、為什麼需要它
1. 彈性、很客製化，想用什麼 plugin 自己裝，不想用就拆掉
2. 速度快
3. 可以結合預處理器來使用，雙劍合璧。

## Postcss 壞處
搞懂各種 plugin 要花時間成本（就是嫌麻煩）

## 最簡單用法 - 以 autoprefixer 為例
按照 [autoprefixer官網文件](https://github.com/postcss/autoprefixer)，Command line 照下面這樣輸入就可以了
```
npm install postcss-cli autoprefixer
npx postcss *.css --use autoprefixer -d build/
```

安裝 Postcss cli，然後用 postcss 這個 command line 來把原本的 css 套上 prefix 並丟到 build 資料夾。

不過我用完之後打開處理好的 css 檔，發現咦都沒加上前綴詞欸，可是過程又沒報錯，是不是我哪裡用法錯了 XDD
## Webpack 用法
其實我沒成功，更多時間在搞懂 Webpack 在幹嘛。目前就是成功把 js 檔輸出變成 bundle.js 這樣，試著使用 Postcss 就失敗了，但還不知道錯在哪，決定先提交作業再花時間研究，待我慢慢探索（？）

這邊附上一些過程中找到的中文資源：

### Webpack 文章
[PostCSS](https://cythilya.github.io/2018/08/10/postcss/)

[PostCSS配置指北.md](https://github.com/ecmadao/Coding-Guide/blob/master/Notes/CSS/PostCSS%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8C%97.md)

[Webpack教學 (一) ：什麼是Webpack? 能吃嗎？](https://medium.com/@Mike_Cheng1208/%E4%BB%80%E9%BA%BC%E6%98%AFwebpack-%E4%BD%A0%E9%9C%80%E8%A6%81webpack%E5%97%8E-2d8f9658241d)

[Webpack 實作入門1：寫給 “非Node.js開發者” 的教學](http://www.mrmu.com.tw/2017/08/18/webpack-tutorial/)

[Webpack 實作入門2：打包 CSS / SCSS 與 加入 Bootstrap](http://www.mrmu.com.tw/2017/08/18/webpack-tutorial2-css-scss/)

### WebPack 影片
[Webpack 前端自動化開發超入門](https://www.youtube.com/watch?v=vyI-Ko6fvKU)
