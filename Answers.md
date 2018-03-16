1. Explain the differences between client-side routing and server-side routing.
⋅⋅⋅Server-side: When clicking a link, a new page is requested from the server. A new document is served to the user. Basically server-side requests causes the whole page to refresh because a new GET request is sent each time a user clicks, completely discarding the old page altogether.
⋅⋅⋅Client-side: When a user clicks a link, the URL changes but the request to the server is prevented. The state of the application will change and result in a different view or render of webpage or component. The whole page won't refresh when using client-side routing, only the change of elements inside the application.


2. What does HTTP stand for?
⋅⋅⋅HyperText Transfer Protocol. This protocol is used by the World Wide Web (www) and defines how messages are formatted, transmitted, and what actions servers and browsers should take in response to various commands.

3. What does CRUD stand for?
⋅⋅⋅Create, Read (or Retrieve), Update, Delete. These are the four basic functions of persistent storage. Most applications have some type of CRUD functionality. A CRUD app is one that uses forms to get data in/out of a database.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
⋅⋅⋅POST:CREATE, GET:READ, PUT:UPDATE, DELETE:DELETE,

5. Mention three tools we can use to make AJAX requests.
⋅⋅⋅Fetch, Request, Axios