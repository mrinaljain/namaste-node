import { exec } from "child_process";


exec("node --version", (err, data, errData)=>{
   console.log(data);
});