This is a minimally reproducible example of how to get the flash message working in a Passport.js Strategy. Related to [this StackOverflow question](https://stackoverflow.com/questions/61062259/express-passportjs-cant-read-flash-messages/61146297#61146297)

Open http://localhost:9090/login in your browser once initially to trigger the auth failure.

Open Dev Tools, then reload the page. The response should include a header `x-flash-object` which contains the JSON-serialized flash object, and set a cookie `flash-object` with the same contents. 
