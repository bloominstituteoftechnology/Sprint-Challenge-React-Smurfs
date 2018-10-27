1.  Explain the differences between `client-side routing` and `server-side routing`.
Client-side routing will load the whole web-app in it's entirety at the very beginning. This results in a slower initial load time,
but will then allow you to navigate the app with little to no wait at all. One of the downfalls of this is data usage. Since everything 
is loaded, there might be parts of the app that never get used, but will still have been loaded.

Server-side routing is essentially the opposite. Only data requested from the server is loaded at any given action. This will result in shorter load times,
but every action you do will require a complete refresh.

1.  What does HTTP stand for?
Hyper Text Transfer Protocol. It allows web-apps to communicate with the server.

1.  What does CRUD stand for?
Create
Read
Update and
Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
Create - PUT or POST
Read - GET 
Update - PUT
Delete - DELETE

1.  Mention three tools we can use to make AJAX requests
GET/POST, FETCH, PUT