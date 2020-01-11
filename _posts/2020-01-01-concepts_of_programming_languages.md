layout: page
title: "Concepts of programming languages"
date: 2020-01-11 16:50:10 -0000


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

__readability__

"The ease with which programs can be read and understood."

__writability__

"Writability is a measure of how easily a language can be used to create programs for a chosen problem domain. Most of the language characteristics that affect readability also affect writability. This follows directly from the fact that the process of writing a program requires the programmer frequently to reread the part of the program that is already written."

__reliability__

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
---

+ __Compiled__ -- Compiles source code into machine code. Fast, apart from the compilation step.

+ __Interpreted__ -- Code has to be run with an interpreter which, during runtime, executes the source code. N.B., Much slower!

+ __Hybrid__ -- Program is semi-compiled into something __almost__ as low level as binary code (in java called byte-code). When run, the byte-code is interpreted. Here, a JIT-compiler fits perfectly. A Just-In-Time-compiler checks the expressions being executed for parts where potential compilation would bring a speedup that outweighs the compilation time.




## Chapter 3: Syntax
---
 Syntax describes the possible structure (or form) of programs of a given programming language. Backus-Naur Form (BNF) grammars have emerged as the standard mechanism for describing language syntax. BNF grammars are used to describe languages when communicating with language adopters and compiler implementors. There are also many tools (particularly the yacc and antlr families of programs) for automatically generating parsers, programs that recognize whether an input program matches a grammar and, if it does, execute user-defined actions upon encountering certain language constructs.

### 3.1. You should be able to determine whether a given property of a language is part of the syntax, of the static semantics, or of the dynamic semantics.

The __syntax__ describes the form of the language, which tokens can be put where, etc.

__Semantics__ is concerned with the meaning of an expression, program or statement. __Static semantics__ makes sure that the program is meaningful to the compiler. E.g., what does it mean to add the integer 1 to the string "hello"? This might not be considered meaningful. During run-time __dynamic semantics__ determine how the program behaves. 
Example of a dynamic semantics-rule: _The expression x if C else y first evaluates the condition, C rather than x. If C is true, x is evaluated and its value is returned; otherwise, y is evaluated and its value is returned._


### 3.2. You should be able to read a BNF grammar and understand the difference between terminals and nonterminals.
__BNF__ consists of rules made up of nonterminals and terminals. A terminal can be an integer, for instance, since these can't be further elaborated. A nonterminal is some sort of abstraction. An example could be the nonterminal <IF>. A rule usually looks something like:

    `<IF> -> 'IF' EXPR 'THEN' BLOCK | 'IF' EXPR 'THEN' BLOCK 'ELSE' BLOCK`

Where `|` means that an <IF>-nonterminal can be expanded to either `'IF' EXPR 'THEN' BLOCK` or `'IF' EXPR 'THEN' BLOCK 'ELSE' BLOCK`.

A grammar can describe the complete syntax of a language only using a collection of rules such as the one above.


### 3.3. Given a BNF grammar, you should be able to write down examples of programs that can be generated by the grammar.
Consider the following grammar, where x, y, z are terminals: 
```
A → B C B
  | D x
B → D
  | y
C → x C x
  | C C
D → z B z
  | B
```
A is the start symbol. Give three examples of a string of tokens that can be generated by this grammar. 
```
A -> D x -> B x -> y x
A -> D x -> z B z x -> z y z x
A -> D x -> z B z x -> z z y z z x
```
### 3.4. Given a BNF grammar, you should be able to tell whether a given program can be generated by the grammar. If the program is generated by the grammar, you should also be able to generate a parse tree for the program.
BNF can be used to check whether a program is syntactically correct. Starting with main rule, usually something like `PROG -> STMTS`, the PROG is expanded until only terminals remain. To go the other way around, i.e. reducing terminals to nonterminals, is just as meaningful. 

### 3.5. You should be able to determine whether a given (small) BNF grammar is ambiguous (the problem is undecidable in general, so this skill only pertains to practically relevant examples as covered in the textbook).
Ambiguous grammars occur when more than one parse tree can be generated using the same program. Ambiguities can arise due to a lack of precedence, fixity, associativity or arity, of operators.


### 3.6. Given a BNF grammar, you should be able to determine the associativity of any operator used therein.
Left-assoc rule:  `<A> -> <A> + <V> | <V>` . I.e. __LHS__ reoccurs as the first symbol of the __RHS__.
Right-assoc rule: `<A> -> <V> + <A> | <V>` . I.e. __LHS__ reoccurs as the final symbol of the __RHS__.


### 3.7. You should be able to describe the difference between an object language and a meta-language.
An object language is any normal language used to describe objects in the world. A meta-language is a language that describes another language.


### 3.8. Understand arity, fixity, and precedence, and associativity of operators

+ __arity__: how many arguments a function takes.
+ __fixity__: infix (1 + 2), prefix (+ 1 2) or postfix (1 2 +).
+ __precedence__: which sub-expression should first be evaluated?
+ __associativity__: decides which parameter to expand first.



## 4. Natural Semantics
-------------------------------------------------------------------------------------
There are many ways to describe semantics. In this course, we focus on natural semantics (also known as Big-Step Operational Semantics). Hence natural semantics == operational semantics.


### 4.1. You should be able to read a specification of natural semantics.
### 4.2. Given a natural semantics and a parse tree (or unambiguous expression), you should be able to compute the semantics of the given program.
### 4.3. Given a natural semantics and a BNF grammar, you should be able to tell whether any parts of the semantics are undefined.


 Consider the following grammar and natural semantics, where the terminals are num, which may be any integer, and the symbols [ and ].

