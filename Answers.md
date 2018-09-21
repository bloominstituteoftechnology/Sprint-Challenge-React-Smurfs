1.  Explain the differences between `client-side routing` and `server-side routing`.

A server side request causes the whole page to refresh. This is because a new Get request is sent to the server which responds with a new document, and discards the previous page.

A client side route happens when the route is handled internally by the javascript that is loaded on the page. When a user clicks a link, the url changes but there is no request to server. The whole page doesnt refresh, elements inside the application change.

1.  What does HTTP stand for?
    HyperText Transfer Protocol
    HTTP functions as a request-response protocol in the client-server computing model.

1.  What does CRUD stand for?
    CRUD is an acronym for the four basic types of SQL commands: Create Read, Update, Delete.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    CRUD- Create Read, Update, Delete.

HTTP Methods Get(read) Put(update) Patch(update) Delete(delete)

1.  Mention three tools we can use to make AJAX requests
    FetCH API, Axios, Request
