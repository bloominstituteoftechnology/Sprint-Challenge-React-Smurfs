1.  Explain the differences between `client-side routing` and `server-side routing`.

    Client-side routing is done within the client, or browser, instead of relying on making unique http requests to a remote server that must then respond with a new set of files. Client-side routing, while initially taking longer to load, is faster once loaded. Client-side routing enables single-page apps to contain a large amount of information and be much faster during use.

2.  What does HTTP stand for?

    HyperText Transfer Protocol, which is a standard used to format and transmit messages between web servers and clients.

3.  What does CRUD stand for?

    C: Create, R: Read, U: Update, D: Destroy
    
    C = The HTTP method `post` is associated with Create, because it "posts" data to a database
    R = The HTTP method `get` is associated with Read, because it "gets" data from a database to be read by the application.
    U = The HTTP method `put` is associated with Update, because it "puts" data into a database
    D = The HTTP method `delete` is associated with Destroy, because it literally deletes data from a database

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    (See above)

5.  Mention three tools we can use to make AJAX requests

    1. Postman - an app to display data associated with a database/api
    2. Axios - a library for making HTTP requests
    3. Fetch, jQuery AJAX - other libraries for making HTTP Requests