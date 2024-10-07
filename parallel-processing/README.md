# Parallel Processing  in Node


 **Problem Statement**: Node works in a synchronous single threaded manner , but achives concurrancy / asynchronous nature with the help of libUV which is a C++ library, Still there is a lot of pressure on the single thread which can cause performance issues.

 **Solution**: 
 We can make use of multiple cors of the CPU machin and run multiple NODE instances that can help in sharing the load on server and this is known as **clustering**.

 Another solution is to run multiple chld processes from the parent process that will share the same memory and stream the work back once complet, this is known as **Worker Threads**.


