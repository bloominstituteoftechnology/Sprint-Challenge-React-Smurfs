1.  Explain the differences between `client-side routing` and `server-side routing`.
Client side routing is used a lot in things like single page applications and with React. When a request is sent, there is a change in state but it does not refresh the page. Data changes should be faster than server side routing since only the elements being dealt with will change, and does not need to reload the whole page.

With server side routing, the request is sent to the server, all the info is sent over, the data is processed, and all the data is sent back. The web page will refresh every time tis is done. If there is a lot of info being requested, it can take a while to process and load.


1.  What does HTTP stand for?
Hyper Text Transfer Protocol

1.  What does CRUD stand for?
Create, Read, Update, Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
C = POST
R = GET
U = PUT
D = DELETE

1.  Mention three tools we can use to make AJAX requests

fetch, axios, jquery