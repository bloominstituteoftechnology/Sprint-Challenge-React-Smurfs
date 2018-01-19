## Client-Side Routing && Axios
### Client-side routing vs. Server-side routing

1. Client side routing means that all processing of links within an app are performed in the user's browser, allowing the information displayed to change without refreshing the page or transmitting any additional data from the server to the browser.
2. Server-side routing means that all navigation is tracked and performed on the server that stores the web site or app. This results in information being transmitted from the server to the user's device every time a new page or set of data is requested. This can result in laggy performance in the case of an intermittent Internet connection, or an app becoming unusable if the connection goes down altogether. 

### CRUD - the four basic functions of persistent (stateful) storage of data in an app.
#### CRUD : HTTP methods, RESTful API call(s)

1. Create : Put / Post
2. Read : Get
3. Update : Put / Post / Patch
4. Delete : Delete

### AJAX requests 
Asynchronous JavaScript And XML makes possible asynchronous communication between a user's device and a server, allowing updated data to be either displayed to the user or stored on the server without refreshing a page in a browser or otherwise interrupting the state of an app.

1. JavaScript is the original tool for this. A call is made to a server, with information about what is required to be sent back. The server responds with the requested data.
2. Fetch is an improvement over the older XMLHttpRequest (XHR).
3. jQuery is a library for use with JavaScript which structures the XHR on behalf of the developer. 
