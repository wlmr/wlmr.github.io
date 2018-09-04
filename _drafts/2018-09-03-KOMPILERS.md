## the canonical compiler

### Front end

independent of code language (can be reused for different languages)

__Lexical analyzer (scanning)__ -- read the high level code and form different __tokens__. SOURCE CODE TEXT -> TOKENS
Different tokens
+ IF      - if
+ THEN    - then
+ FOR     - for
+ ID      - \w+
+ INT     - [1-9]
+ FLOAT   - [1-9][0-9]*\.[0-9]+
+ STRING  - "[a-zA-Z]"
+ CHAR    - [a-zA-Z]
+ PLUS    - \+
+ INCR    - \++
+ NE      - !=
+ SEMI    - ;
+ COMMA   - ,
+ LPAREN  - (


__Syntactic analyzer (parsing)__ -- form a tree of all the __tokens__

__Semantic analyzer__ -- make sure all methods have correct number of parameters and so on. This generates an attrubuted tree.

__intermidiate code generator__


### Back end

__Optimizer__

__Machine code generation__


source prog -> compiler -> assembly program -> assembler -> object program + library -> linker -> executable code

stack -- used i c-languages

heap -- 

## java

A.java -> javac -> A.class

.class-files can be run in the java virtual machine.

__jvm__ -- written i c++
