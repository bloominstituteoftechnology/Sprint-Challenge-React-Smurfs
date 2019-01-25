1.  Explain the differences between `client-side routing` and `server-side routing`.
When you navigate to a URL, there is a submission request to acquire data that gets compiled into a webpage.

server-side Routing:
  The submission request to get the data is compiled first on the server side, and then the results are handed back to the client web browser.
  This means all data is stored on the server and gets re-rendered on the server first, before handed back to the client browser.
  When it comes to server-side routing... it's best to use them only for search engines to comply with SEO (server engine optimization) environments.

client-side Routing:
  The data is stored all on the client web browser, and when there is data that is needed...
  it submits a request for only the data that is needed from the server before it gets re-rendered on the client side.

2.  What does HTTP stand for?
HyperText Transfer Protocol.

3.  What does CRUD stand for?
Create, Read, Update, Delete.

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
With the use of the axios library, we can use .post() .get() .put() and .delete()...
These 4 methods give us access to the crud(create -> post(), read -> get(), update -> put(), and delete -> delete()) methods.

5.  Mention three tools we can use to make AJAX requests
.fetch() .then() and .catch()
However, since this is not yet supported by all browsers, we can use the axios library to replace these AJAX tool for .fetch()...
    And then still we can use the returned promise object with the .then(promise(response) or res.data) and the .catch(promise(reject) or error) tools