---
layout: post
title: "Concurrency"
---

<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML' async></script>


Welcome to my lexicon on the concurrent programming lingo. It covers all you need to know for the course on the subject at Lund University, Sweden. 

### General

__busy-wait__ -- when a thread over and over again checks if some boolean has changed and it can continue. This is extremely inefficient in comparison to a system where a thread is signaled when something has changed.

__race condition__ -- occurs when critical sections are not locked. Several threads can then access the data at the same time. The result is then undefined as it depends on which thread entered when.

__dead lock__ -- two or more threads, with resources locked, are waiting for other locks to be freed while the wanted lock is locked by another thread that wants the lock that the former threads are in control of. To obtain deadlocks __4__ conditions must be met:
1. mutual exclusion -- only one thread is allowed at a time.
2. hold and wait -- entering a monitor from another monitor.
3. no resource preemption -- threads can only exit voluntarily by __wait()__, otherwise it can get stuck.
4. circular wait -- if there are two or more threads that at some point is waiting for one another.


__starvation__ -- occurs if a thread is continously denied the resource it tries to access.

__live lock__ -- when two or more threads tries to access the same resource

__priorites__ -- correctness of a program should never depend on priorites since these may not be obeyed on all platforms.

__semphore__ -- way for thread to lock the door after itself after entering a critical section to guarantee exclusivity. 
+ counting semaphore -- has a counter that increments when give is called and decrements when take is called. 
+ multistep semaphore -- counter that permits incrementations with more than one.
+ binary / mutex semaphore -- guarantees mutual exclusion

__context switch__ -- when the system changes running thread/process the preemptied thread needs to stash its data away for later. Steps:
* _SAVE_
1. Turn off interrupts,
2. push PC, registers on stack,
* _SWITCH_
3. save stack pointer in process record,
4. get new process record and restore stack pointer from it,
* _RESTORE_
5. pop registers, PC from stack,
6. turn on interrupts.

### Scheduling

The main goal of scheduling is to get a concurrent program that is also correct in terms of timing. 

