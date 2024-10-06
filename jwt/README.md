# JSON Web Tokens ( JWT )

JWT tokens are the one the most popular technique to implement user authentication on web applications.

JWT token has 3 main components
- #### Header
   - Type of Token
   - Algorithm used for Hashing ( HMAC SHA256 or RSA.)
- #### Payload
   - Contains the actual data that needs to be hashed  inside JWT token.
   - Contains extra information like expiry time
- #### Signature
   Conatins secret key , signature which uses the algorithm specified in header to encrypt the data
---
   **The output is three Base64-URL strings separated by dots that can be easily passed in HTML and HTTP environments**

  ![JWT](https://cdn.auth0.com/content/jwt/encoded-jwt3.png?raw=true)


  ### JWT is secure because
  - Even if token is leaked the signature validation will catch.
  - Expriy  can save
  - Map the tokens to the device 
  - Implement refresh token technique to frequently change token
  - Implement token blacklisting.
  ## Questions
  - Could you explain the different parts of a JWT token?