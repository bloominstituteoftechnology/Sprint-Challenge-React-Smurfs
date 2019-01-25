1.  Explain the differences between `client-side routing` and `server-side routing`.

- Client-Side Routing
    - The browser detects when a user has clicked on an anchor element.
    - Client side code catches the event finds out if the url is an external link, if not then prevents the browser from making the HTTP GET request.
    - Routing library manually changes the URL.
    - Routing library changes the state of the app.
    - State changes are processed.

-  Server-Side Routing.
    - The browser detects when a user has clicked on an anchor element.
    - It makes an HTTP GET request to the URL found in the href tag of the anchor element.
    - Server processes the request and sends a new document.
    - Browser gets rid of the old document and renders the new document.

1.  What does HTTP stand for?
HTTP Stands for Hyper Text Transfer Protocol. HTTP is the underlying protocol used by the World Wide Web and this protocol defines how messages are formatted and transmitted.

1.  What does CRUD stand for?
This is short for Create Read Update and Delete. These are the most common types of operations that you'd perform when accessing data on a server. This is often called the DAL or the data access layer.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
Create
    - HTTP POST 201

Read
    - HTTP GET 200

Update 
    - HTTP PUT 405
    - HTTP PATCH 405

Delete
    - HTTP DELETE 405


1.  Mention three tools we can use to make AJAX requests
- axios
- express
- jquery
