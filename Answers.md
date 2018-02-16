1. Explain the differences between client-side routing and server-side routing.
  Server-side routing involves all information requests that are handled by a server. It requires a page refresh with each new request because the client only has the information it needs per request.

  Client-side routing involves the client getting all the information at once so the client can handle all changes in URL. When loaded, it provides a smoother experience because no new requests need to be made to the server.

2. What does HTTP stand for?
  HTTP stands for Hyper Text Transfer Protocol. It allows communications between servers and clients.

3. What does CRUD stand for?
  CRUD is an acronym for Create, Retrieve, Update, Delete. These are the basic commands needed for a complete program with persistent storage.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
  using axios (or others with similar available methods): Create <> Post; Retrieve <> Get; Update <> Put; Delete <> Delete
  
5. Mention three tools we can use to make AJAX requests.
  the XMLHttpRequest interface is built-in, but libaries such as Fetch, axios, or jQuery make AJAX requests easier to implement