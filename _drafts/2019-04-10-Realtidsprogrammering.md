## Question 1: Lingo

__busy-wait__

__race condition__

__dead lock__

__starvation__

__live lock__

__drifting__

__priorites__
Correctness of a program should never depend on priorites since these may not be obeyed on all platforms.

__priority inversion__

__priority inheritance protocol__

__priority ceiling protocol__

__direct blocking__

__push through blocking__

__static cyclic scheduling__

__earliest deadline first--EDF__

__rate monotonic scheduling--RMS__

__generalized RMS__

__context switch__

__semphore__

+ counting semaphore -- has a counter that increments when give is called and decrements when take is called. 
+ binary semaphore --
+ multistep semaphore -- counter that permits incrementations with more than one.
+ mutex semaphore -- guarantees mutual exclusion

__rule of thumb: syncronized__
1. do not mix threads and monitors,
2. all public methods in monitor should be syncronized,
3. write a wrapper monitor if a class needs to be thread-safe,
4. do not use syncronized blocks.




## Question 2: Resource allocation graphs


## Question 3: Priorities and scheduling





## concurrency in java

Using threads in java requires java.lang.Thread package. Threads are started using method start. A thread must have a runnable object (an object that implements the interface java.lang.Runnable). However, extending thread will take care of this since Thread already implements Runnable

__Thread__

+ __interrupt()__ -- changes a state in the thread that can be checked with __isInterrupted()__. To check for the currentThread the static __interrupted()__ exists.
+ __sleep(long millis)__ -- makes the thread wait for x number of milliseconds. Telling the OS that it is OK to swap currentThread. Sleeps the currentThread no matter which thread you call sleep with.
+ __isAlive()__ -- false if the thread has terminated or not been started. True if it is active at time of check.
+ __join()__ -- waits for the thread to die before continuing

