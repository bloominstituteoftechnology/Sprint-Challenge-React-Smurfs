1.  Explain the differences between `client-side routing` and `server-side routing`.

Server-Side Routing:
    * only requests the data that is needed
    * search engines are optimized for webpages since server-side routing has been
       the standard for a long time
    * every request results in a full-page refresh
    * can take a while for the page to be rendered.

Client-Side Routing:
    * uses JavaScript to maintain memory (state) within the application which in turn
       tells the browser what to display when a resource is requested
    * routing between views is faster
    * smooth transitions and animations between views are easier to implement
    * initial loading time is longer since the entire website or web-application needs
       to be loaded on the first request
    * extra code must be written since server-side routing is standard

---------------------------------------------------------------------------------------

1.  What does HTTP stand for?

    Hyper-Text Markup Language

---------------------------------------------------------------------------------------

1.  What does CRUD stand for?

    Create, Read, Update and Delete

----------------------------------------------------------------------------------------

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
        Create => .post()
        Read   => .get()
        Update => .put()
        Delete => .delete()

----------------------------------------------------------------------------------------

1.  Mention three tools we can use to make AJAX requests

    .fetch(), .then() and .catch()

-----------------------------------------------------------------------------------------