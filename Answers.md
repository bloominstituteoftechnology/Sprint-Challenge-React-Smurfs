
    1. Explain the differences between client-side routing and server-side routing.
    -  I server side routing, clicking on a link will request a new page from the server. This is what we call a server-side route. A whole new document is served to the user.
       A server-side request causes the whole page to refresh. This is because a new GET request is sent to the server which responds with a new document, completely discarding the old page altogether.
       A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application. The changed state will ultimately result in a different view of the webpage. This could be the rendering of a new component, or even a request to a server for some data that the application will turn into some HTML elements.
    
    2. What does HTTP stand for?
    -  HTTP stands for Hypertext Transfer Protocol
    
    3. What does CRUD stand for?
    -  CRUD stands for Create, Retrive, Update and Delete
    
    4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    -  For Creat 'post' is used, for Retrieve 'Get' is used, for Update 'put' is used, and for Delete 'delete' is used.
    
    5. Mention three tools we can use to make AJAX requests.
    -  Axios, Fetch, Supragent, Request
