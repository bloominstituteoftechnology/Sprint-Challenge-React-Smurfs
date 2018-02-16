## Answers

1. **Explain the differences between `client-side routing` and `server-side routing`.**
  * **_Server side routing:_** causes a page to refresh. A new `GET` request is sent to the server and a new document is served to the browser.
  * **_Client side routing:_** Routing is handled by Javascript that is loaded on the page. The request to the server is prevented and the page does not refresh when a new link is clicked. Instead, the route causes elements on the existing page to change, or rendering of different components 

2. **What does HTTP stand for?** 
  * Hyper Text Transfer Protocol

3. **What does CRUD stand for?** 
  * CREATE
  * READ
  * UPDATE
  * DESTROY

4. **Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.**
  * PUSH    (create)
  * GET     (read)
  * PUT     (update)
  * DELETE  (destory)

5. **Mention three tools we can use to make AJAX requests.**
  * axios (or other libraries)
  * promises
  * API's