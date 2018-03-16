##### 1. Explain the differences between `client-side routing` and `server-side routing`.

In server-side routing, the server processes the request made when a user clicks a link, and sends a whole new HTML document back as a response, discarding the old page entirely. This has been the traditional model for the web.

In client-side routing, the event is caught, and instead of a get request being made, the transition to the new URL is made manually on the client (using the HTML5 history API). The state of the app is then changed by the routing library, which is then followed by the library the app is written in (like React, as an example).

Despite being more complicated due to the lack of a clear distinction that client/server typically has, client-side routing has the advantage of saving on the data being downloaded, and allowing you to reuse DOM elements.

##### 2. What does HTTP stand for?

Hypertext Transfer Protocol. The idea is to link text documents together using what are called hyperlinks.

##### 3. What does CRUD stand for?

Create/Read/Update/Destroy. These are the critical functions involved in persistent storage, most typically represented by databases. You must be able to do all four of these things for your application to be considered complete, assuming it stores its own information.

##### 4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create is closest to the POST method, Read would match GET, Update would be PUT, and Delete/Destroy would be nearly identical as the DELETE method.

##### 5. Mention three tools we can use to make AJAX requests.

I'm not sure what this question is asking exactly. Do you mean a client that can make requests, like axios? In that case, I'd add Fetch, jQuery, or Request as alternatives.
