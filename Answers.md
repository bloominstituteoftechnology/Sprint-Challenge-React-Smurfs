1.  Explain the differences between `client-side routing` and `server-side routing`.
    A: Client-side routing, while it will require loading more of the components and take more data upon loading, allows for the user to send a request for new information to be displayed, and that information will not have to be sent back to the server in order to be displayed and refreshed.

    Server-side routing is the old school way of page routing, and it will load exactly enough to display what's on the page at the path specified. This will then require a new request to the server each time that the user navigates to a new path through this method, loading the information for that new page that's being navigated to. 
    
    Overall, this could lead to more data being used depending on the structure of the site, considering that, if the same components are being used for the site, then making more server requests for the same information and layout other than the new component to be displayed will take more data overall (instead of loading it all at once when client-side routing, depending on if it's the same navigation/page layout structure and the things that are changing are the content components).

1.  What does HTTP stand for?
    A: HyperText Transfer Protocol

1.  What does CRUD stand for?
    A: 
        C - Create
        R - Read
        U - Update
        D - Delete


1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    A: 
        Create - Put
        Read - Get
        Update - Post
        Delete - Delete

1.  Mention three tools we can use to make AJAX requests
    A: Axios, Fetch, Postman, Insomnia.