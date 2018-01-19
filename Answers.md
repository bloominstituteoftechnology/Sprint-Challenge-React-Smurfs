# Questions

1. Explain the differences between `client-side routing` and `server-side routing`.
    * `server-side routing` stores html pages in a remote server. Whenever an item is clicked and the url changes the client sends a request to the server which then reloads the page with a brand new html page. 
    * `client side routing` happens internally. The client hosts several components and states. When an item is clicked and the url changes the client renders a new component internally without sending out a request to the server.
1. What does HTTP stand for? 
    * **H**yper**t**ext **T**ransfer **P**rotocol
1. What does CRUD stand for? 
    * create, read, update, delete
1. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    * The `.post()`, `.get()`, `.put()`, and `.delete()` methods.
1. Mention three tools we can use to make AJAX requests.
    * JSON, axios, fetch