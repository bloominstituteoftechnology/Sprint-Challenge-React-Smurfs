1.  Explain the differences between `client-side routing` and `server-side routing`.

    * `Routing` is the way a user navigates a website or app. It connects a user's URL change request (like clicking a link) to certain bits of data or code (like a new webpage).
    
        With `server-side routing`, when you click a link, a brand new webpage is served to the client. This has the side effect of refreshing the whole page because it sends a GET request to the server, which in turn responds with a completely new webpage, thus discarding the old page entirely. This full page refresh means that it can take some time for the new page to get rendered.
        
        On ther hand, `client-side routing` is when the routing is generally handled by the app's JavaScript code. When a user clicks on a link, instead of loading up a completely different document, a change of state occurs in the app. This change of state is often times the rendering of a new component or requesting of information through an API which would result in the rendering of new HTML elements. As opposed to server-side routing, client-side routing doesn't need to referesh the whole page, only the components which suffered a change. This means that routing between different links will likely be faster.
        
        While client-side routing is generally seen as the better alternative, server-side routing has two noteworthy advantages. One is the fact that with client-side routing, the entire app needs to be loaded upon first request, thus making the *initial* loading time usually longer. The other is that web crawlers are currently optimized for server-side routing, although this is quickly changing as time goes on.

2.  What does HTTP stand for?
    * `HyperText Transfer Protocol`

3.  What does CRUD stand for?
    * C - `Create`
    * R - `Read`
    * U - `Update`
    * D - `Delete`

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    * Create - `POST`
    * Read - `GET`
    * Update - `PUT`
    * Delete - `DELETE`

5.  Mention three tools we can use to make AJAX requests
    * `Axios`
    * `fetch`
    * `jQuery Ajax`
