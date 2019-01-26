
1. Explain the differences between client-side routing and server-side routing.

Server-side Routing - The user sends a url request to the server and the server sends back the requested files. Everytime the user clicks on a link on the page, a nnew request is sent out to the server for that information and the page is refreshed. So in Server-side routing not all the information is gathered during initial server request and new info needs to be sent over from server each time, but the info already requestion will not be refreshed when new info is requested, only that info that is changed or affected by the new server request.

Client-side Routing - The user sends an initial url request to the server and all of the information needed for that requested application is sent back from the server all incompassing to the client. In this way any requests made now in the page are easily handled internally through requests to the internally stored info and easily rendered for the user with no need to refresh each time.  


2. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

C (Create) - we use http method Post
R (Read) - we use http method Get
U (Update) - we use http method Put
D (Destroy) - we use http method Delete

3. Mention three tools we can use to make AJAX requests.

1. Axios
2. fetch
3. XMLHttpRequest