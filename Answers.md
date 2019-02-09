1.  Explain the differences between `client-side routing` and `server-side routing`.
    In client side routing all of the front-end content of a website is pre-loaded onto the client's computer, so that whenever the user interacts with the website, the content loads from their end and it faster to load. In server side routing the content is not pre-loaded and is held on the server hosting the website, and any time anything needs to be loaded on the client's end, the client-side computer asks the server to send it the information to display. Client-side routing often results in a slow initial load of  the website, but fast moving between pages and content of the website, whereas server-side routing results in a moderate loading speed of everything.

2.  What does HTTP stand for?
    HyperText Transfer Protocol. It is the main method for transferring information across the internet.

3.  What does CRUD stand for?
    Create, Read, Update, Delete. The four basic ways in which you can interact with information held on a server.

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    Read is GET, create is POST, update is PUT, and delete is DELETE. All of these communicate to the server what you want to do. A GET request is requesting to "get" information from the server, a POST request is asking the server to create new information or "post" new info to it, PUT is telling the server to "put" new information onto already existing information which is updating it, and DELETE is requesting that the server delete information.

5.  Mention three tools we can use to make AJAX requests
    AXIOS, Request, and jQuery. An AJAX request is an HTTP request but it is performed in JavaScript asynchronously. Asynchronous requests run in the background while other code is running. AXIOS and Request are both HTTP request clients that make AJAX requests, whereas jQuery is a library that can make AJAX requests but also performs other functions. 