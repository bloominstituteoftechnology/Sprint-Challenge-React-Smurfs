1.  Explain the differences between `client-side routing` and `server-side routing`.
    #Server-side request causes the whole page to refresh. This is because a new GET request is sent to the server which responds with a new document, completely discarding the old page altogether. This is slower than Client-side routing.

    #Client-side no re-rendering is neccessary. Client requests for data from the server using an AJAX tool like Axios and the server will send the requested data back to the client in JSON format. This is faster than Server-side routing.


1.  What does HTTP stand for?
    #Hypertext Transfer Protocol

1.  What does CRUD stand for?
    #Create, Read, Update, Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    #Create --> POST
    #Read --> GET
    #Update --> PUT
    #Delete --> DELETE

1.  Mention three tools we can use to make AJAX requests
    #Fetch API, Axios, jQuery $.ajax