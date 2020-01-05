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

### Skills

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
There are many ways to describe semantics. In this course, we focus on natural semantics (also known as Big-Step Operational Semantics).

#### 1. You should be able to read a specification of natural semantics.

#### 2. Given a natural semantics and a parse tree (or unambiguous expression), you should be able to compute the semantics of the given program.
#### 3. Given a natural semantics and a BNF grammar, you should be able to tell whether any parts of the semantics are undefined.
#### 4. Given an understanding of what a state-free expression language is supposed to do, you should be able to write down a simple natural semantics for it.
#### 5. You should be able to understand the concepts of Environments in the context of natural semantics and be able to utilise it when reading and reasoning about natural semantics.





## 5. Bindings and Lifetime
-------------------------------------------------------------------------------------
#### 1. You should understand the difference between static and dynamic type binding and be able to take advantage of either property in your programming.
#### 2. Given a syntax, a compiler and a run-time system for a language, you should be able to determine whether the language is using static or dynamic type binding.
#### 3. Concepts: static binding, stack-dynamic binding, explicit heap-dynamic binding, and implicit heap-dynamic binding.
#### 4. Given a syntax, a compiler and a run-time system for a language, you should be able to determine which storage binding(s) the language is using.
#### 5. Concept: lifetime of a variable
#### 6. Concepts: allocation and deallocation of a heap-dynamic variable
#### 7. Concept: binding time, especially the difference between static and dynamic binding times

## 6. Scoping
-------------------------------------------------------------------------------------
#### 1. You should understand the difference between static scoping and dynamic scoping and be able to exploit either in your programming.
#### 2. Given a language implementation, you should be able to write a program to determine whether the language uses static or dynamic scoping.
#### 3. Concept: referencing Environment

## 7. Types
-------------------------------------------------------------------------------------
#### 1. Concepts: the types of integers, floating-point numbers (floats), and decimal numbers (decimals)
#### 2. Concept: the type of booleans
#### 3. Concept: enumeration type
#### 4. Concepts: character and string types
#### 5. Concept: subrange types
#### 6. Concept: record types
#### 7. Concept: tuple types
#### 8. Concept: list types
#### 9. Concept: associative array types
#### 10. Concept: union types, both free and discriminated
#### 11. Concept: operator overloading
#### 12. Concepts: strong typing and weak typing
#### 13. Concepts: type checking and the differences between dynamic type checking, static type checking.
#### 14. Concepts: type equivalence, including the difference between nominal and structural type equivalence
#### 15. Concept: type constructors
#### 16. Concept: typing rules as part of type systems, and how to read such rules and utilise them in your reasoning about program semantics
#### 17. Concept: the type preservation property, also known as subject reduction, of type systems
#### 18. Concepts: type parameters and parametric polymorphism
#### 19. Concept: function types for subroutines
#### 20. Concept: type classes
#### 21. Concept: subtyping
#### 22. Concept: covariance and contravariance of type parameters, and the arrow rule
#### 23. Concept: bounded parametric polymorphism
#### 24. Concept: definition-site variance and use-site variance of type parameters
#### 25. Concept: Algebraic Datatypes as in Standard ML and their use in pattern-matching
#### 26. Concept: automatic Type Inference

## 8. Expressions
-------------------------------------------------------------------------------------
#### 1. Concept: arithmetic expressions
#### 2. Concepts: boolean expressions and relational expressions
#### 3. Concepts: Different forms of object equality, including reference equality and structural equality
#### 4. Concept: operand evaluation order and how it affects the outcome of programs
#### 5. Concept: short-circuit evaluation and how it affects the outcome of programs
#### 6. Concept: referential transparency and side effects
#### 7. Concept: list comprehensions and their semantics
#### 8. Concept: type coercion expressions, both explicit and implicit, including narrowing conversions and widening conversions
#### 9. Concept: conditional expressions

## 9. Statements and Control Constructs
-------------------------------------------------------------------------------------
#### 1. Concept: assignment statements, including compound assignment
#### 2. Concept: two-way selection statements
#### 3. Concept: multiple-selection statements
#### 4. Concept: counter-controlled loops
#### 5. Concept: logically controlled loops
#### 6. Concept: datastructure-controlled loops

## 10. Subprograms and Parameter Passing
-------------------------------------------------------------------------------------
#### 1. Concepts: subprograms, including formal arguments and actual arguments
#### 2. Concept: local variables in subprograms
#### 3. Concept: nested subprograms
#### 4. Concepts: parameter passing modes
##### by value
##### by result
##### by value-result
##### by reference
##### by name
##### by need
#### 5. Concepts: subprograms as parameters, subprograms as return values, Closures
#### 6. Concept: activation records

## 11. Pointers, References, and Arrays
-------------------------------------------------------------------------------------
#### 1. Concepts: pointers and references
#### 2. Concept: the dangling pointer problem
#### 3. Concepts: garbage collection in the forms of reference counting and mark-and-sweep collection
#### 4. Concept: arrays in the forms of
#####     static arrays
#####     fixed stack-dynamic arrays
#####     fixed heap-dynamic arrays
#####     heap-dynamic arrays

## 12. Abstract Datatypes
-------------------------------------------------------------------------------------
#### 1. Concepts: information hiding and encapsulation
#### 2. Concept: abstract datatypes
#### 3. Concept: generic abstract datatypes, that is, abstract datatypes that take one or more type parameters

## 13. Object-Oriented Programming
-------------------------------------------------------------------------------------
#### 1. Concept: object-oriented language
#### 2. Concept: dynamic dispatch, also known as dynamic binding of methods
#### 3. Concept: inheritance
#### 4. Concept: method overriding
#### 5. Concept: the combined use of static types and dynamic types in statically typed object-oriented languages

## 14. Functional Programming
-------------------------------------------------------------------------------------
#### 1. Concept: local let bindings of variables
#### 2. Concept: anonymous functions, also known as lambda expressions
#### 3. Concept: first-class functions
#### 4. Concepts: pattern matching, including wildcards
#### 5. Concepts: exhaustiveness and redundancy in pattern matching
#### 6. Concept: lists as algebraic datatypes
#### 7. Concept: the map function
#### 8. Concept: currying
#### 9. Functional Programming in Standard ML

## 15. Exceptions and Continuations
-------------------------------------------------------------------------------------
#### 1. Concepts: exceptions and exception handlers
