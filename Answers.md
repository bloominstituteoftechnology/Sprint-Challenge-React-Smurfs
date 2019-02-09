1.  Explain the differences between `client-side routing` and `server-side routing`.
    Server side routing occurs when you click on a link, it makes a request to a server, and then serves a new document to the user. Client-side routing occurs when a route is handled internally by the page. The whole page won't refresh when using client-side routing, just some element or component of it.

    With server-side routing the only data that's loaded is what is requested, whereas with client-side routing the whole website or application is loaded on the first request.

    With server-side routing the whole page is refreshed every time a request is made which could be slow and/or unnecessary. With client-side routing, after first load, transitions/animations/navigating to different parts of the website/application are generally much faster.

2.  What does HTTP stand for?
    HyperText Transfer Protocol

3.  What does CRUD stand for?
    Create, read, update, delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    POST: Create
    GET: Read
    PUT: Update
    DELETE: Delete

5.  Mention three tools we can use to make AJAX requests
    [axios](https://github.com/axios/axios), [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), [request](https://github.com/request/request)
