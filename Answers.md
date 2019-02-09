1.  Explain the differences between `client-side routing` and `server-side routing`.

    *Client-side routing occurs whenever the client/browser is handling the routing. This occurs within a React environment.    The client makes an initial request to the server.  The server then downloads all of the components and initial HTML that are required for the browser to use an app. After this initial request, there is no other further server requests necessary(other than AJAX requests). Furthermore, there are no more page refreshes, but rather local loading of components. The DOM is only updated for those components being mounted rather than the entire DOM which would occur for a page refresh. This makes using React very fast even though there may be more up front loading time.*

    *Server-side routing occurs when the server is handling the routing.  This means that the client makes requests to the server whenever a new HTML page is requested as well as AJAX requests.  This can make server-side routing much slower than client-side routing because more time is necessary to make requests along the network. A benefit of server-side routing is that the initial request can be faster because only the necessary data needed to initialize the website is sent to the client.*

2.  What does HTTP stand for?

    **Hypertext Transfer Protocol**

3.  What does CRUD stand for?

    **C-create**

    **R-read**

    **U-update**

    **D-delete**

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    **C - POST**

    **R - GET**

    **U - PUT**

    **D - DELETE**

1.  Mention three tools we can use to make AJAX requests

    **Fetch API** - this is the new standard for AJAX requests*

    **Axios**

    **Request** - another library used to make AJAX requests*
