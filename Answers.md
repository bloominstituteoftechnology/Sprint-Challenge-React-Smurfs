1.  Explain the differences between `client-side routing` and `server-side routing`.
    - in server-side routing, a new get request is done for each file, which causes a page refresh and tends to be slow. Better for SEO.
    - in client-side routing, the entire site is sent to the client, so page changes are handled by the client and much quicker - but the initial page load tends to be slower. Not as good for SEO (currently).
2.  What does HTTP stand for?
    - Hypertext tranfser protocol
3.  What does CRUD stand for?
    - Create, Read, Update, Delete
4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    - C- Post
    - R- Get
    - U- Put
    - D- Delete
5.  Mention three tools we can use to make AJAX requests
    - Asynchronous JavaScript And XML (AJAX) requests can be made by:
      - old school - the `XMLHttpRequest` object
      - newer - jQuery `$.ajax({})`
      - pretty cool - axios
      - newest - `fetch`
