1.  Explain the differences between `client-side routing` and `server-side routing`.
    In client-side routing we have slower intial page loads, due to all of the website data being sent on the first request. After this, whenever a new route or component is clicked or called, it can rerender without waiting for data from the server. This is not always the case, and sometimes only specific data is requested to render new domponents or data.

    On server-side-routing only data for a specific route will be sent and rendered. This allows for faster load times, and works well for those with slow internet speeds. The main drawback from this, is when a request is made, and the server sends new data to be rendered, it will rerender the entire page.

1.  What does HTTP stand for?
    HTTP stands for Hypertext Transer Protocol.

1.  What does CRUD stand for?
    CRUD is Create, Read, Update and Delete.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    The HTTP methods are GET, POST, PUT and DELETE.

1.  Mention three tools we can use to make AJAX requests
    We can use JavaScripts fetch, fetch polyfill, and the axios library for making AJAX request. We can also use Postman for testing AJAX requests.
