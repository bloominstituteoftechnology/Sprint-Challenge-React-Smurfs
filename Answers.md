1.  Explain the differences between `client-side routing` and `server-side routing`.
1A. server: 
        - server returns, browser renders full page 
        - server compiles everything
        - a fresh page is loaded for each new URL, sent to browser, then   browser refreshes and renders
    client: 
        - JS manages the data in state
        - browser has what it needs in memory to render everything
        - if more data is needed, API request is sent out and a json is    returned instead of a full page
    
    The main differences are that client-side-routing doesn't render a fullpage each time it sends out for a request. Since it doesn't need to compile, the page doesn't need to refresh before it renders. Also, data is stored within the app, rather than on the server as in server-side routing, so the browser has what it needs from the get go, which takes a little bit longer innitially  but is faster with each additional request.

2.  What does HTTP stand for? 
2A. hypertext transfer protocol

3.  What does CRUD stand for?
3A. create, read, update, delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
4A. Get reads data from an API - AKA the ‘R’ in CRUD
    Post creates data to be used by server - AKA the ‘C’ 
    Delete removes data from the server - AKA the 'D' 
    Put makes changes to the server's resources - AKA the 'U'

5.  Mention three tools we can use to make AJAX requests
5A. I'm not sure if i'm understanding the question right, but I know you can make AJAX requests with fetch api, axios and jQuery among others. With axios we learned to use get, post, delete, and update. Sounds like jQuery is not as popular anymore and fetch isn't supported across all browsers
