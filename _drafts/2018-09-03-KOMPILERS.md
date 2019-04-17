# the canonical compiler

In this post I will try to summarize the structure of a typical compiler. A compiler is a program that transforms high level source code into assembly code. Assembly code is the closest thing we have to binary that is still made up of text. Hence before the compiler all code was written in assembly code. To get a feel of how slow it is to write assembly code here's an example showing how to print a string to stdout:

```
.global _start
.data
message: .ascii "printing this is all the code does!\n"
.text
_start:
movq $1, %rdi       # stdout file descriptor
movq $message, %rsi # message to print
movq $14, %rdx      # message length
movq $1, %rax       # sys_write
syscall
movq $0, %rdi       # exit code = 0
movq $60, %rax      # sys_exit
syscall
```

The compiler is built up of well defined components, each one piping its output to the next module. As a structure for this post I will start with the first module and move through the compiler, finishing of with assembly code generation.

## The different modules

1. lexical analysis/scanning
2. syntactical analysis/parsing
3. semantical analysis 
4. intermediate code generation
5. optimization
6. taget code generation


### lexical analysis / scanning

#### Example of token generation using regular expressions:

+ IF      - if
+ THEN    - then
+ FOR     - for
+ ID      - \w+
+ INT     - [1-9]
+ FLOAT   - ([1-9][0-9]\*|0)\.[0-9]+
+ STRING  - "[a-zA-Z]\+"
+ CHAR    - [a-zA-Z]
+ PLUS    - \+
+ INCR    - \++
+ NE      - !=
+ SEMI    - ;
+ COMMA   - ,
+ LPAREN  - (

This is the first stage and therefore the one that uses the source code as input. In the scanning stage the code is transformed into defined tokens. This can be done using regular expression. A integer could perhaps be defined by the regular expression: INTEGER = 0|[1-9][0-9]\*. Saying that the number is either a 0 or a 1,2,3,4,5,6,7,8 or 9 followed by zero or more arbitrary ints. 

Without introducing two rules this system could however lead to some ambiguities. E.g. what should be matched if the scanner finds the string "iffff"? Should it send back and IF-token or an ID? Introducing: __longest match__ and __rule priority__. These are straightforward self-explanatory. 

#### errors

Errors in the code found in this stage are apropriatly refered to as lexical errors. These include all text that cannot be interpreted. E.g. "¤" in the code below:
```
int \¤ useless(int x){
    return x;
}
```

If no errors are found this module will output a bunch of token and feed them into the next module.

### syntactical analysis / parsing

In this section the tokens are transformed into an abstract syntax tree or AST for short. 

To create this tree we make use of Context-Free Grammars. 

#### CFG

The Context-Free Grammar is a formal system made up of production rules, nonterminal symbols -- one of them being the start symbol -- and terminal symbols. Using this the parser recursively goes through the tokens. It usually looks something like this:
```
Exp -> Exp "*" Exp
Exp -> Exp "+" Exp
Exp -> INT
``` 

Using this notation in practice is as beautiful as it is powerful. This CFG is written in canonical form. There is also BNF -- Backus-Naur Form -- and EBNF -- Extended Backus-Naur Form. In BNF the "|" operator is permitted, allowing for several productions to be place on one line:
```
Exp -> Exp "*" Exp | Exp "+" Exp | INT
```
EBNF Goes even further and introduces \*, \+, \[\] and \(\).
The "\*" is called the Kleene-star and has the same meaning as in a regex, i.e. "zero or more" -- i.e. a list. Also \+ is brought from the regex world. The \[\] creates an optional of whatever is inside the brackets.

##### translation

+ repetition: 
    X -> AB\*C
    becomes
    X -> ADC
    D -> CD
    D -> γ
+ alternative:
    X -> A(...)C
    becomes
    X -> ADC
    D -> (...)
    


##### example

```
Program -> Func*
Func    -> Type IdDecl IdDecl* Block
Block   -> Stmt*;
Stmt    -> Decl | Assi | CallStmt | While | If | Else | Ret

...

Else    -> Block
Ret     -> Expr

...

Expr    -> Call | Binexpr | IdUse | IdDecl | Num

...

Type    -> BoolType | IntType

...

IdUse   -> <ID>
IdDecl  -> <ID>
Num     -> <Num>
``` 

The CFG works by swapping the left hand side for the right hand side. An example:

```
int inc(int v1){
    return v1+1;
}

int div(int n, int d){
    return n/d;
}
```
The root of the AST would be a PROGRAM node as this is the start symbol. The root node can have zero or more Funcs. In this case the PROGAM has two Funcs so these become the first leaves. From the first Func grows four new branches. Type becomes an IntType, IdDecl becomes and ID as "inc" doesnt correspond to any of the other tokens in the scanner. The second IdDecl corresponds to the function arguments. This grows to a new leaf of ID. The Block will in a similar way grow further and further until only __terminals__ remain. 

#### ambiguities

If it is possible to derive two different parse trees from the one sentence the CFG is ambiguous. How can we get rid of ambiguities and make the process deterministic? First of all we have to decide if we want an __LL__- or an __LR-parser__.


#### philosophy

If you think about it you quickly realize that nothing cool in our world is designed top-down. The human brain doesn't consist of a conscience ruling over the rest of the brain. No, our conscienceness is merely another part of the brain. There is no ship bridge issuing commands. The brain is simply a massive net of neurons. The neuron has no intelligence on its own, it can only respond to stimuli by firing electrical impulses. It is together in great numbers that meaning and complex behaviour starts to erupt. Not only the brain -- every part of man works this way -- we are in fact no more than a collection of cells and bacteria. It was when AI begun to be modelled bottom-up that the area became something to be proud of. It is why communism -- top-down -- failed and it is why capitalism -- bottom-up -- works. This is why cryptocurrencies, and decentralized systems are so cool. Top-down never occurs in nature and is very limited. Have this in mind when you learn about LL-parsing and LR-parsing.


#### LL

The __L__eft to right __L__eftmost derivation-parser builds the tree top-down. The parser is also defined by how many lookahead tokens it incorporates. An LL(1) has only one lookahead. The number of lookaheads define how many tokens ahead the parser should look at before using a production rule. When designing a LL(1)-grammar there are two pitfalls to look out for namely left-recursion and common prefix. We will return to these in the construction section.

##### construction

When constructing a LL(1)-parser we follow the following algorithm:

1. write the grammar on canonical form
2. compute Nullable, FIRST and FOLLOW
3. construct a LL-table using the results from the previous step
4. if no conflicts occur the grammar is LL(1) and can be implemented using a recursive decent.

The nonsense you were told to compute in step two turns out to be vital to the construction and is described below. 

For each production p: X -> γ we want to check the following.
__First(γ)__ -- the set of tokens that occur first in a sentence derived from γ.
__Nullable(γ)__ -- is a function that tells you if it is possible to derive ε from γ.
__FOLLOW(X)__ -- the set of tokens that occur directly after an X-sentence.

The table should have a column for every possible terminal and a row for every nonterminal. E.g.

```
p_0: Stmt -> Expr
p_1: Expr -> Expr "*" Expr
p_2: Expr -> Expr "+" Expr
p_5: Expr -> ID
p_6: Expr -> INT
```

|LL-table | ID    | "+" | "\*"| INT | 
|---------|:-----:|:---:|:---:|:---:|
| stmt    |p_0    |     |     |p_0  |
| expr    |p_1,p_2|     |     |p_1  |

We don't have to continue further than to expr as we already have collisions in the table. The collision is caused by the previously mentioned common prefix and left-recursion problems. 



##### solving left recursion

As the LL-parser moves through the source code from left to right, substituting as soon as it finds a suitable match it can get stuck in endless recursion, substituting a nonterminal for itself. E.g.

```
p_0: Stmt -> Expr
p_1: Expr -> Expr "*" Expr
p_2: Expr -> Expr "+" Expr
p_5: Expr -> ID
p_6: Expr -> INT
```

In p_1: Expr -> Expr "\*" Expr -> (((Expr "\*" Expr) "\*" Expr) "\*" Expr) "\*" Expr -> ... 

As an LL-parser always choses the leftmost substitution it can end up deep in the depths of recursion.

To get rid of this endless recursion we rewrite the rules by creating the nonterminals Term and Factor. This way, Expr can't be substituted into itself. The rule here is to avoid productions of the type X -> Xab. By introducing new variables this procedure becomes quite simple. This design is, however, still not working as we still have to deal with the problem of common prefix.
```
p_0: Stmt -> Expr
p_1: Expr -> Term "+" Expr
p_2: Term -> Factor "*" Term
p_3: Term -> Factor
p_4: Factor -> ID
p_5: Factor -> INT
```

##### solving common prefix

Common prefix occurs when two or more productions of the same nonterminal starts with the same symbol. LL(1) cannot handle this, LL(2) can handle if the only first token is the same, LL(3) can handle if the two first tokens are the same, etc. In our grammar rule p_2 & p_3 contains a common prefix. By concatenating the two rules and introducing "Factors" as either being ε or '"\*" Term' we solve this. 

```
p_0: Stmt -> Expr
p_1: Expr -> Term Terms
p_2: Terms -> "+" Expr
p_3: Terms -> ε
p_4: Term -> Factor Factors
p_5: Factors -> "*" Term
p_6: Factors -> ε
p_7: Factor -> ID
p_8: Factor -> INT
```

Ladies and gentlemen, I present to you a grammatically correct LL(1)-grammar.

#### LR

Moving on the the cool stuff. LR builds the tree from the bottom. 



















## x86-64 Assembly

The simplest of programs:

.global \_start
.text
\_start:
        movq $0, %rdi
        movq $60, %rax
        syscall

Everything after __.global__ is visible to the linker and __\_start__ defines where to start executing. Everything defined under __.text__ should be read-only and executable. Hence all code goes there. __Syscall__ is an instruction using the RDI, RSI and RDX registers. Depending on what is in these at the time of the syscall the program will talk to the OS in some way.

### Registers

__RAX, RBX, RCX, RDX, RSI, RDI, RSP, RBP, RIP, R8, ..., R15__ are all 64 bit wide registers. These are used for storing temporary values.
__RAX__ is typically used for storing return values.
__RSP__ is the stack pointer which always points to the top of the stack.
__RBP__ also known as the base pointer. Originating from the __rbp__ you can find all the variables on the stack.

### Operands

Each instruction takes 0-2 operands. The following types of operands exist:

+ Register or r
    + %rdx -- the value stored in RDX
+ Immediate value (constant) or im
    + $0 -- the decimal value 0
    + $lbl -- address of label lbl
+ Memory location or m
    + (%rdx) -- the the value at the address stored in RDX
    + 8(%rbp) -- 


### Procedures

Essentially the methods of assembly code a procedure is a snippet of instructions that can be reused. For this purpose we have __call__ and __ret__. 

__call__ -- pushes the instruction pointer register -- __RIP__ -- on to the stack and replaces it with the operand.

__ret__ -- pops the return address from the stack and overwrites the __RIP__. 


### Stack Management

The stack will mostly look something like the table below. Upwards in the text means lower addresses. %rsp should always point to the top of the stack. The stack is used to keep track of outer values. For instance when entering a method from within a method the stack is used to remember the data necessary for the outer function until returning with the result from the inner method. 

I believe the quickest way to learn is through examples so here goes:

#### Entering a procedure, step by step


1. Before we call a procedure it is important to push all parameters that we need to bring with us. Preferably we push them in reverse order. This way the first param will be highest up on the stack.
```
pushq param2
pushq param1
pushq param0
```


2. Now we call the procedure called function. This will push the current %rip to the top of the stack so that we know where to pick up the pieces after returning from the procedure.

`call function`

3. We are now inside the function and it is time to push the old base pointer. We do this so that we can get back to the previous params and variables.

`pushq %rbp`

4. Now only one thing remains before we can begin the actual procedure, namely updating %rsp to be on top of the stack.

`movq %rsp, %rbp`

5. Now that everything is set up correctly we can begin assigning values to variables or whatever you want your procedure to do. Local variables are to be put above the %rsp. The first variable should have the address -8(%rbp) and the following -16(%rbp), etc. When we have calculated the return value this should be added into the %rax by convention.

|      STACK     |
|:--------------:|
|                | _ %rsp
|Local variables | _ %rbp
|Old base pointer|
|Return address  |
|param0          |
|param1          |
|param2          |

6. Before we can begin the return journey we must clean up after us. First we remove all the local variables by assigning the value of the base pointer to the stack pointer.

`movq %rbp, %rsp`

7. Then we let the %rbp return home. We still have one thing to take care of before we can leave as well.

`popq %rbp`

8. Now we can return as well. We do this with the __ret__-instruction.

`ret`

9. Done! Our quest is over, we've returned successfully. Now the only thing that remains is to pop the arguments.

### Loops and conditionals
Conditionals in assembly are inverted since all we can do is jumping. Meaning we have to test if it is false and if so we have to jump out.

While:
```
loop_start:
    cmpq %r0x, %r1x
    jge loop_end
    #loop body
    jmp loop_start
loop_end:
```

If:
```
    cmpq $20, %rax
    jl else
    #do whatever
    jmp fi
else:
    #do if condition was false
fi:
    #done!
``` 

















-----


By splitting the compiler into different parts only a little bit of it has to be changed to compile to another machine (__Frame Layout__ and __Instruction Selection modules__). To change source code language only the modules up to __Translate__ needs to be altered.

### Different stages:

front end
+ Lexical analysis -- Breaking the source code down into tokens
+ Syntactic analysis -- Analyze the phrase structure of the program. Building an AST out of the different tokens.
+ Semantic analysis -- Checking types and names, to make sure all variable usages has been declared, and also assigns values to the 

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




----------




