1.  Explain the differences between `client-side routing` and `server-side routing`.

First lets define routing: the process by which clicking on internal hyperlinks within a web app "route" a user to other parts of that app, loading different pages.

In the early days of web apps, server side routing was the norm. If you wanted to go from the home page of a web app to some other content page, that request would be sent to that website's server, most likely via a RESTFUL API, and after some small time delay, the new information would be sent back to the device that requested it, allowing the new page to load.

Today, client-side routing is the norm. Javascript developers have made it so on the intial laod of a web app, lots of data and code can be transmited minimizing the need to make additional RESTFUL API calls to the backend. Additionally, using client-side routing, it is now possible to make websites more efficient than in the early days of the web by allowing just segments of the pages to be loaded (when necessary) rather than the entire page itself.

2.  What does HTTP stand for?

Hypertext transfer protocol

3.  What does CRUD stand for?

Create, read, update, delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

CRUD => POST, REQUEST, PUT, DELETE

5.  Mention three tools we can use to make AJAX requests

JQuery, Axios, Postman (not sure if this is correct. do frameworks count as tools?) 