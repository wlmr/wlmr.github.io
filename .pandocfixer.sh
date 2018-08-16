#!/bin/bash
# Run this together with the name of the _draft/-file that you want --mathjax to fix math for
# $1 = filename without extention

if [ -f $1 ]; then
  filename=$(echo $1 | sed -e "s/\..*$//" -e "s/^[^\/]*\///g" )
  title=$(echo $filename | sed -e "s/[^a-zA-Z_]*//g" -e "s/_/ /g" )

  pandoc -s $1 -o _posts/temp$filename.html --mathjax && 
    echo -e "---\nlayout: post\ntitle: \"$title\"\n---" > _posts/$filename.html && 
    cat _posts/temp$filename.html >> _posts/$filename.html && 
    rm _posts/temp$filename.html
fi

  
