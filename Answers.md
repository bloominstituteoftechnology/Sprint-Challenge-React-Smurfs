1.  Explain the differences between `client-side routing` and `server-side routing`.

    In server-side routing you give the server a path on a url and it fetches the associated templates/html and resources necessary to display that request and it sends it all back to the client. This process forces a page refresh but the client only has the information for that specific page as opposed to everything which is fine for small requests but can create a slow experience on resource heavy sites.

    Client-side routing takes advantage of the browser's ability to save state or memory/data associated with the app. On the initial load, everything regarding that application is given to the client and the path is used to determin which resources to display at that moment to the user. There are no page refreshes because the data is already there; it just needs to be displayed.

1.  What does HTTP stand for?

    Hypertext Transfer Protocol

1.  What does CRUD stand for?

    Create Read Update Destroy

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    ```POST``` maps to create. This method sends data to the server to create or store that data somewhere.

    ```GET``` maps to read. This method asks the server for certain data.

    ```PUT``` maps to update. This method modifies data that is already stored on the server.

    ```DELETE``` maps to destoy. Thie method removes certain data that is already stored on the server.

1.  Mention three tools we can use to make AJAX requests

    Axios, jQuery, fetch