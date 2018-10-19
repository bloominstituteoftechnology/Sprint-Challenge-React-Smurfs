1. Explain the differences between client-side routing and server-side routing.
   Server side routing follows the tradition of clicking a link to request new information from a server somewhere.
   The request is sent out, a server receives it and returns another file back. The new page is received and the
   client side clears the DOM and the browser window and repaints and re-assembles a new page. Client side routing
   is, in a lot of ways, an improvement in that you don't have to refresh the browser everytime, as all (or most) of
   the data is sitting there, ready to go. This cuts down on the clientside's wait for new information to load and
   the browser _can_ keep the same intereface on screen without repainting the window every time. A downside to this,
   rendering on the client side, is that it is a bit more of a payload to receive from the server since you are getting
   back a lot more data all at once, where as with server side rendering you're technically just getting the information
   you had requested.

2. What does HTTP stand for?
   HyperText Transfer Protocol

3. What does CRUD stand for?
   Create Read Update Destroy

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
   Create : POST
   Read : GET
   Update : PUT
   Delete : DESTROY

5. Mention three tools we can use to make AJAX requests.
   Axios, Fetch, jQuery as well as good ol' XHR requests.
