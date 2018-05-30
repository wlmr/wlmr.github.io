% Regular expressions - a guide

When first approaching this subject I was surprised to find a lack of well-written and concise manuals. Hence I will attempt 

Most text processors per line


#### Anchors
^ and $
Anchors are used to define locations within the line. "^A" will match all lines beginning with an "A" while "A$" will match all lines ending with an A. Note that "^" must be the first symbol of the regex, just as "$" has to be last.

#### Character Sets
These define whole sets of characters to match. for instance "[abcdefg]" will look out for any of the chars "a-g". 

As a matter of fact it is possible to use ranges just like this [a-z].

Negation is done by adding a "^" inside the square brackets. [^a-z] would search for anything but a-z.


#### Modifiers
When you want to search for multiples of your character set you use modifiers. 

The most common one is "*". This matches with zero or more multiples of the given character set. [0-9]* will find a match anywhere there is zero or more numbers.

##### "\{" and "\}"
Next up is "\{" and "\}". The reason for their asymmetry can be found in a strive for backwars compability. "{" & "}" were already in use and so we were left with "\{" and "\}". Since this knowledge doesn't improve our ability to catch regular expressions lets move on to what the symbols mean.

When a character set needs to be multiplied a specific number of times or a number of times somewhere in a range of numbers. 

##### "\<" and "\>"
Say you want to find all matches of "ilsner". The regex "ilsner" would however also match "pilsner". searching for " ilsner " would fix it but then an instance of ilsner in the beginning or end of a line or sentence would not return a match. "\<[iI]lsner\>" is the final solution!

##### "\(" and "\)"
Wanting to find occurrences of two identical character sets requires some way of remembering the previous found instance. The regex "\([a-z] \{4,9\}\)\1" will find 

#### Extended Regular Expressions
Seemingly most programs today suport extended regular expressions.

##### ?
Matches 0 or 1 instances of the character set.

##### +
Matches one or more copies of the character set.

##### (a|b)
Searches for either a or b.

#### Examples
[a-z]\{4,9\} will match 4-9 consecutive lower case letters.
[a-z]\{4,\} will match 4 or more consecutive lower case letters.
[a-z]\{4\} will match 4 consecutive lower case letters.