```
E  → [ NL ]
NL → ε
   | num NL

    [ n̅ ] ⇓ k    n - k = v
(L) -----------------------
          [ n n̅ ] ⇓ v

(E) [ n ] ⇓ n
```

Here, n̅ is a sequence of numbers. 

Compute the semantics of [ 1 2 3 10 50 ].

1. n = 1, n̅ = 2 3 10 50 
2. backtrack using (L) until [ n n̅ ] is [ 10 50 ]
3. then, according to (E), [ 50 ] ⇓ k (k == 50). n - k = v -> 10 - 50 = -40 . Now that we know that [ 10 50 ] ⇓ -40 we build our sequence again.
4. According to (L) [3 10 50] ⇓ v. If [10 50] ⇓ -40 and 3-(-40) = v = 43. So [3 10 50] ⇓ 43.
5. repeat step 4 with another prefix number.

### 4.4. Given an understanding of what a state-free expression language is supposed to do, you should be able to write down a simple natural semantics for it.
fixa

### 4.5. You should be able to understand the concepts of Environments in the context of natural semantics and be able to utilise it when reading and reasoning about natural semantics.
```   
     v ∈ id
 ---------------
  E |- v ⇓ E(v)
``` 



## 5. Bindings and Lifetime
-------------------------------------------------------------------------------------
### 5.1. You should understand the difference between static and dynamic type binding and be able to take advantage of either property in your programming.

Languages with __static type bindings__ forces the programmer to, while declaring the variable, also state which type it should be. The variable will then be stuck with this type for the rest of its life. Every programming language should be implemented with static type binding. With it the programmer has to think and make sure that all is well while writing the code.

__Dynamic type bindings__ does not require this explicit type declaration. Instead the interpreter or compiler has to set the type itself. It does this as soon as it is assigned a value, but the type could change at any new assignment. Could prove useful if you are lazy and want your program to be very generic. Could also come crashing down as you don't have any real say in the programming anymore. Be careful.


### 5.2. Given a syntax, a compiler and a run-time system for a language, you should be able to determine whether the language is using static or dynamic type binding.
It probably uses static type binding since the language has a compiler. With an interpreter everything goes slow, hence a little extra time to figure out types for all the variables is negligible. If I have to be completely sure I'd check the parser in the compiler to see if a declaration requires a type. 

### 5.3. static binding, stack-dynamic binding, explicit heap-dynamic binding, and implicit heap-dynamic binding.

+ __static binding__: Static variables are those that are bound to memory cells before program execution begins and remain bound to those same memory cells until program execution terminates. No run-time overhead for allocation and deallocation of static variables, although this time is often negligible. Storage cannot be shared among variables.

+ __stack-dynamic binding__: Stack-​­dynamic variables are those whose storage bindings are created when their declaration statements are elaborated, but whose types are statically bound.The advantages of ­stack-​­dynamic variables are as follows: To be useful, at least in most cases, recursive subprograms require some form of dynamic local storage so that each active copy of the recursive subprogram has its own ver- sion of the local variables. These needs are conveniently met by ­stack-​­dynamic variables. Even in the absence of recursion, having ­stack-​­dynamic local storage for subprograms is not without merit, because all subprograms share the same memory space for their locals. The disadvantages, relative to static variables, of ­stack-​­dynamic variables are the ­run-​­time overhead of allocation and deallocation, possibly slower accesses because indirect addressing is required. The time required to allocate and deallocate ­stack-​ dynamic variables is not significant.

+ __explicit heap-dynamic binding__: Explicit ­heap-​­dynamic variables are nameless (abstract) memory cells that are allocated and deallocated by explicit ­run-​­time instructions written by the programmer. These variables, which are allocated from and deallocated to the heap, can only be referenced through pointer or reference variables. The disadvantages of explicit ­heap-​­dynamic variables are the difficulty of using pointer and reference variables correctly, the cost of references to the variables, and the complexity of the required storage management implementation.

+ __implicit heap-dynamic binding__: Implicit ­heap-​­dynamic variables are bound to heap storage only when they are assigned values. In fact, all their attributes are bound every time they are assigned. High flexibility, high run-time overhead of maintaining all dynamic attributes.

### 5.4. Given a syntax, a compiler and a run-time system for a language, you should be able to determine which storage binding(s) the language is using.
1. __Static variables__ are accessible and modifiable from anywhere.
2. __Stack-dynamic variables__ are local variables allocated on the stack. If recursion can be performed using one such variable it is stack-dynamic.
3. Check for keywords `new` or `del`. No such things? No __explicit heap-dynamic variables__.
4. If the language uses static type bindings it makes little sense for it to also use __implicit heap-dynamic variables__, as these are dynamic type bindings.


### 5.5. lifetime of a variable
The lifetime of a variable is the time during which the variable is bound to a specific memory location. So, the lifetime of a variable begins when it is bound to a specific cell and ends when it is unbound from that cell.


### 5.6. allocation and deallocation of a heap-dynamic variable
Regarding __explicit heap-dynamic variables__ allocation is usually signalled using a keyword such as `new`. This keyword also takes a type, lets say that the line is `int_node = new int`. Once `new int` is executed some memory cells are chosen to hold the object of type int. A pointer to the memory cells are finally normally returned.

Once the variable has finished all that was asked of her she wants to end her life. This is done through some keyword like `delete`. `delete int_node` ought to do the trick as this deallocates the memory cells given to her at `new int`. It is as if she had never existed.

As for __implicit heap-dynamic variables__ however, all of the above is carried out out of sight, hence the name.