In order to be able to analyze a program several simplifications must be made. E.g.
1. threads must not depend on each other. I.e there can be no [__wait()__ or __notify()__](#concurrency-in-java),
2. there must be a fixed number of threads,
3. all threads are periodic with known periods,

__cyclic executive scheduling__
consists of:
1. __Major cycle length__ the period it takes until all threads to have been in business at least once. _least common multiple_ of the periods of all the threads will guarantee that we get the shortest possible major cycle length, and hence the most effective major cycle length.
2. __Minor cycle length__ should be _greatest common divisor_ of the periods of all the threads as this leads to the longest minor cycle possible.
+ __Schedulable?__ -- simply try to fit all execution times within the corresponding threads period. Dividing and distributing an execution time is perfectly fine if left with no other option.
+ Doesn't need a scheduler as it will just follow a fixed schedule calculated beforehand.


__WCET__ -- worst-case execution time
__C__ -- execution time (WCET)
__R__ -- worst-case response time, i.e. when control and execution is completed
__T__ -- period
__U__ -- C/T -- CPU utilization


__Rate Monotonic Scheduling--RMS__ 
+ short period <-> high priority
+ can guarantee schedulability if sum of C/T for all n threads is below $$n(2^{1/n} - 1)$$. N.B It might still be schedulable if above this bound.
+ as soon as there are threads ready to carry out their threads the one with the highest priority will. Even if a lower priority thread is being executed a higher-priority one will always force it to a halt by preemption as soon as it is ready.
+ __fixed-priority scheduling__


__Earliest Deadline First--EDF__ -- Highest priority is given to the thread that is closest to its deadline, this is checked every time a new thread is released.


### Priority inversion

Scenario: low priority thread: _L_, mid prio thread: _M_, high prio thread: _H_, shared resource R.
1. _L_ enters R,
2. _L_ is preempted by _M_,
3. _M_ is preempted by _H_,
4. _H_ tries to enter R but is locked out,
5. Since _H_ has nothing to do _M_ continues its execution,
6. _H_ (and _L_) has to wait until _M_ finishes. N.B. _H_ is blocked by lower prio thread (since _M_ is blocking _L_ which needs to release R in order for _H_ to continue.

To counter priority inversion the concept of priority inheritance is used.


### Basic priority inheritance

+ _L_ holding a resource will temporarily be raised to the priority of the higher-priority thread requesting the resource.
+ __WCET__ of _H_ = worst-case time to execute code in thread + for each used resource: maximum blocking time.
+ __Transitive priority inheritance__ can occur only in presence of nested critical sections. If _A_ is blocked by _C_ which in turn is blocked by _D_ it is necessary for _D_ to inherit _A_'s priority. If not _D_ will be preempted by _B_ and forced to wait around for _B_ to finish.
+ $$ B_i = \sum_{k=1}^K usage(k,i)C(k) $$ where usage(k,i) returns 1 if semaphore is used by at least one thread with a priority less than $$T_i$$ and at least one thread with a priority higher than or equal to the priority of $$T_i$$. Otherwise it returns 0.


### Priority-ceiling protocol

__Direct blocking__ occurs when a _H_ thread is blocked from accessing a resource due to it being held by a _L_ thread. Direct blocking is necessary for mutual exclusion and is able to occur in any preemptive-scheduler protocol.
+ For every semaphore a thread is involved with only one of the lower-priority threads can be blocking within one critical region protected by one semaphore. for every semaphore.

__Push through blocking__ is a consequence of the priority inheritance protocol. The time that the thread could've been active but instead was preempted by lower-priority thread due to a temporarily raised priority.
+ Occurs when _M_'s thread cannot run due to _L_'s thread that has inherited a higher priority. 
+ Can affect threads that has absolutely nothing to do with any shared resources.
+ A semaphore can induce push-through blocking for thread _M_ if it is accessed both by a thread with lower priority and a thread with higher priority. _M_ doesn't have to have anything to do with the semaphore in question.


-----
## Resource allocation graphs
The four components of a graph:

1. thread vertex - one possible state for a specific thread. drawn using a circle with the thread name inside.
2. resource vertex - monitor or semaphore of some sort. Drawn using a square with the resource name inside. 
3. assignment edge - directed edge from a resource to a thread means that the thread has locked that resource.
4. request edge - directed edge from a thread to a resource means that the thread wants to lock that resource.

If a thread tries locking many semaphores from inside each other, several vertices of this thread must be instanciated in the graph. Deadlock can occur if the graph contains cycles of edges that all are directed in the same direction, i.e.
* __DEADLOCK:__ R1 -> A -> R2 -> B -> R1 
* __NOT DEADLOCK:__ R1 -> A <- R2 -> B -> R1


-----
## concurrency in java

__rule of thumb: syncronized__
1. do not mix threads and monitors,
2. all public methods in monitor should be syncronized,
3. write a wrapper monitor if a class needs to be thread-safe,
4. do not use syncronized blocks.

### keywords

__volatile__ guarantees that the variable that is declared volatile always is read from main memory, instead of being put in some CPU cache. This way every thread reads the same value, i.e. the one in main memory. Atomicity is ensured. N.B. without __volatile__ only reads and writes to reference variables and primitives (except long and double) are atomic.

__syncronized__ only allows for one thread at a time to gain access to the method which has been declared syncronized. As a matter of fact any other thread trying to access any of the synchronized methods in the class would be blocked. Can also be placed as a block of code inside a method. A syncronized method has __three__ compartments for the threads:
1. exclusive area, where only one thread can be simultaneously.
2. monitor queue, where threads wait for the one in the exclusive area to finish or call __wait()__.
3. condition queue, where threads that have called __wait()__ are put, usually waiting for a condition to be met. 

__wait()__ makes the thread executing within the monitor to step out of the exclusive area and into the condition queue, allowing for another thread to try its luck. __wait()__ should always be placed inside a while(someBool). 

__wait(long timeout)__ and __wait(long timeout, int nanos)__ for waiting x number of milliseconds and x number of nanoseconds respectively. These should be used with care, however, as __notify()__ from some obscure subclass can interfere. To avoid mentioned __notify()__ one can implement the while-loop as follows.
~~~
synchronized monitorSleep(longtimeout) throws InterruptedException {
    long tf = System.currentTimeMillis()+timeout;
    while((timeout=tf-System.currentTimeMillis())>0) wait(timeout);
}
~~~

__notify()__ will cause a thread in the condition queue to retry its condition. If this condition returns true the thread is moved to the monitor queue. Which thread is notified isn't clear since java doesn't do the scheduling, hence the following method should be used in its stead.

__notifyAll()__ does the same as __notify()__ but for every thread in the condition queue. __USE THIS INSTEAD OF notify()__.


### java.lang.Thread

Using threads in java requires java.lang.Thread package. Threads are started using method start. A thread must have a runnable object (an object that implements the interface java.lang.Runnable). However, extending thread will take care of this since Thread already implements Runnable

__interrupt()__ -- changes a state in the thread that can be checked and reset with __interrupted()__. All threads that need to be able to be killed must actively check the __interrupted()__. E.g. 
~~~
public void run() {
    while(!interrupted()) { 
        ...
        ...
    }
}
~~~
__sleep(long millis)__ -- makes the thread wait for x number of milliseconds. Telling the OS that it is OK to swap currentThread. Sleeps the currentThread no matter which thread you call sleep with.

__isAlive()__ -- false if the thread has terminated or not been started. True if it is active at time of check. If __isAlive()__ returns false right after a call to __start()__ the thread must have terminated. If it returns true on the other hand it means the thread cannot have been started before.

__join()__ -- waits for the thread to return false from __isAlive()__ before continuing.

