Explain the differences between client-side routing and server-side routing
A: When you click on a link on a webpage...a new page is usually requested from the server...this is server side routing...The whole page is refreshed because a new GET request is sent and the           response is a new document which replaces the old page completely.
   In client side routing the route is handled internally by the Javascript that is loaded on the page. A link clicked will result in a change of state and maybe even a different view of the SAME 
   webpage. The whole page does not refresh. This is generally faster due to less data processing and no page refreshing.


What does HTTP stand for
A: Hyper Text Transfer Protocol

What does CRUD stand for?
A: Create-Read-Update-Delete

Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers
A: Create = PUT with a new URI
            POST 
   Read   = GET
  Update  = PUT with an existing URI
  Delete  = DELETE

Mention three tools we can use to make AJAX requests
A: XMLHTTTPRequest, FETCH, responseType....libraries used vary from JQuery$Ajax and Axios to Request


