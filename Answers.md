1.  Explain the differences between `client-side routing` and `server-side routing`.
    Client-side routing:
        -All data is requested on the first page load; even the data that isn't currently needed or may never be needed.
        -Initial load time may be slower due to the initial data request.
        -Transition between pages don't prompt a full page reload.
    Server-side routing:
        -Optimized for SEO.
        -Faster initial load time, but each refresh yeilds a full page refresh; which is redundant for some shared elements.
        -Only need to request data that is need for a particular page.

1.  What does HTTP stand for?
        -HyperText Transfer Protocol

1.  What does CRUD stand for?
        -Create Read Update Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
        -Get, Post, Put, Delete

1.  Mention three tools we can use to make AJAX requests
        -Axios, Fetch, jQuery