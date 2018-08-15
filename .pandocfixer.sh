#!/bin/bash
# Run this together with the name of the _draft/-file that you want --mathjax to fix math for
# $1 = filename without extention

title=$(echo "$1" | sed -e "s/[^a-zA-Z]*//" -e "s/_/ /g")

pandoc -s _drafts/$1.md -o _posts/temp$1.html --mathjax && 
  echo -e "---\nlayout: post\ntitle: \"$title\"\n---" > _posts/$1.html && 
  cat _posts/temp$1.html >> _posts/$1.html && 
  rm _posts/temp$1.html
