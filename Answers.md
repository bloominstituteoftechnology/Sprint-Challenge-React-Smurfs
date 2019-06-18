1.  Explain the differences between `client-side routing` and `server-side routing`.

`Client-side routing` and `server-side routing` differ in where the routing is processed. In `server-side routing` the server offers up HTML pages in response to specific route requests. In some cases this may mean the server has a directory of HTML files ready to go. In other cases this may mean the server is dynamically generating pages, for example based on parameters passed in the URL. In `client-side routing`, the server only has one HTML file that gets sent to the client. That HTML file will then invoke a script which is able to dynamically generate content on the client based on, as before, URL parameters. Because it is not efficient to send the client more data than necessary, the client in `client-side` rendering is able to selectively as the server for specific things via AJAX requests. 

2.  What does HTTP stand for?

HyperText Transfer Protocol

3.  What does CRUD stand for?

Create Read Update Delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

post -> create
get -> read
put -> update
delete -> delete

5.  Mention three tools we can use to make AJAX requests

Axios, fetch, XMLHttpRequest
