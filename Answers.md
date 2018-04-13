##1.  Explain the differences between `client-side routing` and `server-side routing`.

### `Client-Side Routing`: the server is handled in the JavaScript via components. When the side loads it loads entirely and new requests only change the parts of the page where a new component is being rendered. This is generally faster once the initial page has loaded.

### `Server-Side Routing`: a new document is served to the user when they request to see a new page, effectively discarding the old page. This is great for only showing data is requested and nothing more. Though it could be slow to load a fresh page every time new data is requested.

##2.  What does HTTP stand for?

### HTTP means Hypertext Transfer Protocol. HTTP is a network protocol - a set of rules that dictate the communication between web clients over the internet.

##3.  What does CRUD stand for?

### CRUD is an acronym for Create, Read, Update, Delete. CRUD are the four basic functions that are used when handling data.

##4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

### When a client needs to ask a server for information it should do a `GET` request specifying a URL that points to the desired resource. The R in CRUD.

### A `POST` request is used to ask the server to add or create new resources. The C in CRUD.

### The method used by the client to ask the server to make changes to specific resources is `PUT`. The U in CRUD.

### To remove or delete data from the server the client needs to send a `DELETE` request. The D in CRUD.

##5.  Mention three tools we can use to make AJAX requests.

### Three tools we can use to make AJAX requests are axios (promises), fetch (in-built), and other methods like jQueryAJAX.