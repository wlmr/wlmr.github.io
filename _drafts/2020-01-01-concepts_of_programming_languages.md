## Chapter 1. Language Critique
-------------------------------------------------------------------------------------

There are __nine__ characteristics of programming languages, all affecting the readability, writability and/or reliability in different ways:

| characteristics            | Readability  | Writability   | Reliability   |
|:---------------------------|:------------:|:-------------:|:-------------:|
| simplicity                 | [x]          | [x]           | [x]           |
| orthogonality              | [x]          | [x]           | [x]           |
| data types                 | [x]          | [x]           | [x]           |
| syntax design              | [x]          | [x]           | [x]           |
| support for abstraction    |              | [x]           | [x]           |
| expressivity               |              | [x]           | [x]           |
| type checking              |              |               | [x]           |
| exception handling         |              |               | [x]           |
| restricted aliasing        |              |               | [x]           |

-----

### Criteria

#### readability

"The ease with which programs can be read and understood."

#### writability

"Writability is a measure of how easily a language can be used to create programs for a chosen problem domain. Most of the language characteristics that affect readability also affect writability. This follows directly from the fact that the process of writing a program requires the programmer frequently to reread the part of the program that is already written."

#### reliability

"A program is said to be reliable if it performs to its specifications under all
conditions."

### Characteristics

#### 1. simplicity
How many basic constructs are there? The most simplistic languages has lower readability. Take for example a language with only the possibility of adding numbers. Implementing multiplication would look rather convoluted and be hard to read. 

Too little simplicity however also leads to decreased readability. Take for instance a language with feature multiplicity, i.e. a language where there is several ways of doing the same thing, suddenly the programmer will be confused. Is there a difference between these constructs, he wonders, as he goes online to check?

Operator overloading is another example of another construct that makes languages confusing to the reader.

A small set of constructs is easier to learn than a big one, hence the writability increases as the simplicity increases. The risk of misuse when having a too many constructs should also be taken into account. 


#### 2. orthogonality
This beautiful and cleverly named characteristic measures how versatile and few the languages' building blocks are together with each other. The more things that can be created with a combination of as few number of primitive constructs as possible the more orthogonal is the language. 

Extremely low- or high orthogonality is bad for both readability and writability.

Extreme orthogonality induces some weird code. Just google Brainfuck. Completely unreadable as well as unwritable, nonetheless orthogonal as fuck.

With great orthogonality comes great responsibility, and great writability. A low level of orthogonality is synonymous to a lot of functions performing very specific tasks. Tough to learn and hence hard to write -- but might be easier to read.

#### 3. data types
More data types returns better readability. For instance, what does ` timeout = 1 ` mean?
Is it a boolean or should the program timeout for 1 ms? Once booleans are introduced ` timeout = true ` everything makes perfect sense.

#### 4. syntax design
Special words and form and meaning. Are the special words of the language self-explanatory? Is it clear what is going to run inside some loop -- and where its scope ends?

__grep__ is an example of bad syntax design in the world of shell commands. Why?



#### 5. support for abstraction
Since an abstraction is the process of removing details currently irrelevant, writability increases in the same way as expressivity.


#### 6. expressivity
It means that a language has relatively convenient, rather than cumbersome, ways of specifying computations. For example, in C, the notation `count++` is more convenient and shorter than `count = count + 1`. Another example is the keyword `for` in Java. All for-loops can be explained using while-loops. More constructs like the ones explained above, increases writability.

#### 7. type checking
Increases reliability by checking for type errors, either at compile-time or at run-time.

#### 8. exception handling
"The ability of a program to intercept ­run-​­time errors (as well as other unusual conditions detectable by the program), take corrective measures, and then continue is an obvious aid to reliability."

#### 9. restricted aliasing
Loosely defined, aliasing is having two or more distinct names in a program
that can be used to access the same memory cell. It is now generally accepted
that aliasing is a dangerous feature in a programming language, since altering one of the pointers' value changes also the other one.

Restricting aliasing increases reliability.


