1.  Explain the differences between `client-side routing` and `server-side routing`.

Client side routing is where JavaScript manages the data in its memory. The server compiles the whole app immediately and then it displays what we need afterwards. The request to the server is prevented so the browser doesn't need refresh between routes.

Server side routing refreshes the page each time as it creates a new GET request to the server which responds with a new document, disregarding the old document.

1.  What does HTTP stand for?

HTTP = hypertext transfer protocol. A network protocol (i.e. a set of rules) that governs the way web clients communicate with web servers over the browser. 

1.  What does CRUD stand for?

CRUD = CREATE, READ, UPDATE, DELETE

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

- post = create new resources on the database = CREATE
- get = read data from the database = READ
- put = update data that is currently on the database = UPDATE
- delete = delete data = DELETE

1.  Mention three tools we can use to make AJAX requests

Promise, fetch, setTimeout.