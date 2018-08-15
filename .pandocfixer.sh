#!/bin/bash

title=$(echo "$1" | sed "s/[^a-zA-Z]*//")

pandoc -s _drafts/$1.md -o _posts/temp$1.html --mathjax && 
  echo -e "---\nlayout: post\ntitle: \"$title\"\n---" > _posts/$1.html && 
  cat _posts/temp$1.html >> _posts/$1.html && 
  rm _posts/temp$1.html
