1.  Explain the differences between `client-side routing` and `server-side routing`.
Client-side routing downloads the whole web-page on to the clients memory. It takes longer to load. However, once loaded, all changes on the website are handled by state changes on the already-downloaded-application. This makes navigation much faster, as there are no requests to the server and no new downloads.
Server-side routing loads one page at a time. It takes less time to load (you're only loading one page a time, instead of the whole thing), but every change needs to be handled as a request to the server. This means that every request refreshes the page.

  Client-side-routing

2.  What does HTTP stand for?

  Hypertext Transfer Protocol - the 'protocol'/rules used to 'transfer'/
  send or receive information using 'hypertext'/links.

3.  What does CRUD stand for?

  Create Read Update Delete
  Post   Get  Put    Delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
Post   Get  Put    Delete
(also patch)

5.  Mention three tools we can use to make AJAX requests
jQuery, Fetch, Axios
