## 跟你朋友介紹 Git

### 為什麼要有 Git，以及 Git 是什麼？
菜哥你會有這種煩惱，是不是因為寫笑話的時候要一直改內容，比如你第一個版本叫 Version 1，然後一直改一直改，多出了 V2、V3、Final、最終Final版本等等的，不覺得很麻煩嗎？要是你覺得當初某個版本寫得比較棒想回去查看，你就要從一堆檔案翻找，因為你不知道每個版本內容改了什麼，Git 就是為了這個誕生的，它可以幫你紀錄你每個笑話的演進、更改了什麼，記錄什麼笑話被新增、刪除或修改。現在給你一個機會，不是 E 會，也不是 F 會，就是 G 會，讓你跟我學 Git。

### 基礎 Git 操作 － 沒有學不起，學會就可以
開頭就直接來個單押 x 1 給你，接下來開始教學啦。

1. 首先在 Terminal 切換到你的笑話資料夾，打上```git init```，這個作用是讓你的資料夾進入 Git 版本控制的狀態。

2. 如果你有不想被版本控制的檔案，打```touch .gitignore```建立檔案，把不想被控制的檔案名打進 .gitignore 中。

3. 把你要加進版本控制的檔案都先暫存，比如你要加進 joke.txt 好了，就打上```git add joke.txt```，如果你檔案很多要一次加進去，就打上```git add .```。

4. 當你覺得笑話寫的告一段落，就打```git commit -m"commit message"```，這個動作就是把你暫存區的檔案都丟進版本庫（Repository）裡面。commit message 就像附註一樣，內容會寫比如你更動了什麼、新增了什麼，就看你要打什麼。

5. 可以隨時用```git status```查看你現在的狀態，像是更動什麼檔案，什麼檔案沒被 Git 控制、或是還沒 commit 等等都會顯示，按 q 就可以離開。

6. 可以用```git log```來看你的 commit 紀錄，作者、commit 時間、commit message 都會顯示出來，也是按 q 就可以離開。

### 進階 Git 操作 － 學完了基礎，笑話有前途

一樣不囉嗦，單押 x 1 直接送上來，學完了基礎應該會有一些疑問，比如我可以不影響原本笑話的前題下，新增資料夾開發一個實驗性質的笑話，等到我確定效果不錯後再合併嗎？或者是能不能上傳到一些和 Git 很友好的空間，方便我備份等等的？沒問題，我不只教你備份（背份）喔，我還教你胸份跟腿份。

1. 如果你要開發實驗性質的笑話，然後這個實驗笑話的資料夾要叫做 experiment 的話，先打```git checkout master```，這個指令的用意就是讓你切換到 master 這個 branch，然後再打上```git branch experiment```，它會複製原本 master 內容再新增一個叫 experiment 的 branch，接下來你只要用```git checkout experiment```切換到新 branch 就可以放心去做實驗笑話了。

2. 當你寫完實驗笑話覺得不錯想要合併到原本 branch 的話，比如想要把 experiment 合併到 master，那就先切換到 master，然後打```git merge experiment```，就可以合併囉，記得如果兩個 branch 內容有衝突的話，就要自己手動把內容更動。

3. 如果想要把檔案上傳的話，推薦你 GitHub，先去 GitHub 按右上角的 New repository，取好名字後創建，接下來按照 GitHub 上指示就可以創建囉。

4. 如果想要把本機上更新的笑話和 GitHub 同步，就用```git push origin branchName```，branchName 就是看你想上傳哪個 branch。

5. 如果你想抓下 GitHub 上面檔案，就輸入```git pull origin branchName```，概念跟 push 差不多，只是一個上傳一個下載。