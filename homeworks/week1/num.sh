#!/bin/bash
# Program:
#     Create JavaScript files.
# History:
# 2019/04/18    ChihYang41    First release

for (( i=1; i<=$1; i=i+1 ))
do
    touch $((i)).js
done
echo "檔案全數創建完畢"