1.  Explain the differences between `client-side routing` and `server-side routing`. Server-side routing is when browsing, the adjustement of a URL can make things happen.
    this will happen regularly by clicking a link, which in turn will request a new page from the server. A whole new document would be served to the user.

    client-side is when the route is handled internally by the JavaScript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prvented. The adjustment to the URL will result in a changed state of the application. This could be the rendering a new component, or even a request to the server for some data that the application will turn into HTML elements.

1.  What does HTTP stand for? HyperText Transfer Protocol. HTTP is the protocol used by the World Wide Web and this protocol defines how messages are formatted and transmitted, and what actions web servers and browsers should take in response to various commands.

1.  What does CRUD stand for? CRUD stands for Create, Read, Update, Delete.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers. 

    Create - POST

    Read - GET

    Update - PUT

    Delete - DELETE

1.  Mention three tools we can use to make AJAX requests
    JQuery, Axios, and fetch