## Chapter 2: Three ways of language implementation
-------------------------------------------------------------------------------------

+ __Compiled__ -- Compiles source code into machine code. Fast, apart from the compilation step.

+ __Interpreted__ -- Code has to be run with an interpreter which, during runtime, executes the source code. N.B., Much slower!

+ __Hybrid__ -- Program is semi-compiled into something __almost__ as low level as binary code (in java called byte-code). When run, the byte-code is interpreted. Here, a JIT-compiler fits perfectly. A Just-In-Time-compiler checks the expressions being executed for parts where potential compilation would bring a speedup that outweighs the compilation time.




## Chapter 3: Syntax
-------------------------------------------------------------------------------------
 Syntax describes the possible structure (or form) of programs of a given programming language. Backus-Naur Form (BNF) grammars have emerged as the standard mechanism for describing language syntax. BNF grammars are used to describe languages when communicating with language adopters and compiler implementors. There are also many tools (particularly the yacc and antlr families of programs) for automatically generating parsers, programs that recognize whether an input program matches a grammar and, if it does, execute user-defined actions upon encountering certain language constructs.

#### 1. You should be able to determine whether a given property of a language is part of the syntax, of the static semantics, or of the dynamic semantics.
The __syntax__ describes the form of the language, which tokens can be put where, etc.

__Semantics__ concerned with the meaning of an expression, program or statement. __Static semantics__ makes sure that the program is meaningful to the compiler. E.g., what does it mean to add the integer 1 to the string "hello"? This might not be considered meaningful. During run-time __dynamic semantics__ determine how the program behaves. 
Example of a dynamic semantics-rule: _The expression x if C else y first evaluates the condition, C rather than x. If C is true, x is evaluated and its value is returned; otherwise, y is evaluated and its value is returned._


#### 2. You should be able to read a BNF grammar and understand the difference between terminals and nonterminals.
__BNF__ consists of rules made up of nonterminals and terminals. A terminal can be an integer, for instance, since these can't be further elaborated. A nonterminal is some sort of abstraction. An example could be the nonterminal <IF>. A rule usually looks something like:

    `<IF> -> 'IF' EXPR 'THEN' BLOCK | 'IF' EXPR 'THEN' BLOCK 'ELSE' BLOCK`

Where `|` means that an <IF>-nonterminal can be expanded to either `'IF' EXPR 'THEN' BLOCK` or `'IF' EXPR 'THEN' BLOCK 'ELSE' BLOCK`.

A grammar can describe the complete syntax of a language only using a collection of rules such as the one above.


#### 3. Given a BNF grammar, you should be able to write down examples of programs that can be generated by the grammar.
Consider the following grammar, where x, y, z are terminals: 
A → B C B
  | D x
B → D
  | y
C → x C x
  | C C
D → z B z
  | B
A is the start symbol. Give three examples of a string of tokens that can be generated by this grammar. 

A -> D x -> B x -> y x
A -> D x -> z B z x -> z y z x
A -> D x -> z B z x -> z z y z z x

#### 4. Given a BNF grammar, you should be able to tell whether a given program can be generated by the grammar. If the program is generated by the grammar, you should also be able to generate a parse tree for the program.
BNF can be used to check whether a program is syntactically correct. Starting with main rule, usually something like `PROG -> STMTS`, the PROG is expanded until only terminals remain. To go the other way around, i.e. reducing terminals to nonterminals, is just as meaningful. 

#### 5. You should be able to determine whether a given (small) BNF grammar is ambiguous (the problem is undecidable in general, so this skill only pertains to practically relevant examples as covered in the textbook).
Ambiguous grammars occur when more than one parse tree can be generated using the same program. Ambiguities can arise due to a lack of precedence, fixity, associativity or arity, of operators.


#### 6. Given a BNF grammar, you should be able to determine the associativity of any operator used therein.
Left-assoc rule:  `<A> -> <A> + <V> | <V>` . I.e. __LHS__ reoccurs as the first symbol of the __RHS__.
Right-assoc rule: `<A> -> <V> + <A> | <V>` . I.e. __LHS__ reoccurs as the final symbol of the __RHS__.


