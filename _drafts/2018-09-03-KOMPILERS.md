## the canonical compiler

By splitting the compiler into different parts only a little bit of it has to be changed to compile to another machine (__Frame Layout__ and __Instruction Selection modules__). To change source code language only the modules up to __Translate__ needs to be altered.

### Different stages:

front end
+ Lex -- Breaking the source code down into tokens
+ Parse -- Analyze the phrase structure of the program
+ Semantic Actions -- Determine the meaning of each phrase
+ Semantic Analysis
mid
+ Frame Layout
+ Translate
+ Cononicalize
+ Instruction Selection
+ Control Flow Analysis
+ Dataflow Analysis
+ Register Allocation
+ Code Emission

### Front end

independent of code language (can be reused for different languages)

__Lexical analyzer (scanning)__ -- read the high level code and form different __tokens__. SOURCE CODE TEXT -> TOKENS

Example of different tokens matched with regex
+ IF      - if
+ THEN    - then
+ FOR     - for
+ ID      - \w+
+ INT     - [1-9]
+ FLOAT   - [1-9]\*[0-9]+ \.[0-9]+
+ STRING  - "[a-zA-Z]"
+ CHAR    - [a-zA-Z]
+ PLUS    - \+
+ INCR    - \++
+ NE      - !=
+ SEMI    - ;
+ COMMA   - ,
+ LPAREN  - (

Tokens can also be matched using FSM - finite state machines or FA -- finite automata -- as they are refered to in the textbook.
The finite automaton used must however be deterministic, i.e. one input answers to one edge and one edge only.

__Rules for lexer:__
+ longest match -- so that the lexer doesnt generate four ID/variable tokens of the word "word"  

__Regex to DFA:__


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


### 180910

NFA -- nondeterministic finite automata

Regex Vs. context-free grammar -- With CFG recursion is simple to describe.

__CFG example:__
P = 



###180911

#### ambiguities

+ bin expressions 
+ priorities -- by creating new non
        change:
        E -> E "+" E
        E -> E "*" E
        E -> INT | "(" E ")"
        to:
        E -> E "+" T
        E -> T
        T -> T "*" F
        T -> F
        F -> INT
        F -> "(" E ")"

+ associativity

#### Transforming to equivalent grammar

+ canonical form
        Expr -> Expr "+" Term
        Expr -> Term
        Term -> Term "*" Factor
        Term -> Factor
        Factor -> INT
        Factor -> "(" Expr ")"

+ BNF
        Expr -> Expr "+" Ter    Expr -> Expr "+" Term
+ EBNF


#### LL-parsing
a.k.a:

+ Leftmost-derivation
+ Top down
+ Recursive-descent
+ Predictive parsing

__LL-problems__
+ common prefix -- when several productions of the same nonterminal 
+ left recursion --  





----------




