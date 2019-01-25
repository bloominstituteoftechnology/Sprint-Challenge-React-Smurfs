1.  Explain the differences between `client-side routing` and `server-side routing`.
    Server-side
    When browsing, the adjustment of a URL can make a lot of things happen. This will happen regularly by clicking on a link, which in turn will request a new page from the server. This is what we call a server-side route. A whole new document is served to the user.

Client-side
A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application. The changed state will ultimately result in a different view of the webpage. This could be the rendering of a new component, or even a request to a server for some data that the application will turn into some HTML elements.

1.  What does HTTP stand for?
    HyperText Transfer Protocol
    HTTP means HyperText Transfer Protocol. HTTP is the underlying protocol used by the World Wide Web and this protocol defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.

1)  What does CRUD stand for? create, read, update, delete.

1)  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    Create = PUT with a new URI
    POST to a base URI returning a newly created URI
    Read = GET
    Update = PUT with an existing URI
    Delete = DELETE

1)  Mention three tools we can use to make AJAX requests
    axios , Fetch API
    , jquery
