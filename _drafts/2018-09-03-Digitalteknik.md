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
