1.  Explain the differences between `client-side routing` and `server-side routing`.A server side rquest causes the whole page to refresh.This is because a new GET request is sent to the server which responds with a new document, completely discarding the old page altogether. A server-side route will only request the data that’s needed. No more, no less.
•	Because server-side routing has been the standard for a long time, search engines are optimised for webpages that come from the server. It can take a while for the page to be rendered. A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application.There are just some elements inside the application that will change.


1.  What does HTTP stand for?Hypertext Transfer Protocol.
1.  What does CRUD stand for?Create, read, update, delete.
1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers. Create => POST, Read=>GET, Update=>PUT, Delete=>/Destroy=>DELETE
1.  Mention three tools we can use to make AJAX requests: axios, jQuery, postman