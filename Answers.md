1.  Explain the differences between `client-side routing` and `server-side routing`.
    Server-side routing causes the entire page to refresh when new data is needed, including static(?) elements like headers and footers that don't need to change. Client-side routing allows only relevant elements to change, by loading the entire app on the first request, and making changes to the state or requesting relevant data from the server. This allows a different view without having to refresh the entire page. 
    
1.  What does HTTP stand for?
    Hypertext Transfer Protocol.

1.  What does CRUD stand for?
    Create, Read, Update, Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    Create.....POST
    Read.......GET
    Update.....PUT
    Delete.....DELETE

1.  Mention three tools we can use to make AJAX requests
    Axios GET, POST, and PUT
    GET: get information from a server at a given URL
    POST: create/add new resources to the server
    PUT: make changes to resources on the server