### 5.7. binding time, especially the difference between static and dynamic binding times
The time at which the binding takes place is called binding time. The binding time is not restricted only to run time but also language design time, language implementation time,
compile time, load time or link time.

A binding is __static__ if it first occurs before run time begins and remains unchanged throughout program execution. If the binding first occurs during run time or can change in the course of program execution, it is called __dynamic__.


## 6. Scoping
-------------------------------------------------------------------------------------

### 6.1. You should understand the difference between static scoping and dynamic scoping and be able to exploit either in your programming.
__Static scoping__ is so named because the scope of a variable can be statically ­determined—​­that is, prior to execution. This permits a human program reader (and a compiler) to determine the type of every variable in the program simply by examining its source code.\
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


### 6.2. Given a language implementation, you should be able to write a program to determine whether the language uses static or dynamic scoping.
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

### 6.3. Referencing Environment
The referencing environment of a statement is the collection of all variables that are visible in the statement. The referencing environment of a statement in a static scoped language is the variables declared in its local scope plus the collection of all variables of its ancestor scopes that are visible.


## 7. Types
-------------------------------------------------------------------------------------

Type systems are a central part of modern programming languages:they describe constraints over the possible values that an expression may evaluate to and some times even more advanced properties, such  as whether the evaluation may ab ort with exceptional behaviour, again expressed as constraints.These constraints allow programming language implementers to prevent costly bugs,or at least to make these bugs easier to catch and understand.Thus,type systems can contribute greatly to the Robustness,but also the Readability of programming languages. In addition to these improvements in error reporting,certain type systems can allow language implementers to decrease the run time cost(and sometimes the compile-time cost) of the language.

### 7.1. The primitive types
+ __integer:__ normally the integer comes in several different flavours. In Java there are four: short, int, long and byte, all of which are signed.  
+ __float:__ Most languages include two floating-​­point types, often called float and double. The float type is the standard size, usually stored in four bytes of memory. The double type is provided for situations where larger fractional parts and/or a larger range of exponents is needed.
+ __decimal:__ Decimal data types store a fixed number of decimal digits, with the implied decimal point at a fixed position in the value. Decimal types have the advantage of being able to precisely store decimal values, at least those within a restricted range, which cannot be done with ­floating-​­point.
+ __boolean:__ True or false, nonzero or zero. Requires one bit in theory but in practice one byte. Why? Because there is no efficient way of addressing one memory cell (N.B. sing.). 
+ __enumeration:__ A type that usually has a rather finite set of possible values. Enums are frequently used to model collections. A typical example: `enum days {Mon, Tue, Wed, Thu, Fri, Sat, Sun};`. 
+ __character:__ Simply put: a character. Previously a char occupies one byte (ASCII) -- now a char needs two (Unicode).
+ __string:__ Simply put: a string of characters. The most common string operations are assignment, catenation, substring reference, comparison, and pattern matching. Intuitively one might think that a string ought be an array made of chars. Or perhaps a string should be its own primitive type? Should the length of a string be dynamic, limited dynamic or static? What about comparison of two strings with different lengths? Ignore the last part of the longer string? Or simply overflow the shorter entry? For each of these questions at least one language would answer affirmative. 
+ __subrange:__ Defines a subset of the values of a particular type.  
+ __record:__ An aggregate of data elements in which the individual elements are identified by names. Great when you need data consisting of different types of data. In C, C++ and C# a record is called __struct__.
+ __tuple:__ A record with no name, so even more simple. Can be used to allow functions to return multiple values.
+ __list:__ N.B., _list_ as in functional programming!--No arrays allowed. As in most functional languages the list type is a common parameter among the functions of the standard library _prelude_ in Haskell. For instance, `head l` returns the first value in the list.

+ __associative array:__ An associative array is an unordered collection of data elements that are indexed by an equal number of values called keys. In the case of ­non-​­associative arrays, the indices never need to be stored (because of their regularity). In an associative array, however, the user-defined keys must be stored in the structure. So each element of an associative array is in fact a pair of entities, a key and a value. An associative array performs lookups, adds and removals at speeds close to O(1). 
+ __union:__ A union is a type whose variables may store different type values at different times during program execution. If there is no type-checking for unions it is called a __free union__. By introducing an indicator of the current type of the union, a.k.a. __tag__ or __discriminant__, type checking is made possible. The union then becomes a __discriminated union__.


### 7.11. operator overloading
Redefine an arithmetic operator to do as you please. When you change the meaning of a well known symbol there is a high potential of reducing readability. 


### 7.12. strong typing and weak typing
A programming language is strongly typed if type errors are always
detected. This requires that the types of all operands can be determined, either
at compile time or at run time. The importance of strong typing lies in its ability to detect all misuses of variables that result in type errors. 

Weak type checking is the absence of strong type checking.


### 7.13. type checking and the differences between dynamic type checking, static type checking
Type checking is the process of making sure that the operands of an operator are of compatible types. 

Static type checking involves type checking at compile time -- while dynamic type checking issues its type checks at run time. 

The penalty for static type checking is reduced programmer flexibility. Fewer
shortcuts and tricks are possible. Such techniques, though, are now generally
recognized to be error prone and detrimental to readability.

Due to the type defiant ways of the union-type static type checking is not enough. Type checking is complicated when a language allows a memory cell to store values of different types at different times during execution.


### 7.14. type equivalence, including the difference between nominal and structural type equivalence
__Name type equivalence__ means that two variables have equivalent types if they are defined either in the same declaration
or in declarations that use the same type name. __Structure type equivalence__ means that two variables have equivalent types if their types have identical structures.