#### 7. You should be able to describe the difference between an object language and a meta-language.
An object language is any normal language used to describe objects in the world. A meta-language is a language that describes another language.


#### 8. Understand arity, fixity, and precedence, and associativity of operators

+ __arity__: how many arguments a function takes.
+ __fixity__: infix (1 + 2), prefix (+ 1 2) or postfix (1 2 +).
+ __precedence__: which sub-expression should first be evaluated?
+ __associativity__: decides which parameter to expand first.



## 4. Natural Semantics
-------------------------------------------------------------------------------------
There are many ways to describe semantics. In this course, we focus on natural semantics (also known as Big-Step Operational Semantics). Hence natural semantics == operational semantics.


#### 1. You should be able to read a specification of natural semantics.
#### 2. Given a natural semantics and a parse tree (or unambiguous expression), you should be able to compute the semantics of the given program.
#### 3. Given a natural semantics and a BNF grammar, you should be able to tell whether any parts of the semantics are undefined.


 Consider the following grammar and natural semantics, where the terminals are num, which may be any integer, and the symbols [ and ].

E  → [ NL ]
NL → ε
   | num NL

    [ n̅ ] ⇓ k    n - k = v
(L) -----------------------
          [ n n̅ ] ⇓ v

(E) [ n ] ⇓ n

Here, n̅ is a sequence of numbers. 

Compute the semantics of [ 1 2 3 10 50 ].

1. n = 1, n̅ = 2 3 10 50 
2. backtrack using (L) until [ n n̅ ] is [ 10 50 ]
3. then, according to (E), [ 50 ] ⇓ k (k == 50). n - k = v -> 10 - 50 = -40 . Now that we know that [ 10 50 ] ⇓ -40 we build our sequence again.
4. According to (L) [3 10 50] ⇓ v. If [10 50] ⇓ -40 and 3-(-40) = v = 43. So [3 10 50] ⇓ 43.
5. repeat step 4 with another prefix number.

#### 4. Given an understanding of what a state-free expression language is supposed to do, you should be able to write down a simple natural semantics for it.
?

#### 5. You should be able to understand the concepts of Environments in the context of natural semantics and be able to utilise it when reading and reasoning about natural semantics.
     
     v ∈ id
 ---------------
  E |- v ⇓ E(v)




## 5. Bindings and Lifetime
-------------------------------------------------------------------------------------
#### 1. You should understand the difference between static and dynamic type binding and be able to take advantage of either property in your programming.

Languages with __static type bindings__ forces the programmer to, while declaring the variable, also state which type it should be. The variable will then be stuck with this type for the rest of its life. Every programming language should be implemented with static type binding. With it the programmer has to think and make sure that all is well while writing the code.

__Dynamic type bindings__ does not require this explicit type declaration. Instead the interpreter or compiler has to set the type itself. It does this as soon as it is assigned a value, but the type could change at any new assignment. Could prove useful if you are lazy and want your program to be very generic. Could also come crashing down as you don't have any real say in the programming anymore. Be careful.


#### 2. Given a syntax, a compiler and a run-time system for a language, you should be able to determine whether the language is using static or dynamic type binding.

It probably uses static type binding since the language has a compiler. With an interpreter everything goes slow, hence a little extra time to figure out types for all the variables is negligible. If I have to be completely sure I'd check the parser in the compiler to see if a declaration requires a type. 

#### 3. static binding, stack-dynamic binding, explicit heap-dynamic binding, and implicit heap-dynamic binding.

+ __static binding__: Static variables are those that are bound to memory cells before program execution begins and remain bound to those same memory cells until program execution terminates. No run-time overhead for allocation and deallocation of static variables, although this time is often negligible. Storage cannot be shared among variables.

