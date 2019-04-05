1.  Explain the differences between `client-side routing` and `server-side routing`.

A) Client-side routing is when routing is handled internally by the application (in our case, the JavaScript/React in our application). Client-side routing occurs in Single Page Applications, where the entire application is loaded at once. This means when you route to a different page -- you're still on the same page/application/window. The URL will change, but the page will not refresh because it isn't actually requesting more data, because client sided routing means that all of the data is present at original load.

B) Server-side routing, in contrast, loads only what is needed to load at the given time. In this sense, server-side routing is faster because single page applications have to load the entire application before you can proceed to use the app. However, client-side routing is faster in the sense of actually using the application, because once the data is loaded, then all of it is loaded and we don't make any more requests. Server-side routing does result in a page refresh.

1.  What does HTTP stand for?

A) HyperText Transfer Protocol

1.  What does CRUD stand for?

A) Create, Read, Update, Delete.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

A) Create = Post, Read = GET, Update = PUT, Delete=DELETE.

1.  Mention three tools we can use to make AJAX requests

A) Axios, Fetch, and jQuery.