C uses both name and structure type equivalence. Every struct, enum, and union declaration creates a new type that is not equivalent to any other type. So, name type equivalence is used for structure, enumeration, and union types. Other nonscalar types use structure type equivalence.

### 7.15. type constructors
A feature of a typed formal language that builds new types from old ones.

### 7.16. typing rules as part of type systems, and how to read such rules and utilise them in your reasoning about program semantics
To declare typing rules we use the notation of [operational semantics](#4-natural-semantics):

$$
\frac{e_1 : Nat \quad e_2 : Nat}{e_1 + e_2 : Nat}
$$


### 7.17. the type preservation property, also known as subject reduction, of type systems
A type system has the type preservation property if for any e ⇓ v , e : t implies v : t.


### 7.18. type parameters and parametric polymorphism
Generic types. Instead of writing one method for every type, parameters allows for generic types. 
```
fn id(x: i32) {
x
}

fn id(x: string) {
    x
}
```
```
fn id<T>(x: T) {
    x
}    
```

T is called __formal type parameter__. The type actually passed to the subroutine is called __actual type parameter__.


### 7.19. function types for subroutines
Functions also have types. The function _f_ takes an int and a string and returns a boolean. Its type looks something like this:

| Language   | Function type of _f_                |
|----------- |-------------------------------------|
| _Rust:_    | _f_ : (int,string) -> bool          |
| _Haskell:_ | _f_ : fn(i32, str) -> &’static bool |

For a function with type _T1 -> U1_ to be substituted by another of type _T2 -> U2_ it is required that T1 <: T2 and U2 <: U1.

I.e. The  type of a function is a subtype of the  type of another function if (all else being the same)the result type is more specific,or any of the argument types are more general.


### 7.20. type classes
Lets you specify traits that your generic parameters must have implemented. E.g. to compare two objects of type _T_ with the operator __>__ _T_ must have defined how such a comparison should be carried out.

_foo_ below wont compile due to the problem described above.
```
fn foo<T>(x: T, y: T) -> T{
    if x > y {
        return x;
    }
}
```
However, by adding a trait constraint to T Mr. Compiler stops arguing and compiles.
```
fn foo<T>(x: T, y: T) -> T where T: std::cmp::PartialOrd {
    if x > y {
        return x;
    }
}
```


### 7.21. subtyping
A type T is a subtype of type U, notation: T <: U or U :> T, if any value v : T can be used in any context that requires a value of type U. 

A type constructor in a language uses __structural subtyping__ if two different types T, U constructed from this type constructor can be in a subtyping relation without being explicitly declared to be in a subtyping relation. 

Meanwhile, Java uses nominal subtyping of classes.

A language uses __nominal subtyping__ for a type constructor if two different types T, U constructed from this type constructor can be in a subtyping relation, but only if they are explicitly declared to be in this relation.

In Java, an assignment can look like `A v = new B()`, if B <: A. Then the __static type binding__ and __dynamic type binding__ is A and B respectively.


### 7.22. covariance and contravariance of type parameters, and the arrow rule
Co- and contravariance are measurements of how a type parameter behaves when substituted for sub- or super types.

Example:
```
Trait ReadBox<R> {
    fn get() -> R;
}

trait WriteBox<W> {
    fn put(v: W);
}
```
Lets say R and W both have type INTEGER32. 

What happens when R is swapped for the subtype 1..10?
The return value of get() would be limited to a number between 1 and 10. You could say that as we vary R towards a subtype ReadBox<R> is also varied towards a subtype. Hence R is __covariant__.  

What happens when W is swapped for the subtype 1..10?
The argument of put(v: W) now accepts only 1..10 and is more flexible. So as we vary W towards a subtype WriteBox<W> varies towards a supertype. W is __contravariant__.

Basically: 
+ reading -> covariant
+ writing -> contravariant

__Arrow rule:__
$$
\frac{T_1 :> T_2 \quad U_1 <: U_2}{T_1 \rightarrow U_1 <: T_2 \rightarrow U_2}
$$


### 7.23. bounded parametric polymorphism
When restrictions to the parameter is needed interfaces or traits are helpful. See _20. type classes_ above.


### 7.24. definition-site variance and use-site variance of type parameters
Concerns where variance is declared for type parameters. __Definition-site variance__ is declared in the abstract datatype itself. The user-site version declares this not before use.


### 7.25. Algebraic Datatypes as in Standard ML and their use in pattern-matching
An algebraic datatype is a composite type, i.e., a type consisting of several different types. 

There are two types of algebraic datatypes: __product types__ and __sum types__. The former being similar to __structs__ or __tuples__ in that they only have a finite number of different types of values and all instances of such a type have the same combination of types.

Example of product type: 
    
    type Runner = (String,Int)

__sum types__ are less rigid. These contain a number of different classes or _variants_. Each of these can hold a different number of types.

Example of sum type: 

    data Tree = Empty
          | Leaf Int
          | Node Tree Tree

Since all algebraic datatypes either have a finite number of _variants_, or a very fixed structure all of them fit perfectly for __pattern-matching__. This is true as pattern-matching works by defining procedures to take if the input has some certain property. So for the above sum type _Tree_ we only need three patterns if we, for instance, want to calculate the height of the tree: One for each of _Empty_, _Leaf_ and _Node_.

### 7.26. automatic Type Inference
Functionality present in some strongly statically typed languages.

Unless the writer explicitly announces the type of an argument the compiler will figure out the most general type this argument could have while still managing to perform the the function. 


## 8. Expressions
-------------------------------------------------------------------------------------
#### Concepts
### 8.1. arithmetic expressions
1 + 1 is an arithmetic expression.

### 8.2. boolean expressions and relational expressions
true && false is a boolean expression.

### 8.3. Different forms of object equality, including reference equality and structural equality

### 8.4. operand evaluation order and how it affects the outcome of programs


### 8.5. short-circuit evaluation and how it affects the outcome of programs
The expression `if true || doesn't_matter then order_66` will cause short-circuiting. This means that since `true ||` always returns true, no matter what the second operand evaluates to, it wont even execute that code. Instead it will always execute order 66. HA HA HA.

### 8.6. referential transparency and side effects
In a program with the property of __referential transparency__ any two expressions that has the same value could be swapped without effecting the output. In other words, these expressions have no side effects.

A function or expression can have __side effects__, meaning it, apart from returning a result, might have changed some variable outside of its local environment. 

### 8.7. list comprehensions and their semantics

A typical example of a list comprehension:
```
[(heil,pepe) | heil <- [69..88], pepe <- "cancer"]
```
This generates the following list: `[(69,'c'),(69,'a'),(69,'n'),(69,'c'),(69,'e'),(69,'r'),(70,'c'),(70,'a'),(70,'n'),(70,'c'),(70,'e'),...,(88,'r')]`.

### 8.8. type coercion expressions, both explicit and implicit, including narrowing conversions and widening conversions
Some languages allows for arithmetic operators to have operands of different types in the same expression. This forces one of these values to be converted to into the other, using __implicit type coercion__. These languages suffer a penalty to __reliability__ since error detection is reduced and these conversion conventions can be unclear and/or unpredictable. 

__Explicit type coercion__ is type conversion called by the writer. Examples: 
```
(int) angle
float(sum)
```

For example, converting a double to a float in Java is a __narrowing conversion__, because the range of double is much larger than that of float.

A __widening conversion__ converts a value to a type that can include at least approximations of all of the values of the original type. __For example__, converting an int to a float in Java is a widening conversion.

__NOTA BENE!__
All though it might seem that way at first glance not all __widening conversions__ are safe. __Example__:
Consider converting the biggest possible value of an int to a float. 


### 8.9. conditional expressions



## 9. Statements and Control Constructs
---
#### covered in: 
+ 7.7 – 7.7.5 (incl.)
+ 8.2.1
+ 8.2.2 – 8.2.2.2
+ 8.3.1
+ 8.3.2
+ 8.3.4


### 9.1. assignment statements, including compound assignment
__Assignment statements__ provides the mechanism by which the user can dynamically change the bindings of values to variables.

An example of a __compound assignment__ is `sum += value`, which is syntactic sugar for `sum = sum + value`.

### 9.2. two-way selection statements
```
//example 1: use of special words
if control_expression 
    then clause
    else clause

//example 2: use of brackets
if (control_expression) { 
    clause
} else {
    clause
}

//example 3: use of indentation
if control_expression: 
    clause
else: 
    clause

```

Without brackets or indentation rules cancers such as these can arise:
```
if (sum == 0)
    if (count == 0)
        result = 0;
else
    result = 1;
``` 
Which if-statement does the else belong to?

To secure _example 1_ from above cancer-example introduce the keyword _end_ to end every _then_-block.  

### 9.3. multiple-selection statements
Often called the __switch-statement__, this generalization of the __if-statement__ allows the selection of one of any number of statements.

design issues include:
+ Is execution flow through the structure restricted to include just a single selectable segment?
+ How should unrepresented selector expression values be handled, if at all?

__Example:__
```
switch (expression) {
    case constant_expression_1 : statement_1;
    . . .
    case constant_n : statement_n;
    [default: statement_(n+1)]
}
```


### 9.4. counter-controlled loops a.k.a. for-loops

`for (int i = 0; i < 5; i += 2)`
>
__loop parameters:__
1. _initial value:_ 0
2. _terminal value:_ 5
3. _stepsize:_ 2


### 9.5. logically controlled loops a.k.a. while-loops

`while (expression)`

More general version of a loop than __counter-controlled__ ones. Hence all __counter-controlled loops__ can be implemented using __logically controlled loops__.

Most languages have keywords such as 
+ __break__ -- terminates the loop completely. In Java __break__ can be followed by a label. If so it will break out of the loop, and continuing at that label.
+ __continue__ -- in C++, C and Python allows the rest of the code of that particular iteration to be skipped.

__Design Issues__
1. pretest or posttest?


### 9.6. datastructure-controlled loops

A general ­data-​­based iteration statement uses a ­user-​­defined data structure and a ­user-​­defined function (the iterator) to go through the structure’s elements.

__Example:__
```
//in Java this will iterate over the strings in myList
for (String myElement : myList) { . . . }
```

## 10. Subprograms and Parameter Passing
-------------------------------------------------------------------------------------

### 10.1. subprograms, including formal arguments and actual arguments

__Formal arguments__ are the parameters in the subprogram header. These are, upon call, bound to the __actual parameters__, i.e. the actual variables passed as parameters in the subprogram call.

### 10.2. local variables in subprograms
Usually __stack-dynamic__, but could also be declared static. 

### 10.3. nested subprograms
The idea of declaring subprograms within subprograms. If the nested subprogram only is needed by the outer subprogram why place it somewhere else than inside it?

Well, you have to allocate and deallocate the nested subprogram every time the outer one is called.

### 10.4. parameter passing modes
   
Formal parameters are characterized by one of three distinct semantics models: (1) They can receive data from the corresponding actual parameter; (2) they can transmit data to the actual parameter; or (3) they can do both. These models are called __in mode__, __out mode__, and __inout mode__, respectively.
+ __by value__ -- __in mode__ where the formal parameter is bound to a copy of the actual parameter. 
+ __by result__ -- __out mode__. The actual parameter is never exposed to the subprogram. Instead it simply writes its result to this parameter before control is transferred back to the caller.
+ __by value-result__ -- __inout mode__. First __pass by value__ then __pass by result__.
+ __by reference__ -- __inout mode__. A pointer to the actual parameter is bound to the formal parameter, allowing for access to the actual parameter. No extra space and time for copies required. Just slick, hardcore programming.
+ __by name__ -- __inout mode__. A pass-​by-​­name formal parameter is bound to an access method at the time of the subprogram call, but the actual binding to a value or an address is delayed until the formal parameter is assigned or referenced.
+ __by need__ -- same as __pass-by-name__, only it evaluates the parameter at most once and then stores that evaluation as formal parameter.


### 10.5. subprograms as parameters, subprograms as return values, Closures

A language that allows subprograms as parameters is said to have __first-order functions__. 

If a language allows nested subprograms a question regarding what referencing environment the passed subprogram should use arise. As an example of each binding type we consider the execution of sub2 when it is called in sub4, in the script below. Three options exist: 

1. __shallow binding__ -- the environment of the call statement that enacts the passed subprogram. The referencing environment of that execution is that of sub4. Analogous to __dynamic scoping__.
2. __deep binding__ -- the environment of the definition of the passed subprogram. The referencing environment of sub2’s execution is that of sub1. Analogous to __static scoping__.
3. __ad hoc binding__ -- the environment of the call statement that passed the subprogram as an actual parameter. The binding is to the local x in
sub3.

```
function sub1() {
    var x;
    function sub2() {
        alert(x); // Creates a dialog box with the value of x
    };
    function sub3() {
        var x;
        x = 3;
        sub4(sub2);
    };
    function sub4(subx) {
        var x;
        x = 4;
        subx();
    };
    x = 1;
    sub3();
};
```
Static-scoped languages uses __deep binding__.
Dynamic-scoped languages uses __shallow binding__.


A __closure__ is subprogram and the referencing environment where it was defined.

__Example__ where the __closure__ is the anonymous function defined inside `makeAdder`: 
```
function makeAdder(x) {
    return function(y) {return x + y;}
}
. . .
var add10 = makeAdder(10);
add10(20);
```


### 10.6. activation records

| Activation record   |
|:-------------------:|
| __local variables__ | 
|   __parameters__    | 
|  __dynamic link__\* |
| __return address__  |

\* only used for languages with stack-dynamic variables

For a language with __static variables__ only these activation records are the same throughout the execution, with one __activation record__ for each subprogram. 

With __stack-dynamic variables__ the records have to grow dynamically on the stack, as recursion forces the stack to be able to hold multiple instances of the same subprogram's __activation record__ at once. The __dynamic link__ points to the callers __activation record__ and makes it able to backtrack through previous scopes to find nonlocal variables. 



## 11. Pointers, References, and Arrays
-------------------------------------------------------------------------------------




### 11.1. pointers and references

Unlike other variables __pointers__ do not hold a value. Instead these hold addresses to memory cells. In turn these memory cells contain the data. Pointers are also the only way to access the heap and __heap-dynamic variables__. Such variables will remain until deallocated either explicitly or by a garbage collector. If never deallocated these remain on the heap after the program finishes, a.k.a. memory leakage.

In expressions pointer variables can be interpreted in two ways: as an address, i.e. an integer, or as a reference to the value at that address in the memory. The latter is the result of dereferencing the pointer and is indicated, in C++, by prefixing the pointer with \*. E.g. if `ptr` has the value 9000 and the value at the cell with the address 9000 is 1 then j is assigned to 1 in the assignment  `j = *ptr`. 

__References__ refers to an object or a value in memory. Hence these can't be used with arithmetic in the same manner as __pointers__ can.

### 11.2. the dangling pointer problem

A __pointer__ that contains the address of a heap-​­dynamic variable that has been deallocated. __Dangling pointers__ are dangerous for several reasons. First, the location being pointed to may have been reallocated to some new heap-​­dynamic variable. If the new variable is not the same type as the old one, type checks of uses of the dangling pointer are invalid. Even if the new dynamic variable is the same type, its new value will have no relationship to the old pointer’s dereferenced value.

### 11.3. garbage collection in the forms of reference counting and mark-and-sweep collection

+ __reference counters__ or eager approach, in which reclamation is incremental and is done when inaccessible cells are created (no pointers pointing to that cell), 
+ __­mark-​­sweep__ or lazy approach, in which reclamation occurs only when the list of available space becomes empty. Then all current pointers in the program are traced to memory. These are marked as used and all others are deallocated. 

### 11.4. arrays in the forms of
  
  #### a) static arrays 
  Are those in which the subscript ranges are statically bound and storage allocation is static (done before run time). The advantage of static arrays is efficiency. __Example:__ C++ arrays declared with the modifier static.
  
  #### b) fixed stack-dynamic arrays
  Are those in which the subscript ranges are statically bound, but the allocation is done during execution. The advantage of fixed stack-​­dynamic arrays over static arrays is space efficiency. Disadvantage: allocation and deallocation time. __Example:__ C++ arrays declared inside functions.
  
  #### c) fixed heap-dynamic arrays 
  Same as above, but allocated on the heap. __Example:__ Java's _array_.

  #### d) heap-dynamic arrays
  Are those in which the binding of subscript ranges and storage allocation is dynamic and can change during the array's lifetime. Advantage: Flexibility. Disadvantage: Several allocation and deallocations can occur during runtime. __Example:__ Java's _ArrayList_.

## 12. Abstract Datatypes
-------------------------------------------------------------------------------------

### 12.1. information hiding and encapsulation

“A module is encapsulated if clients are restricted by the definition of the programming language to access the module only via its defined external interface. Encapsulation thus assures designers that compatible changes can be made safely, which facilitates program evolution and maintenance. These benefits are especially important for large systems and long-lived data.”



An abstraction is a view or representation of an entity that includes only the most significant attributes. Abstraction allows one to collect instances of entities into groups in which their common attributes need not be considered. 

The two fundamental kinds of abstraction in contemporary programming languages are process abstraction and data abstraction.

All subprograms are process abstractions because they provide a way for a program to specify a process, without providing the details of how it performs its task.

Information hiding means that a class may have either visibile or hidden entities, through the use of keywords.

in Java and C++, __public__ members are visible and usable from any caller. __protected__ members are usable by the __class itself__, and __subclasses of said class__. __private__ members are only usable by the class itself.

In Java, having none of the above keywords make the member __package protected__, which means that is is only reachable from callers in the same package.

### 12.2. abstract datatypes

An abstract data type is an enclosure that includes only the data representation of one specific data type and the subprograms that provide the operations for that type. 

Through access controls, unnecessary details of the type can be hidden from units outside the enclosure that use the type. 

Program units that use an abstract data type can declare variables of that type, even though the actual representation is hidden from them. An instance of an abstract data type is called an object (p. 473).

### 12.3. generic abstract datatypes, that is, abstract datatypes that take one or more type parameters

The purpose of generic type parameters is to abstract types and allow us to use these types __without knowing their exact form__ (http://fileadmin.cs.lth.se/cs/Education/EDAP05/2019/web/handout-F.pdf, p. 4).

This is useful when a function or class is supposed to work for any kind of type. For example, in the implementation of ArrayList in Java,
rather than having to define a new list class for every conceivable type, the actual list type is given at the declaration:

```java
List<Integer> numberList = new ArrayList<>();
```

In C++, the template system is used:

```cpp
template <typename T>
int length(T& t)
{
    return t.size();
}
```

When later calling the function in C++

```cpp
vector<int> v;
cout << length<vector>(v) << endl;
```

The compiler sees a call to `length` with the parameter type `vector`, and creates a definition for length, where the type name `T` is replaced with `vector`. As the function definition uses a method call to `size`, if the given parameter type does not support said method,
the compilation fails.



## 13. Object-Oriented Programming
-------------------------------------------------------------------------------------

### 13.1. object-oriented language

In order for a language to be considered object-oriented, it must provide support for three key language features (p. 515):

1. Abstract data types
2. Inheritance
3. Dynamic binding of method calls to methods

Many languages support object-oriented programming as one of it's paradigms (C++, ), is built largely around it (Java, "everything is an object except for primitives"), or is purely object-oriented (Smalltalk).



### 13.2. dynamic dispatch, also known as dynamic binding of methods

Dynamic dispatch is a kind of polymorphism. It allows an object, when stored as a reference to the superclass, to find and use the correct subclass method when a call is made. Consider the following:

```java
Animal a = new Dog();
a.makeNoise();
```

If the class `Dog` redefined the method `makeNoise`, dynamic dispatch maps the method call to that definition, rather than the definition in the class `Animal`.



### 13.3. inheritance

Inheritance allows the programmer to __derive an existing type__, which not only inherits the previous type's data and functionality, but also lets them modify those entities and add new ones. Functions pertaining to a class are called __methods__.

In object-oriented languages, a derived type is called a __subclass__, while the parent is called __superclass__.

__Multiple inheritance__ means that a subclass inherits from multiple classes.

A subclass does not have to be a subtype, and a subtype does not have to be a subclass.

A class which is not a subclass of another class can be a subtype of that class if it defines the same members with the same access.

The issue called __Diamond inheritance__ arises in the following situation:

+ A is a class
+ B is a subclass of A
+ C is a subclass of A
+ D is a subclass of both B and C

If both B and C override the same member while D does not, it cannot be determined which one should be used.

### 13.4. method overriding

When a subclass redefines a method which belongs to its superclass, it is said to __override__ said method.
Through dynamic dispatch, the correct method call (the one pertaining to the lowest subclass which overrides the method) is used even though the object reference matches the superclass.




### 13.5. the combined use of static types and dynamic types in statically typed object-oriented languages

There are two types of variables and methods:

+ __instance variables and methods__ belong to an __object__
+ __class variables and methods__ belong to the __class__

Class variables and methods are shared between all objects of the class.

In java and C++, adding the keyword __static__ before a variable or method (inside of a class) effectively makes it belong to the class.

## 14. Functional Programming
-------------------------------------------------------------------------------------

### 14.1. Concept: local let bindings of variables

In ML, The scope of a variable or type constructor may be delimited by using let expressions and local declarations. A let expression has the form

```sml
let dec in exp end
```

The scope of the declaration *dec* is limited to the expression *exp*. 

Similarly, 

```sml
let dec in dec' end
```

Limits the scope of *dec* to the declaration *dec'*.

Example:

```sml
let
    val m : int = 3
    val n : int = m*m
in
    m*n
end
```
(http://www.cs.cmu.edu/~rwh/isml/book.pdf, p. 28-29)


### 14.2. anonymous functions, also known as lambda expressions

A __lambda expression__ specifies the parameters and the mapping of a function. The lambda expression is __the function itself__, which is __nameless__. (p. 661)

In ML, it is introduced with the reserved word __fn__, in contrast to the reserved word _fun_ used to define functions:

```sml
(fn x => x + 1)
```
(p. 690)

### 14.3. first-class functions

Functions in ML are first-class, meaning that they may be computed as the value of an expression. (http://www.cs.cmu.edu/~rwh/isml/book.pdf, p. 37)

First-class functions have the same rights and privileges as values of any other type. This, in effect, means that they may be __stored in- and retrieved from datastructures__, __passed as parameters__ and __returned from functions__. 

Functions which take functions as arguments, or yield functions as results are known as __higher-order functions__. (http://www.cs.cmu.edu/~rwh/isml/book.pdf, p. 92)

### 14.4. pattern matching, including wildcards


Pattern matching allows multiple definitions of a functions to be written with varying parameters. When the function is called, the actual parameter is compared to the parameters of the various definitions, selecting the one which matches (p. 689). Note that pattern matching may also be used in so-called __case constructs__ in ML, similar to switch-case constructs in C and Java.

The patterns may contain __constant patterns__ (e.g. "ten", 2.5 etc.) or  __variable patterns__. The following example shows two constant patterns followed by a variable pattern, separated by the OR symbol (|):


```sml
fun fact(0) = 1 
|   fact(1) = 1
|   fact(n : int): int = n * fact(n − 1);
```

The variable pattern __always matches the given parameter__, provided the previous patterns did not match. ML uses __first-match__, meaning that it traverses the different definitions from top to bottom until it finds a match. 

The __wildcard pattern__ "_" is similar to the variable pattern, as it always matches the given parameter. One key difference is that, unlike in the variable pattern, it does __not bind the parameter to an identifier__, preventing its usage in the definition or expression (https://courses.cs.washington.edu/courses/cse341/04wi/lectures/03-ml-functions.html).

The following shows an example using the wildcard pattern in a case construct in ML:

```sml
case x of
     1 => print("one")
|    _ => print("Any number except for 1");
```


### 14.5. exhaustiveness and redundancy in pattern matching

In pattern matching, __exhaustiveness checking__ ensures that the patterns used __cover its domain type__ (the type of the arguments). This means that __all potential arguments must be covered by the patterns__. As an example, in ML:

```sml
fun is_true true = true
```

the above function definition is not exhaustive, as the function call `is_true(false)` has no match. Instead:

```sml
fun  is_true true  = true
|    is_true false = false
```

is exhaustive, as all values of the domain type have been covered (A wildcard or variable could also be used as a final catch-all).


__Redundancy checking__ ensures that no clause of a match is covered by a previous clause. for example, in ML:

```sml
fun recip (n:int) = 1 div n
|   recip 0 = 0;
```

The first clause matches any integer, including 0. Thus, the second clause will never be used.


(http://www.cs.cmu.edu/~rwh/isml/book.pdf, p. 54-55)

### 14.6. lists as algebraic datatypes

In ML, lists are first-class data structures, which are treated equal to other primitives. The user does not have to allocate and deallocate lists in ML.

A list in ML is either:

1. nil (an empty list)
2. h::t, where h is the a value in the head position, and t is the tail.

"::" is called "cons", and it may be used to bind values in a list. 

A list in ML requires all of its elements to be of the same type.

### 14.7. the map function

The map function takes a single parameter, which is a function. The resulting function takes a list as a parameter. It applies its function to each element of the list and returns a list of the results of those applications. 

Consider the following code: 
```sml
fun cube x = x * x * x; 
val cubeList = map cube; 
val newList = cubeList [1, 3, 5];
```

After execution, the value of newList is `[1, 27, 125]`. 
This could be done more simply by defining the cube function as a lambda expression, as in the following: 
```sml
val newList = map (fn x => x * x * x, [1, 3, 5]);
```
(p. 691)
### 14.8. currying

The process of currying replaces a function with more than one parameter with a function with one parameter that returns a function that takes the other parameters of the initial function (p. 691).

In ML, Given a two-argument function,curry returns another function that, whenapplied to the first argument, yields a function that, when applied to the second, applies the original two-argument function to the first and second arguments, given separately (http://www.cs.cmu.edu/~rwh/isml/book.pdf, p. 97).

### 14.9. Functional Programming in Standard ML

The emphasis in ML is on computation by __evaluation of expressions__, rather than execution of commands as seen in imperative languages. 
(http://www.cs.cmu.edu/~rwh/isml/book.pdf, p.15)

Each expression has three important characteristics:

+ It may or may not have a type.
+ It may or may not have a value.
+ It may or may not engender an effect.


[comment]: <> (More to add? Double check when you have read the document)


## 15. Exceptions and Continuations
-------------------------------------------------------------------------------------

### 15.1. Concepts: exceptions and exception handlers

An __exception__ is defined as any unusual event, erroneous or not, that is detectable by either hardware or software and that may require special processing. 
An exception is raised when its associated event occurs. (p. 623)

An __exception handler__ is a code unit or segment which captures- and controls exceptions. 
Exception handlers allow the user to control how to __recover__ from such an unusual event. (p. 623)

Languages such as C, which does not have any exception handling mechanisms, may instead use return values as error indicators. (p. 624)





## APPENDIX: TERMINOLOGY

__Static type bindings__ forces the programmer to, while declaring the variable, also state which type it should be. The variable will then be stuck with this type for the rest of its life. 
__Dynamic type bindings__ does not require this explicit type declaration. Instead the interpreter or compiler has to set the type itself. It does this as soon as it is assigned a value, but the type could change at any new assignment.

__imperative programming language__



notes:
static bindings -> static type checking