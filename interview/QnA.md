1. What do you mean by Asynchronous API?

Asynchronous API is an external datasource which is contacted  fetch data and it returns DATA after processing it on server.
- it is nonblocking
- other tasks can be continued
- once responce comes it can be executed.


2. What are the benefits of using Node.js?
- non blocking
- async
- Javascript on server


3. Is Node a single threaded application?

Yes Node JS is a single threaded Javascript Runtime that runs synchronously , but it is able to handle multiple tasks with the help of Event loop.

4. What is global installation of dependencies?
The dependencies which are installed at the global level by node and are not associated to any specific project .

5. What is an error-first callback? 

Error-first callbacks are used to pass errors and data. The first argument is always an error object that the programmer has to check if something went wrong. Additional arguments are used to pass data.

```
fs.readFile(filePath, function(err, data) {
  if (err) {
    //handle the error
  }
  // use the data object
});
```

6. What's the difference between operational and programmer errors? 


7. What is the difference between Nodejs, AJAX, and jQuery? 

Node.js is Javascript runtime
AJAX is Asynchronous Javascript And XML
jQuery is Jayascript library

8. How to make Post request in Node.js?

```
async function callApi(){
   let data = await fetch('',{
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'   // ✅ set headers
      },
      body: JSON.stringify({ key: 'value' })  
   } )
}
```

9. What are the key features of Node.js?


10. What is control flow function? 



11. What is Node?

- Node js is a javasript runtime which executes JS on server
- javascript runtime is (V8 engine + Extra superpowers )
- v8 engine is a c++ program 

12. If V8 can execute javascript , then why dont we keep v8 directly on server?

V8 can execute javascript , but in order for an application to work we need extra functionalites like API calls , file processing , connecting to DB etc and thats not possible in v8
therefor we  create a javascript runtime which has V8 and also has javascript superpowers.

13. Why is V8 written in C++ language?

V8 is used for executing Javascript and we need some program that can conver the Hogh level language that we are writing into a binarry code .
hence we use C++ because it fast in doing the same.

14. What is v8.
v8 is a javascript engine that  executes Javascript for us.
- it is written in C++
- it converst JS code to machine and finally binary code.


15. What are ECMA standarts ?

ECMA standards are the set of semantics , rules decided by ECMA to write javascript.

16. what is node REPL

it is an environment provided by node which means Read Evaluate Print Loop

17. what is windoe object in node
this is the object that contains all the superowers that we talk about in node.

18. is this poited to global object in Node
NO a big NO , this is an empty object


19. what is modules in Node.js

Modules in js are a collectiojn of javascript code which is private to itself.
- we need to export anything if we want to use it on other places.

20. What are diffrent types of module formats ?

there are 2 types of modules cjs and mjs

- common js is older way , modular is newer way
- common js uses require and module.exports , modular uses import export
- common js loads the modal synchronously, modular loads the file in async is available


21. [TODO]how to load module asynchronously using modular approach?


22. When we write require("/path") in node JS, what happens in backend ?

- require is basically given by node js to us
- when ever a module/file is required to load  it goes through a 5 step process
   1. file extension is checked , json, js, tsx etx
   2. based upon extension the code is read from the file
   3. the entire code is wrapped arround an IIFE
      1. the IIFE has parameters like (require, module ) etc which are avavailable for us to use.
   4. IIFE is evaluated
   5. Module is also stored in cache for future reffrences


23. how are functions, var etc are private to the module?

  Because they are wrapped insideIIFE which hase private scope.

24. How are errors handeled inside the event loop.

 the errors in event loop are handeled exactly the same way where evry place.foe example there is an error in FS. operation so the FS  method will return an error callback and event loop will put that error callback in Que and whenever callstack is empty the error callback will be executed.

 25. How can you prevent blocking the event loop in Node.js under heavy load?
- by offloading the heave tasks
- if its CPU intensive then use child processes  Or  worker threads
- if its Async task then it should be ofloaded to lib UV

26. what if most of the requests are synchronous , followup on above question.

- yaha phir parallel processing ki jarurat hai 
- cluster module , pm2 se multiple node instance run karenge
- caching bhi laga sakte hai
- we can use request Queues also 
- Rate limmiting