+ __stack-dynamic binding__: Stack-​­dynamic variables are those whose storage bindings are created when their declaration statements are elaborated, but whose types are statically bound.The advantages of ­stack-​­dynamic variables are as follows: To be useful, at least in most cases, recursive subprograms require some form of dynamic local storage so that each active copy of the recursive subprogram has its own ver- sion of the local variables. These needs are conveniently met by ­stack-​­dynamic variables. Even in the absence of recursion, having ­stack-​­dynamic local storage for subprograms is not without merit, because all subprograms share the same memory space for their locals. The disadvantages, relative to static variables, of ­stack-​­dynamic variables are the ­run-​­time overhead of allocation and deallocation, possibly slower accesses because indirect addressing is required. The time required to allocate and deallocate ­stack-​ dynamic variables is not significant.

+ __explicit heap-dynamic binding__: Explicit ­heap-​­dynamic variables are nameless (abstract) memory cells that are allocated and deallocated by explicit ­run-​­time instructions written by the programmer. These variables, which are allocated from and deallocated to the heap, can only be referenced through pointer or reference variables. The disadvantages of explicit ­heap-​­dynamic variables are the difficulty of using pointer and reference variables correctly, the cost of references to the variables, and the complexity of the required storage management implementation.

+ __implicit heap-dynamic binding__: Implicit ­heap-​­dynamic variables are bound to heap storage only when they are assigned values. In fact, all their attributes are bound every time they are assigned. High flexibility, high run-time overhead of maintaining all dynamic attributes.

#### 4. Given a syntax, a compiler and a run-time system for a language, you should be able to determine which storage binding(s) the language is using.

1. __Static variables__ are accessible and modifiable from anywhere.
2. __Stack-dynamic variables__ are local variables allocated on the stack. If recursion can be performed using one such variable it is stack-dynamic.
3. Check for keywords `new` or `del`. No such things? No __explicit heap-dynamic variables__.
4. If the language uses static type bindings it makes little sense for it to also use __implicit heap-dynamic variables__, as these are dynamic type bindings.


#### 5. lifetime of a variable

The lifetime of a variable is the time during which the variable is bound to a specific memory location. So, the lifetime of a variable begins when it is bound to a specific cell and ends when it is unbound from that cell.


#### 6. allocation and deallocation of a heap-dynamic variable

Regarding __explicit heap-dynamic variables__ allocation is usually signalled using a keyword such as `new`. This keyword also takes a type, lets say that the line is `int_node = new int`. Once `new int` is executed some memory cells are chosen to hold the object of type int. A pointer to the memory cells are finally normally returned.

Once the variable has finished all that was asked of her she wants to end her life. This is done through some keyword like `delete`. `delete int_node` ought to do the trick as this deallocates the memory cells given to her at `new int`. It is as if she had never existed.

As for __implicit heap-dynamic variables__ however, all of the above is carried out out of sight, hence the name.


#### 7. binding time, especially the difference between static and dynamic binding times

The time at which the binding takes place is called binding time. The binding time is not restricted only to run time but also language design time, language implementation time,
compile time, load time or link time.

A binding is __static__ if it first occurs before run time begins and remains unchanged throughout program execution. If the binding first occurs during run time or can change in the course of program execution, it is called __dynamic__.


## 6. Scoping
-------------------------------------------------------------------------------------
#### Concepts
#### 1. You should understand the difference between static scoping and dynamic scoping and be able to exploit either in your programming.

__Static scoping__ is so named because the scope of a variable can be statically ­determined—​­that is, prior to execution. This permits a human program reader (and a compiler) to determine the type of every variable in the program simply by examining its source code.
__Dynamic scoping__ is based on the calling sequence of subprograms, not on their spatial relationship to each other. Thus, the scope can be determined
only at run time.

Consider the following javascript code. Using __static scoping__ accessing `x` in `sub2()` is always the same, namely the `x` in `big()`. With __dynamic scoping__ our scope depends on the order of execution. So now the "correct" `x` to access is the one in `sub1()` as `sub1()` is the caller of `sub2()` and hence the parent scope.

