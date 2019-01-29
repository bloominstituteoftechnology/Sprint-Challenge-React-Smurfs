1.  Explain the differences between `client-side routing` and `server-side routing`.

- Server-side routing refers to the traditional network routing method used on
  the WWW since the beginning. The simplest way to describe it would be that a
  client sends a request to a server for a document, and the server then responds
  by sending the clent that document (or an error, depending). When the client
  interacts with that document (clicking a link, submitting a form, etc.), a new
  request is sent to the server, and it responds to that request. This involves a
  whole lot of page refreshes.
- Client-side routing means that the client is doing all of the heavy lifting,
  as far as changing views and moving data around goes. Interaction with the
  server is facilitated through AJAX calls that are used only when the application
  requires it.

1.  What does HTTP stand for?

- HTTP stands for HyperText Transfer Protocol. It is the networking protocol
  that the World Wide Web is built on, essentially.

1.  What does CRUD stand for?

- CRUD refers to the operations that are performed across networks between clients
  and servers, Create, Read, Update, and Delete.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

- Create - POST
- Read - GET
- Update - PUT
- Delete - DELETE

1.  Mention three tools we can use to make AJAX requests

- the address bar in your browser
- an external library like Axios in a React app
- a standalone application like Postman can be used to make AJAX requests to
  explore an API
