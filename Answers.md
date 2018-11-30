1.  Explain the differences between `client-side routing` and `server-side routing`.

    The major difference between the 2 are how they handle requests. On the server side, a request will refresh the entire page. The server does not keep track of the sma;; changes happening as the user clicks around. All it knows is to take down the whole page, destroy it and serve an entirely new page. The client-side does not refresh the page because the request does not make it to the server. Instead, with the use of JavaScript, the state of the application is updated and the displaying/functional component is rendered.

    Another difference is how much data they handle at a time. Server-side routing will only get the data that is needede for the page being displayed. Client-side routing must load the entire application on the first launch, however after that, it only collects the pieces of data it needs based on the updates to the state.

    There is also set up. Server side comes standard with the web. It's just how it naturally wants to work. With client-side routing, there has to be some extra steps and a library included to make it work.

    The last difference is search engine optimization. Since server-side routing is the OG way to do things, Google has already set it's search engine to work quite well with this type of routing. Client-side, however, is still fighting it's way into the game. There have been strides made to optimize their search engine crawling, but there is still work to be done.

2.  What does HTTP stand for?

    HyperText Transfer Protocol

3.  What does CRUD stand for?

    C === Create
    R === Read
    U === Update
    D === Delete/Destroy

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
 
    I'm not sure I fully understand the question so I think the answer is
    - Create => post() method, 
    - Read => get() method, 
    - Update => put method,
    - Delete/Destroy => delete() method

5.  Mention three tools we can use to make AJAX requests
 
    - Postman App
    - Browser (type in the url to get a page full of data that may or may not be hard to read)
    - Dev tools (console if you add window.axios = axios)