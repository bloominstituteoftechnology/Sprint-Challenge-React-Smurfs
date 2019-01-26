1.  Explain the differences between `client-side routing` and `server-side routing`.
  Server-side routing:
    Pros: 
       1- A server-side route will only request the data that’s needed. No more, no less.
       2- Initial Loading can be really fast.
    Cons:
       1- Every request results in a full-page refresh. That means that unnecessary data is being requested. A header and a footer of a webpage often stays the same. This isn’t something you would want to request from the server again
       2- It can take a while for a page to be rendered.
  Client-side routing:
    Pros:
       1- Because less data is processed, routing between views is generally faster.
       2- Smooth transitions and animations between views are easier to implement.
     Cons:
       1- The whole app needs to be loaded initially. That’s why the initial loading time usually takes longer.
       2- There is a possibility that there is data downloaded for views you won’t even go to.

2.  What does HTTP stand for?
  HTTP means HyperText Transfer Protocol. 
  HTTP is the underlying protocol used by the World Wide Web and this protocol defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.
3.  What does CRUD stand for?
  CRUD  describes all of the functions that can be done to data that is being stored within a database or application.
  Create, Read, Update, and Delete (Destroy)

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
  C (Create) => POST request
  R (Read) => GET request
  U (Update) => PUT
  D (Delete or Destroy) => DELETE

1.  Mention three tools we can use to make AJAX requests
Axios, Fetch API, and jQuery