1.  Explain the differences between `client-side routing` and `server-side routing`.
    -  Server-side routing is when a server holds the data for an application. The server compiles the document or file, and then sends it to the browser to be rendered. In this model, the entire webpage must re-render. Client-side routing is when data lives within the application itself, in an object known as state. In this model the entire page doesn't need to update once the request has completed, rather just the part of the application that needs to update. This model is typically better in terms of performance and user experience, however it does hurt SEO which must be considered when choosing which approach makes the most sense for your application. Google and other search engines are currently developing solutions to the SEO issue in client-side routing apps, so perhaps one day SEO will not be an issue.

2.  What does HTTP stand for?
     - Hyper Text Transfor Protocol
     - It's an api with its own methods, that allows a client to communicate with a server.

3.  What does CRUD stand for?
        - Create
        - Read
        - Update
        - Delete || Destroy
            - These are some of the HTTP methods mentioned in the answer for the previous question above.
            
4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    -C: Post
    -R: Get
    -U: Put
    -D: Delete

5.  Mention three tools we can use to make AJAX requests
    - Axios
    - JQuery
    - Fetch 