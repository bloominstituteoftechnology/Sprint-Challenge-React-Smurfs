1.  Explain the differences between `client-side routing` and `server-side routing`.

    - Server-side routing is the old standard. It requests HTML from the server when a new route is requested, retrieves only the specific information/HTML requested, reloads the page, and displays the new information. Client-side routing retrieves all information on initial load, relies on state to determine what information should display, and handles routing through the already existing javascript rather than the server. This makes routing incredibly fast.

1.  What does HTTP stand for?

    - HTTP stands for HyperText Transfer Protocol. It is a protocol, or set of rules, that defines how web clients and web servers communicate. It includes methods for interacting with servers.

1.  What does CRUD stand for?

    - CRUD stands for Create, Read, Update, and Delete. It's the actions, completed with HTTP methods, used to interact with the data held in the server.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    - Create: Post, Read: Get, Update: Put, Delete: Delete

1.  Mention three tools we can use to make AJAX requests

    - axios, fetch, and jQuery