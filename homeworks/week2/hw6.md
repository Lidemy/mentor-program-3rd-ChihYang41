``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 宣告 function isValid，函式中有參數 arr。

2. 執行最後一行的 function isValid，回到第一行。

3. 執行第一行 function ，代入 [3, 5, 8, 13, 22, 35] 到 arr。

4. 執行第二行，宣告 i 為 0 ，判斷 i 有沒有小於 arr.length，有的話往下執行，沒有的話停止這個 for loop，i 為 0 小於 arr.length 所以往下一行執行。

5. 判斷 arr[0] 有沒有小於等於 0，有的話回傳 'invalid'，並結束 function；沒有的話下一層迴圈。

6. i + 1 變為 1，判斷 i 有沒有小於 arr.length，有的話往下執行，沒有的話停止 for loop，i 為 1 小於 arr.length 所以往下一行執行。

7. 判斷 arr[1] 有沒有小於等於 0，有的話回傳 'invalid'，並結束 function；沒有的話下一層迴圈。

8. i + 1 變為 2，判斷 i 有沒有小於 arr.length，有的話往下執行，沒有的話停止 for loop，i 為 2 小於 arr.length 所以往下一行執行。

9. 判斷 arr[2] 有沒有小於等於 0，有的話回傳 'invalid'，並結束 function；沒有的話下一層迴圈。

10. i + 1 變為 3，判斷 i 有沒有小於 arr.length，有的話往下執行，沒有的話停止 for loop，i 為 3 小於 arr.length 所以往下一行執行。

11. 判斷 arr[3] 有沒有小於等於 0，有的話回傳 'invalid'，並結束 function；沒有的話下一層迴圈。

12. i + 1 變為 4，判斷 i 有沒有小於 arr.length，有的話往下執行，沒有的話停止 for loop，i 為 4 小於 arr.length 所以往下一行執行。

13. 判斷 arr[4] 有沒有小於等於 0，有的話回傳 'invalid'，並結束 function；沒有的話下一層迴圈。

14. i + 1 變為 5，判斷 i 有沒有小於 arr.length，有的話往下執行，沒有的話停止 for loop，i 為 5 小於 arr.length 所以往下一行執行。

15. 判斷 arr[5] 有沒有小於等於 0，有的話回傳 'invalid'，並結束 function；沒有的話下一層迴圈。

16. i + 1 變為 6，判斷 i 有沒有小於 arr.length，有的話往下執行，沒有的話停止 for loop，i 為 6 不小於 arr.length 所以不執行迴圈，往下面執行第五行程式碼。

17. 執行第五行，宣告 i 為 2，判斷 i 有沒有小於 arr.length，有的話往下執行，沒有的話停止這個 for loop，i 為 2 小於 arr.length 所以往下一行執行。

18. 判斷 arr[2] 是否不相等於 arr[1]加 arr[0]，如果不相等，就回傳 'invalid'，並結束 function，如果相等，就繼續下一層迴圈。判斷為相等，執行下一層迴圈。

19. i + 1 變為 3，判斷 i 有沒有小於 arr.length，有的話往下執行，沒有的話停止這個 for loop，i 為 3 小於 arr.length 所以往下一行執行。

20. 判斷 arr[3] 是否不相等於 arr[2]加 arr[1]，如果不相等，就回傳 'invalid'，並結束 function，如果相等，就繼續下一層迴圈。判斷為相等，執行下一層迴圈。

21. i + 1 變為 4，判斷 i 有沒有小於 arr.length，有的話往下執行，沒有的話停止這個 for loop，i 為 4 小於 arr.length 所以往下一行執行。

22. 判斷 arr[4] 是否不相等於 arr[3]加 arr[2]，如果不相等，就回傳 'invalid'，並結束 function，如果相等，就繼續下一層迴圈。判斷為不相等，所以回傳 'invalid'並且結束 function。