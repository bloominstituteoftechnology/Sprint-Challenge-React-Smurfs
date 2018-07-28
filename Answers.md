1.  Explain the differences between `client-side routing` and `server-side routing`.
    Answer: Client-side routing is when the routing happens inside the application.  All the resources (state) or data are loaded from the server at initial request which this  might be the down-side of it because it could be slow when the user open the application.  However, as the data have been already stored within the application, it will be easy and fast to response when the user asks for it.  The page will not be refreshed.

    Server-side routing is we receive the data that we want from the server when we request.  This traffic happens every time when we request the resources/ data from the server.  It is nice because the data we get is the data we ask for only.  However, it also has some disadvantage.  Because when we request a lot of data or there’re many requests happens, this could be really slow. 

2.  What does HTTP stand for?
    Answer: Hyper-Text Transfer Protocal

3.  What does CRUD stand for?
    Answer: Create, Read, Update, and Destroy

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    Answer: POST - Create, GET - Read, POST - Update, and DELETE- Destroy

5.  Mention three tools we can use to make AJAX requests
    Answer: Axios, Fetch and jQuery(??)