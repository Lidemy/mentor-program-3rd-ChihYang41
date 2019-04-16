## 交作業流程

1. 在 master 新開一個 branch ：```git branch hw1```
2. 切換到新開的 branch：```git checkout hw1```
3. 打開要寫的作業，寫到一個段落之後做保存：```git commit -am"commit message"```
4. 作業全寫完後，要把作業上傳到 GitHub 上：```git push origin hw1```（提醒，push 前記得確認把作業都 commit 了）
5. 請求與 master 合併：按下右上方綠色的按鈕 Compare & pull request，打完標題與內容後按 Create pull request，並複製網址
6. 到[作業區] (https://github.com/Lidemy/homeworks-3rd/issues)發 issue，貼上剛剛複製的網址，記得 issue 的標題要按照格式
7. 確認老師通過作業，close 你的 issue 後，用 git checkout master 回到 master
8. 把 GitHub 的東西和本機同步：```git pull origin master```
9. 刪除掉原本的 hw1 branch：```git branch -d hw1```

* 如果老師要求修改作業內容的話，回到步驟 1，進行同樣步驟
