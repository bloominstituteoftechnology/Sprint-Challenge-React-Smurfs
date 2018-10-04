1.  Explain the differences between `client-side routing` and `server-side routing`.
    The primary differences between `client-side routing` and `server-side routing` are: 
    1. Routing on the client-side loads the entire web-application on the first request, while client-side routing only loads the page that has been requested, but must 
    2. After the initial request, client-side routing doesn't need to make additional requests until some piece of data in that initial request, or in the server, needs to be manipulated while server-side routing requires the page to refresh, and all data reloaded, on any change in data.
    3. Additionally, client-side routing requests to the server only manipulate specific pieces of data.

2.  What does HTTP stand for?
    HTTP is an acronym for Hypertext Transfer Protocol. It is a series of rules regarding how data should be handled.

3.  What does CRUD stand for?
    CRUD is an acronym for Create, Read, Update, and Delete, the four basic functions for manipulating data stored on a server, in a database, etc.

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    The HTTP methods that correspond to the functions on the CRUD acronym are as follows:
    - Create: POST
    - Read: GET
    - Update: PUT
    - Delete: DELETE

5.  Mention three tools we can use to make AJAX requests
    State, Axios, and Promises