function big() {
    function sub1() {
        var x = 7;
        sub2();
    }
    function sub2() {
        var y = x;
    }
    var x = 3;
    sub1();
}


#### 2. Given a language implementation, you should be able to write a program to determine whether the language uses static or dynamic scoping.
```
    function f() {
        var x = 42;
        g();
    }
    function g() {
        return x;
    }
    var x = 3;
    f();
```
Dynamic scoping is used if 42 is returned--otherwise it is static. 

#### 3. Referencing Environment
The referencing environment of a statement is the collection of all variables that are visible in the statement. The referencing environment of a statement in a static scoped language is the variables declared in its local scope plus the collection of all variables of its ancestor scopes that are visible.


## 7. Types
-------------------------------------------------------------------------------------

#### 1. The primitive types
    
+ __INTEGER:__ normally the integer comes in several different flavours. In Java there are four: short, int, long and byte, all of which are signed.  
+ __FLOAT:__ Most languages include two floating-​­point types, often called float and double. The float type is the standard size, usually stored in four bytes of memory. The double type is provided for situations where larger fractional parts and/or a larger range of exponents is needed.
+ __DECIMAL:__ Decimal data types store a fixed number of decimal digits, with the implied decimal point at a fixed position in the value. Decimal types have the advantage of being able to precisely store decimal values, at least those within a restricted range, which cannot be done with ­floating-​­point.
+ __BOOLEAN:__ True or false, nonzero or zero. Requires one bit in theory but in practice one byte. Why? Because there is no efficient way of addressing one memory cell (N.B. sing.). 
+ __ENUMERATION:__ A type that usually has a rather finite set of possible values. Enums are frequently used to model collections. A typical example: `enum days {Mon, Tue, Wed, Thu, Fri, Sat, Sun};`. 
+ __CHARACTER:__ Simply put: a character. Previously a char occupies one byte (ASCII) -- now a char needs two (Unicode).
+ __STRING:__ Simply put: a string of characters. The most common string operations are assignment, catenation, substring reference, comparison, and pattern matching. Intuitively one might think that a string ought be an array made of chars. Or perhaps a string should be its own primitive type? Should the length of a string be dynamic, limited dynamic or static? What about comparison of two strings with different lengths? Ignore the last part of the longer string? Or simply overflow the shorter entry? For each of these questions at least one language would answer affirmative. 
+ __SUBRANGE:__ Defines a subset of the values of a particular type.  
+ __RECORD:__ An aggregate of data elements in which the individual elements are identified by names. Great when you need data consisting of different types of data. In C, C++ and C# a record is called __struct__.
+ __TUPLE:__ A record with no name, so even more simple. Can be used to allow functions to return multiple values.
+ __LIST:__ N.B., _list_ as in functional programming!--No arrays allowed. The list type is a common parameter among the functions of the standard library _prelude_ in Haskell. `head l` returns the first value in the list. 
 fixa mer

+ __ASSOCIATIVE ARRAY:__ An associative array is an unordered collection of data elements that are indexed by an equal number of values called keys. In the case of ­non-​­associative arrays, the indices never need to be stored (because of their regularity). In an associative array, however, the user-defined keys must be stored in the structure. So each element of an associative array is in fact a pair of entities, a key and a value. An associative array performs lookups, adds and removals at speeds close to O(1). 
+ __UNION:__ A union is a type whose variables may store different type values at different times during program execution. If there is no type-checking for unions it is called a __FREE UNION__. By introducing an indicator of the current type of the union, a.k.a. __tag__ or __discriminant__, type checking is made possible. The union then becomes a __DISCRIMINATED UNION__.


#### 11. operator overloading
Redefine an arithmetic operator to do as you please.  

#### 12. strong typing and weak typing
A programming language is strongly typed if type errors are always
detected. This requires that the types of all operands can be determined, either
at compile time or at run time. The importance of strong typing lies in its ability to detect all misuses of variables that result in type errors.

#### 13. type checking and the differences between dynamic type checking, static type checking.
Type checking is the process of making sure that the operands of an operator are of compatible types. 

