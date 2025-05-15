import { spawn } from "child_process";


//? command execute krne k liye use krte hai 
let node = spawn('node',['--version']);


// on output
node.stdout.on('data', (data)=>{
   console.log(`Output: ${data}`);
})

// on error
node.stderr.on("data", (err) => {
  console.error(`Error: ${err}`);
});

// on connection close
node.on("close", (code) => {
  console.log(`Process exited with code ${code}`);
});