1. Explain the differences between `client-side routing` and `server-side routing`.
   Server-side routing creates a server request for each new page causing a full website refresh because the old information is discarded. Client-side routing is handled internally by JavaScript speaking to the browser. Only the content that needs to be updated will refresh, which creates a SPA. Unchanged content remains on the page.
2. What does HTTP stand for? 
   Hyper Text Transfer Protocol
3. What does CRUD stand for? 
   Create Read Update Delete
4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
   For axios' API methods: Post = Create, Get = Read, Put = Update, and Delete = Delete.
5. Mention three tools we can use to make AJAX requests.
   XMLHttpRequest (XHR), Fetch API, and axios (promise based HTTP client).