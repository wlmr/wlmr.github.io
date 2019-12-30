## 1. Language Critique

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

### 1. simplicity

How many basic constructs are there? The most simplistic languages has lower readability. Take for example a language with only the possibility of adding numbers. Implementing multiplication would look rather convoluted and be hard to read. 

Too little simplicity however also leads to decreased readability. Take for instance a language with feature multiplicity, i.e. a language where there is several ways of doing the same thing, suddenly the programmer will be confused. Is there a difference between these constructs, he wonders, as he goes online to check?

Operator overloading is another example of another construct that makes languages confusing to the reader.

A small set of constructs is easier to learn than a big one, hence the writability increases as the simplicity increases. The risk of misuse when having a too many constructs should also be taken into account. 


### 2. orthogonality

This beautiful and cleverly named characteristic measures how versatile and few the languages' building blocks are together with each other. The more things that can be created with a combination of as few number of primitive constructs as possible the more orthogonal is the language. 

Extremely low- or high orthogonality is bad for both readability and writability.

Extreme orthogonality induces some weird code. Just google Brainfuck. Completely unreadable as well as unwritable, nonetheless orthogonal as fuck.

With great orthogonality comes great responsibility, and great writability. A low level of orthogonality is synonymous to a lot of functions performing very specific tasks. Tough to learn and hence hard to write -- but might be easier to read.

### 3. data types
 
More data types returns better readability. For instance, what does ` timeout = 1 ` mean?
Is it a boolean or should the program timeout for 1 ms? Once booleans are introduced ` timeout = true ` everything makes perfect sense.

### 4. syntax design

Special words and form and meaning. Are the special words of the language self-explanatory? Is it clear what is going to run inside some loop -- and where its scope ends?

__grep__ is an example of bad syntax design in the world of shell commands. Why?



### 5. support for abstraction

Since an abstraction is the process of removing details currently irrelevant, writability increases in the same way as expressivity.


### 6. expressivity

It means that a language has relatively convenient, rather than cumbersome, ways of specifying computations. For example, in C, the notation `count++` is more convenient and shorter than `count = count + 1`. Another example is the keyword `for` in Java. All for-loops can be explained using while-loops. More constructs like the ones explained above, increases writability.

### 7. type checking

Increases reliability by checking for type errors, either at compile-time or at run-time.

### 8. exception handling

"The ability of a program to intercept ­run-​­time errors (as well as other unusual conditions detectable by the program), take corrective measures, and then continue is an obvious aid to reliability."

### 9. restricted aliasing

Loosely defined, aliasing is having two or more distinct names in a program
that can be used to access the same memory cell. It is now generally accepted
that aliasing is a dangerous feature in a programming language, since altering one of the pointers' value changes also the other one.

Restricting aliasing increases reliability.

