1.  Explain the differences between `client-side routing` and `server-side routing`.

        Server-side will only request the data that is needed, which means every new request will result 
        in a new refresh. But the initial load time is faster.

        Client-side loads the whole web/app on the first request, so the initial load time is
        slower. Server requests are prevented when links are clicked so pages do not refresh, 
        the URL simply changes resulting in a different view/changed state of the app.



1.  What does HTTP stand for?

        HyperText Transfer Protocol.

1.  What does CRUD stand for?

        Create, Read, Updated, Delete.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

        Create = Post,
        Read = Get,
        Updated = Put,
        Delete = Delete


1.  Mention three tools we can use to make AJAX requests.
    
    axios
    fetch()
    get()
        