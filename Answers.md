1.  Explain the differences between `client-side routing` and `server-side routing`.

Client Side Routing: the route is handled by the JS that is loaded on the page. When the user makes a change, the URL changes but no request to the server is sent. This could mean that that change could be for a component, or a request to the server for some specific data that the appliction needs. It is usually faster as less data is processed and makes for smoother pages. Initial load times are usually greater though as the whole site/app needs to be loaded. This is also less optimized for search engines, although Google (and Bing too?) are making progress on this front.

Server Side Routing: when any adjustments to the URL are made, there will be changes to our page that will come from the server, meaning that the whole page will refresh. The GET request is sent to the server, which then sends us a whole new page, discarding the old page. Search engines are optimized for this, so page ranks will be better for such sites. Downsides include the need to refresh all parts of the page for each GET request, which can take a while depeding on the connectivity. 

2.  What does HTTP stand for?

HyperText Transfer Protocol

3.  What does CRUD stand for?

Create, read, update, and delete.


4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create: .post
Read: .get
Update: .put
Delete: .delete

5.  Mention three tools we can use to make AJAX requests

Axios, Fetch, and jQuery?