1.  Explain the differences between `client-side routing` and `server-side routing`.

In client-side routing, requests are not actually passed to a server. For example, if you were to go to example.com/about, if they were using client-side routing the front end would take care of the routing and seamlessly switch between pages. With server-side routing, there is a get request at every endpoint, and every page is loaded from the server as opposed to having the entire site loaded at once.

2.  What does HTTP stand for?

Hypertext transfer protocol.

3.  What does CRUD stand for?

Create, Read, Update, Delete.

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create: HTTP post request
Read: HTTP get request
Update: HTTP put request
Delete: HTTP delete request

5.  Mention three tools we can use to make AJAX requests

We've been using axios.js to make most of our AJAX requests in this class. We've also used the built in fetch API. I used XMLHttpRequest a long time ago to make requests to servers.
