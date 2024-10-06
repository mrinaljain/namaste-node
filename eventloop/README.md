# Event Loop
Event loop is a C program present inside LibUV library  of Nodejs which makes it possible for Node Js to perform Non Blocking Async  Event Driven Operations.
Event Loop is a calback queue managing machenism which manages the tasks and sends them to CallStack as per task's priorty .

![Event Loop](https://i.sstatic.net/We1x9.png)

## Queues inside Event Loop

1. Microtask Queue
   1. process.nextTick();
   2. Promise()
2. Timer Queue
   1. setTimeOut()
   2. setInterval()
3. I/O Queue
   Works in case on any async I/O operation.
4. Check Queue
   1. setImmediate()
5. Close Queue
   All major dispose events happen here. 


## Order of Execution

Microtask Queue
TimerQueue
Microtask Queue
I/O Queue
I/O Polling
Microtask Queue
Check Queue
Microtask Queue
Close Queue


## I/O Polling

Inside the Event loop when ever an I/O task enters ( example File reading) . During the first tic or first cycle the the event loop keeps poling if the I/O task is complete or not .
Once I/O task is complete  then only callback is registerd. and this process is known as I/O pooling.

