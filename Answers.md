1.  Explain the differences between `client-side routing` and `server-side routing`.
  a. Client side routing is handled by javascript code on the initial load. However, server side request still occur (though typically, in Ajax format) which makes it to where the whole page won't refresh, only the updated parts. This greatly improves speed because less data needs to be processed by both the client browser. However, if the App is very large, the initial load time can be very slow as with SPAs the code for the entire site is loaded in the first GET request, and client-side is searching is less opitimized for SEO (granted Google is working on improving this :) ).
  b. With server-side routing, you make full page request to a server. Server side searches are currently optimized for SEOs; however, require a full-page reload.
2.  What does HTTP stand for?
    H - Hyper
    T - Text
    T - Transfer
    P - Protocol
3.  What does CRUD stand for?
    C - Create
    R - Read
    U - Update
    D - Destroy
4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    GET - Read
    PUT - Update
    POST - Create
    DELETE - Delete
5.  Mention three tools we can use to make AJAX requests
    a. Axios, Fetch, and jQuery.