Static type checking involves type checking at compile time -- while dynamic type checking issues its type checks at run time. 

The penalty for static type checking is reduced programmer flexibility. Fewer
shortcuts and tricks are possible. Such techniques, though, are now generally
recognized to be error prone and detrimental to readability.

Due to the type defiant ways of the union-type static type checking is not enough. Type checking is complicated when a language allows a memory cell to store values of different types at different times during execution.


14. type equivalence, including the difference between nominal and structural type equivalence
15. type constructors
16. typing rules as part of type systems, and how to read such rules and utilise them in your reasoning about program semantics
17. the type preservation property, also known as subject reduction, of type systems
18. type parameters and parametric polymorphism
19. function types for subroutines
20. type classes
21. subtyping
22. covariance and contravariance of type parameters, and the arrow rule
23. bounded parametric polymorphism
24. definition-site variance and use-site variance of type parameters
25. Algebraic Datatypes as in Standard ML and their use in pattern-matching
26. automatic Type Inference


## 8. Expressions
-------------------------------------------------------------------------------------
#### Concepts
1. arithmetic expressions
2. boolean expressions and relational expressions
3. Different forms of object equality, including reference equality and structural equality
4. operand evaluation order and how it affects the outcome of programs
5. short-circuit evaluation and how it affects the outcome of programs
6. referential transparency and side effects
7. list comprehensions and their semantics
8. type coercion expressions, both explicit and implicit, including narrowing conversions and widening conversions
9. conditional expressions


## 9. Statements and Control Constructs
-------------------------------------------------------------------------------------
#### Concepts
1. assignment statements, including compound assignment
2. two-way selection statements
3. multiple-selection statements
4. counter-controlled loops
5. logically controlled loops
6. datastructure-controlled loops


## 10. Subprograms and Parameter Passing
-------------------------------------------------------------------------------------
#### Concepts
1. subprograms, including formal arguments and actual arguments
2. local variables in subprograms
3. nested subprograms
4. parameter passing modes
    by value
    by result
    by value-result
    by reference
    by name
    by need
5. subprograms as parameters, subprograms as return values, Closures
6. activation records


## 11. Pointers, References, and Arrays
-------------------------------------------------------------------------------------
#### Concepts
1. Concepts: pointers and references
2. Concept: the dangling pointer problem
3. Concepts: garbage collection in the forms of reference counting and mark-and-sweep collection
4. Concept: arrays in the forms of
    static arrays
    fixed stack-dynamic arrays
    fixed heap-dynamic arrays
    heap-dynamic arrays


## 12. Abstract Datatypes
-------------------------------------------------------------------------------------
#### Concepts
1. information hiding and encapsulation
2. abstract datatypes
3. generic abstract datatypes, that is, abstract datatypes that take one or more type parameters


## 13. Object-Oriented Programming
-------------------------------------------------------------------------------------
#### Concepts
1. object-oriented language
2. dynamic dispatch, also known as dynamic binding of methods
3. inheritance
4. method overriding
5. the combined use of static types and dynamic types in statically typed object-oriented languages


## 14. Functional Programming
-------------------------------------------------------------------------------------
#### Concepts
1. local let bindings of variables
2. anonymous functions, also known as lambda expressions
3. first-class functions
4. pattern matching, including wildcards
5. exhaustiveness and redundancy in pattern matching
6. lists as algebraic datatypes
7. the map function
8. currying
9. Functional Programming in Standard ML


## 15. Exceptions and Continuations
-------------------------------------------------------------------------------------
#### Concepts
1. exceptions and exception handlers





## APPENDIX: TERMINOLOGY

__Static type bindings__ forces the programmer to, while declaring the variable, also state which type it should be. The variable will then be stuck with this type for the rest of its life. 
__Dynamic type bindings__ does not require this explicit type declaration. Instead the interpreter or compiler has to set the type itself. It does this as soon as it is assigned a value, but the type could change at any new assignment.

__imperative programming language__



notes:
static bindings -> static type checking