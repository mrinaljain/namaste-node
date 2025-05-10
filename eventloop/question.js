function a (){

   setImmediate(() => {
     console.log("setImmediate : Do this Immediatly,");
   });
   process.nextTick(() => {
     console.log("nextTick : Inside A,");
   });
}



function b(){

   a();
   process.nextTick(() => {
     console.log("nextTick : Inside B,");
   });
}


b();