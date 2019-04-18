## Question 1: Lingo

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

### Scheduling

The main goal of scheduling is to get a concurrent program that is also correct in terms of timing. In order to be able to analyze a program several simplifications must be made. E.g.
1. threads must not depend on each other. I.e there can be no [__wait()__ or __notify()__](#concurrency-in-java),
2. there must be a fixed number of threads,
3. all threads are periodic with known periods,

__cyclic executive scheduling__
+ consists of 
    * __major cycle length__ the period it takes until all threads to have been in business at least once. _least common multiple_ of the periods of all the threads will guarantee that we get the shortest possible major cycle length, and hence the most effective major cycle length.
    * __minor cycle length__ should be _greatest common divisor_ of the periods of all the threads as this leads to the longest minor cycle possible.
+ howto: simply try to fit all execution times within the corresponding threads period. Dividing and distributing an execution time is perfectly fine if left with no other option.
+ doesn't need a scheduler as it will just follow a fixed schedule.


__WCET__ -- worst-case execution time
__C__ -- execution time (WCET)
__R__ -- worst-case response time, i.e. when control and execution is completed
__T__ -- period
__U__ -- C/T -- CPU utilization


__rate monotonic scheduling--RMS__ 
+ short period <-> high priority
+ can guarantee schedulability if sum of C/T for all n threads is below n(2^(1/n) - 1). N.B It might still be schedulable if above this bound.
+ as soon as there are threads ready to carry out their tasks the one with the highest priority will. Even if a lower priority task is being executed the higher one will force it to preempt in favor of the higher one.
+ __fixed-priority scheduling__

__generalized RMS__

__earliest deadline first--EDF__
+ highest priority is given to the thread that is closest to its deadline, this is checked every time a new task is released.

__premptive scheduling__ -- when using strict priorities






### Priority inversion

Scenario: low prio thread: L, mid prio thread: M, high prio thread: H, shared resource R.
1. L enters R,
2. L is preempted by M,
3. M is preempted by H,
4. H tries to enter R but is locked out,
5. Since H has nothing to do M continues its execution,
6. H (and L) has to wait until M finishes. N.B. H is blocked by lower prio thread (since M is blocking L which needs to release R in order for H to continue.

To counter priority inversion the concept of priority inheritance is introduced below. 

__basic priority inheritance__
+ low prio thread holding a resource will temporarily be raised to the priority of the higher prio thread requesting the resource.
+ WCET for highest-priority thread = worst-case time to execute code in thread + for each used resource: maximum blocking time
+ __transitive priority inheritance__ can occur only in presence of nested critical sections. If A is blocked by C which in turn is blocked by D it is necessary for D to inherit A's priority. If not D will be preempted by B and forced to wait around on B.
+ $$ B_i = \sum_{k=1}^K usage(k,i)C(k)_ $$ where usage(k,i) returns 1 if semaphore is used by at least one task with a priority less than T_i and at least one task with a priority higher than or equal to the priority of T_i. Otherwise it returns 0.



__priority-ceiling protocol__

__immediate inheritance protocol__

__direct blocking__ occurs when a high-priority task is blocked from accessing a resource due to it being held by the low-priority task. Direct blocking is necessary for mutual exclusion and has always been able to occur.

__push through blocking__ is a consequence of the priority inheritance protocol. 
+ Occurs when a mid-priority task cannot run due to a lower-priority task that has inherited a higher priority. 
+ Can affect tasks that has absolutely nothing to do with any shared resources.
+ A semaphore can induce push-through blocking for task M if it is accessed both by a task with lower priority and a task with higher priority. M doesn't have to have anything to do with the semaphore in question.
+ only one of the lower-priority tasks can be within a blocking critical region protected by any given semaphore.


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
The four components of a graph:

1. thread vertex - one possible state for a specific thread. drawn using a circle with the thread name inside.
2. resource vertex - monitor or semaphore of some sort. Drawn using a square with the resource name inside. 
3. assignment edge - directed edge from a resource to a thread means that the thread has locked that resource.
4. request edge - directed edge from a thread to a resource means that the thread wants to lock that resource.

If a thread tries locking many semaphores several instances of this thread must be instanciated in the graph. 

## Question 3: Priorities and scheduling





## concurrency in java

### keywords

__volatile__ guarantees that the variable that is declared volatile always is read from main memory, instead of being put in some CPU cache. This way every thread reads the same value, i.e. the one in main memory. Atomicity is ensured. N.B. without __volatile__ only reads and writes to reference variables and primitives (except long and double) are atomic.
__syncronized__ only allows for one thread at a time to gain access to the method which has been declared syncronized. As a matter of fact any other thread trying to access any of the synchronized methods in the class would be blocked. Can also be placed as a block of code inside a method. A syncronized method has __three__ compartments for the threads:
1. exclusive area, where only one thread can be simultaneously.
2. monitor queue, where threads wait for the one in the exclusive area to finish or call __wait()__.
3. condition queue, where threads that have called __wait()__ are put, usually waiting for a condition to be met. 

__wait()__ makes the thread executing within the monitor to step out of the exclusive area and into the condition queue, allowing for another thread to try its luck. __wait()__ should always be placed inside a while(someBool) __wait()__;. __wait(long timeout)__ and __wait(long timeout, int nanos)__ for waiting x number of milliseconds and x number of nanoseconds respectively. These should be used with care, however, as __notify()__ from some obscure subclass can interfere. To avoid mentioned __notify()__ one can implement the while-loop as follows.
~~~
synchronized monitorSleep(longtimeout) throws InterruptedException {
    long tf = System.currentTimeMillis()+timeout;
    while((timeout=tf-System.currentTimeMillis())>0) wait(timeout);
}
~~~

__notify()__ will cause a thread in the condition queue to retry its condition. If this condition returns true the thread is moved to the monitor queue. Which thread is notified isn't clear since java doesn't do the scheduling, hence the following method should be used in its stead.

__notifyAll()__ does the same as __notify()__ but for every thread in the condition queue. __USE THIS INSTEAD OF notify()__.

### Thread

Using threads in java requires java.lang.Thread package. Threads are started using method start. A thread must have a runnable object (an object that implements the interface java.lang.Runnable). However, extending thread will take care of this since Thread already implements Runnable

+ __interrupt()__ -- changes a state in the thread that can be checked with __isInterrupted()__. To check for the currentThread the static __interrupted()__ exists.
+ __sleep(long millis)__ -- makes the thread wait for x number of milliseconds. Telling the OS that it is OK to swap currentThread. Sleeps the currentThread no matter which thread you call sleep with.
+ __isAlive()__ -- false if the thread has terminated or not been started. True if it is active at time of check.
+ __join()__ -- waits for the thread to die before continuing

