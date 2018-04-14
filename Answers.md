* Questions - Self Study - You can exercise your Google-Fu for this and any other Sprint Challenge in the future.

1. Explain the differences between client-side routing and server-side routing.
    * Client-side routing happens when a route is handled internally by JavaScript being loaded onto the page.       Basically when you click on a link, the URL changes, but the server request is prevented. This will result     in a changed state of the app giving you a different view of the page. This whole page will not refresh when   using client-routing - just elements inside the app will change.
    * Server-side routing can adjust the URL while you are browsing. Example, like when you click on a link, it      will request a new page from the server and a new document is provided. This action will cause your entire     webpage to refresh because a GET request was sent up to a server which responds to the new document and        discards the old page entirely. 

2. What does HTTP stand for?
    * Answer: Hyper Text Transfer Protocol 

3. What does CRUD stand for?
    * Answer: 4 http Resource Methods (CREATE, READ, UPDATE, DELETE)
    

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    * GET - Stands for the 'R' in CRUD as it READS data from the API (no req body required)
    * POST - Stands for the 'C' in CRUD as it CREATES data to be used by the server (Req a req body obj)
    * PUT - Stand for the 'U' in CRUD as it updates the info to a requested resource. 
      (Req a req body obj; also can take a URL parameter identifier)
    * DELETE - Stands for the 'D' in CRUD as it deletes a resource from the server. 
      (No req body req/no body will be received unless explicityly done within server)

5. Mention three tools we can use to make AJAX requests.
    * Axios, Fetch, Request