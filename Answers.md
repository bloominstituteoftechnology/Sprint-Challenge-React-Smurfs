1.  Explain the differences between `client-side routing` and `server-side routing`.

Server-side routing is when the client makes a GET request to the server in order to get the webpage that was requested. This is a less resource intensive way of routing because the user does not have to request all the information at once, like client-side routing, and the user might just want that one webpage. Another problem with server-side routing is that components with the same information get downloaded again such as the header or the footer. Client-side routing is great for one page applications.

2.  What does HTTP stand for?
HTTP stands for Hyper Text Transfer Protocol, it is how the client talks to the server and vise-versa. Each request has a header and a body for the server.

3.  What does CRUD stand for?

C - Create - POST
R - Read - GET
U - Update - PUT
D - Delete -  DELETE

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

C - Create - POST
R - Read - GET
U - Update - PUT
D - Delete -  DELETE

5.  Mention three tools we can use to make AJAX requests

Axios is a package that can be added with a package manager such as npm. We can use Promises to fetch data. It has three states which are rejected, pending, and resolved. There are other tools like PostMan and Insomnia for making those requests and for debugging our AJAX requests.