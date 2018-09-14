1.  Explain the differences between `client-side routing` and `server-side routing`

For example, when a user clicks on a link and that link takes them to a new url this is an example of server side routing. A new get request has been issued to load a new document which in tern discards the old page. However, this will issues a full page refresh. Client side routing happens when a route is handled by the javascript that has been loaded onto the page. For example, when a user clicks on a link the request to the server will be prevented and the new information will be displayed via javascript. In client side routing there will not be a page refresh, just a change to the information needed via the route. In client side routing the entire web application has to be loaded at the beginning; however, this does make the loading of any new information faster because it eliminates a full page refresh.

1.  What does HTTP stand for?

HTTP stands for Hypertext Transfer Protocol. This is the protocol in which information is send from a user's web browser to the webpage being visited. HTTP sends this information via a series of methods Get (to get information), Post (to create information), Put (to update information), and Delete (to delete information). HTTP also comes with a series of status codes to indicate the current status of the request such as 200 for successful.

1.  What does CRUD stand for?

CRUD stands for create, read, update and delete. This ties in with HTTP. When we either do a post or put (creating, or updating), we performing a create. When we do a get request we are performing a read. When we do a delete request we are performing a delete in crud.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

create = PUT or Post
read = Get
update = Put
delete  Delete

1.  Mention three tools we can use to make AJAX requests

In reacte when doing through the hw we primarly used Axios as a way to send our Ajax requests. However, there are other libraries with React we could have used such as Fetch API or Superagent.
