# Child Processes (process-level parallelism)
child_process allows you to spawn new OS-level processes from your Node.js application. These processes run independently and can be used to:

- Run CPU-intensive tasks separately
- Execute shell commands
- Spawn other Node.js scripts
- Use different programming languages (like Python, Java)

4 types se child process bna sakte hai 
1. spawn
   : 👉 Jab aapko kisi command ka bada output ya long-running process real-time mein dekhna ho.
2. fork
   : 👉 Jab aap ek aur Node.js file ko child process ki tarah run karna chahte ho aur usse baatcheet (IPC) bhi karni ho.
3. exec 
   : chota mota Shell command run karta hai (output ek sath milta hai)
4. execFile 
   : Shell nahi, seedha file run karta hai