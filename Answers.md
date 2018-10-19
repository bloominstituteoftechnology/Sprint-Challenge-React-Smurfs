Explain the differences between `client-side routing` and `server-side routing`.

    Server-side routing is the traditional way of routing. You navigate to a page and the browser requests data for that page. Server returns a document, HTML file, or some other form of data. All requests are sent to the server and the browser refreshes to render each page. Server side routing is SEO optimized and a server side route will only request data that is needed, so the initial load time is faster.

    Client-side routing is a type of routing where the route is handled internally by the javascript that is loaded on the page. When a user clicks a link, the URL changes, but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application, which ultimately results in a different view of the webpage, but the whole page won't refresh. The benefit to this is that less data is processed, so routing is faster. This can allow for smoother transitions and animations between views. The downside is that the initial load time is slower, thus making it less SEO optimized. It is also more difficult to do and requires a lot of pre-planning.

    ```

What does HTTP stand for?

    Hypertext Transfer Protocol

What does CRUD stand for?

    Create, Read, Update, Delete

Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    GET, POST, PUT, DELETE

Mention three tools we can use to make AJAX requests

    Fetch, then, catch
