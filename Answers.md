1.  Explain the differences between `client-side routing` and `server-side routing`.
server-side routing
pros: Only data that is needed will be sent. No need to have data in memory.
SEO is optimised for webpages that come from the server.

cons: A full refresh is needed for every request. Can take a while to render if the document is too big.

client-side routing
pros: No refreshing of the browser is needed in between routes, only some elements inside the application will need to be changed. Due to being stored in memory routing between pages is typically faster.

cons: Initial loading time is typically longer due to the whole web app being loaded on the first request. Some data loaded won't be used. Takes extra set up since server-side
is the standard. SEO is less optimised

2.  What does HTTP stand for?
Hyper Text Transfer Protocol

3.  What does CRUD stand for?
Create, Read, Update, Delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
GET, POST, PUT, DELETE

5.  Mention three tools we can use to make AJAX requests
We can use Axios, Fetch, or Request.