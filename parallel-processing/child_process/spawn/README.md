# SPAWN
spawn() ek child process start karta hai jo kisi external command ya executable ko run karta hai. Yeh output stream karta hai — iska matlab hai ki jaise-jaise output aata hai, waise-waise aap usse read kar sakte ho.
```
const { spawn } = require('child_process');

const process = spawn(command, [args], options);

```