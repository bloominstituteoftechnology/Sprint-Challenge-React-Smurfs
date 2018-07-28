1.  Explain the differences between `client-side routing` and `server-side routing`.
Client side routing is when the user's request is handled by the JavaScript already on the page. The request never goes to the server, and the JavaScript adjusts the state of the page according to the request. This changed state should (hopefully) make parts (components) of the page look different, but the whole page does not get refreshed.

Server side routing is when the whole page gets refreshed. I don't think you need JS for this. It's just basic http/website functionality, where you click on a link, the server gets the request, routes you to the new location, and the whole page refreshes.

2.  What does HTTP stand for?
hypertext transfer protocol

3.  What does CRUD stand for?
create, read, update, delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

CRUD	       	       HTTP
Create		       Post
Read		       Get
Update		       Put
Delete		       Delete

5.  Mention three tools we can use to make AJAX requests
Axios, fetch, jquery