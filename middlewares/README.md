# Middlewares
---
Middleware functions are the normal  javascriptfunctions which we call request handlers in Node.js.
Middleware have  extra next()functionality which diffrentiates them with other request handelers.

## Benifets of Middlewares

- It accepts a next() argument which helps us to check request and make some changes or take some decisions. 
- It helps to implement common functionalites like logging , Auth check , error management etc.



```
const AuthMiddleware = (req , res, next)=>{
   // code to perform by middlewares

   next();
}
```
