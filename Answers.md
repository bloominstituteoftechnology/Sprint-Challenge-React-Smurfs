1.  Explain the differences between `client-side routing` and `server-side routing`.

In server-side routing, there is a page reload everytime a request is made from client to server (i.e., load, refresh, interacting with a button, creating, deleting something on the page). Everything gets loaded, up front (aka front loading), only component that are needed, get reloaded, not the entire thing. This is a faster user experience on initial load.

In client-side routing, everything gets loaded, so it's a slower user experience, on initial load. But once the page is loaded, it won't refresh everytime a user interacts with it. This is possible through React and Component-Based 'React Way' architecture. Client-side routing is the Modern way of doing things.


1.  What does HTTP stand for?

HTTP stands for "Hyper Text, Transfer Protocol"

1.  What does CRUD stand for?

CRUD is an acronym for Create Read Update Destroy. 

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

HTTP methods include: Get, Post, Delete, Put, 

Create = Post
Read = Get
Update = Put
Destroy = Delete

1.  Mention three tools we can use to make AJAX requests

Fetch-API (not the standard, yet)
Axios   (currently works well)
XML HTTP Request (outdated way)
