1.  Explain the differences between `client-side routing` and `server-side routing`.
    Client-side routing:
        - All the data is requested on the first page load, even data that isn’t currently needed and data that the user may never need.
        - The initial load time may be slower because it’s requesting all the data, but inter-page loads should be faster.
        - Transitions between pages don’t prompt a full-page reload and can be spruced up with slick animations.
        - Not as well-accomadated by SEO.
    Server-side routing:
        -  Optimized for SEO
        - Each request yields a whole page refresh (which is redundant for some shared elements, like header/footer)
        - Only requests the data that is needed for the current user experience (the current page)

2.  What does HTTP stand for?
    HyperText Transfer Protocol

3.  What does CRUD stand for?
    Create Read Update Delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers?
    Get, Post, Put, Delete

5.  Mention three tools we can use to make AJAX requests
    Axios, Fetch, jQuery