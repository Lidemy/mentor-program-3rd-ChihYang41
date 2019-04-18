#!/bin/bash
# Program:
#     Print GitHub user's profile.
# History:
# 2019/04/19    ChihYang41    First release

curl -s https://api.github.com/users/$1 | grep -Po '"name":.*?[^\\]",' | cut -c 1-8 --complement;

curl -s https://api.github.com/users/$1 | grep -Po '"bio":.*?[^\\]",' | cut -c 1-7 --complement;

curl -s https://api.github.com/users/$1 | grep -Po '"location":.*?[^\\]",' | cut -c 1-12 --complement;

curl -s https://api.github.com/users/$1 | grep -Po '"blog":.*?[^\\]",' | cut -c 1-8 --complement;
