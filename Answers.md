1.  Explain the differences between `client-side routing` and `server-side routing`.
    Client-side routing means using JavaScript to switch the pages in our application,When a user clicks on a link, the URL changes but the request to the server is prevented. 
    meanwhile A server-side request causes the whole page to refresh. This is because a new GET request is sent to the server which responds with a new document, completely discarding the old page altogether,his can be really slow especially when bandwidth is an issue etc.

2.  What does HTTP stand for?
    HTTP stands for Hypertext Transfer Protocol, and is an application layer protocol. In simpler terms, it is the protocol over which information is sent from a user’s web browser to the website they are visiting. The data that is being communicated between the browser and the website is sent over in plain text

3.  What does CRUD stand for?
    the acronym CRUD stands for create, read, update and delete. These are the four basic functions of persistent storage.
    
4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    HTTP Methods provide a common language or nomenclature that the client can use to let the server know what operation it wants to perform.
    POST => Create,Add
    GET => Read
    PUT => Update
    DELETE => Delete

5.  Mention three tools we can use to make AJAX requests
    Axios
    Fetch
    Jquery