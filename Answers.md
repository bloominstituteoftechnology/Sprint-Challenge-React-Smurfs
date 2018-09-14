1.  Explain the differences between `client-side routing` and `server-side routing`.

With server-side routing, a request causes the entire page to refresh. When the GET request reaches the server it responds with a new document. A server-side request will request only the data that is needed, and since this has been the standard for a while it is very good for SEO purposes. The downsides are that things like headers and footers, which don't need to be requested again, will be refreshed. The page load time can also take a while depending on the size of the document and/or the connection speed. Client-side routing results in a changed state of the application rather than a new page; the JavaScript on the page handles the route internally but prevents the request to the server. Since less data is processed, things are quick to load and animations are easier to work with. There are a few downsides to client-side routing, most notably that the entire website or application needs to be loaded on the first request, resulting in longer initial loading time. More setup and development work is required for client-side routing and SEO results are not yet as optimized as they are for server-side routing.

2.  What does HTTP stand for?

Hypertext Transfer Protocol. Its function is to handle hypertext requests and responses between clients and servers.

3.  What does CRUD stand for?

Create, Read, Update, Delete. This is a general list of HTTP methods.

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create - POST
Read - GET
Update - PUT (PATCH can be used similarly)
Delete - DELETE

5.  Mention three tools we can use to make AJAX requests.

Postman, jQuery, Axios.
