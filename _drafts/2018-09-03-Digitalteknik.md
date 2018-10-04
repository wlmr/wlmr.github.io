## fsm a.k.a. flying spaghetti monster or finite state machine

__finite state graph__

+ the states are circles called vertices
+ the transitions are arrows called edges
+ one edge for each input
+ one output combination for each input

__switchfunktion__ -- function of binary input signals with binary output signal. The function must be able to be specified in a table.

__sekvenskrets__ -- realization of wanted behaviour with binary inputs and binary output where the realization must contain some kind of memory element. Behaviour is specified in a state transition graph. The graph together with specified behaviour is called a finite state machine or automata.

__set of states S__

__a start state__

__set of inputs Ι__

__set of outputs Ζ__

__output function λ(s,i)__

__next state function δ(s,i)__


__KLOCKSTYRD__ -- will update every second wether or not the state has changed.

__HÄNDELSESTYRD__ -- will update every time unit as long as there is input to be processed.

__trellis__ -- google a picture


## Sequential Circuits

__boolean function__ -- mapping from n binary inputs to one binary output

## Algebraic structures

__Euclid's algorithm__ -- how to find the remainder \\( R_d(n) = n \\% d \\).

rewrite \\( n / d \\) as
$$ n = qd + r , \quad 0 \leq r < d$$
where \\( q \\) is the quotient, \\( r \\) the reminder and \\(d\\) the divisor.

1. divide \\(n\\) with \\(d\\)
2. \\( floor(n/d) \\) is the integer part of the result
3. \\( n - floor(n/d) = r \\) 

if \\( R_d(n) = 0 \\) then \\( n | d \\)

__greatest common divisors__
