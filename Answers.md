1.  Explain the differences between `client-side routing` and `server-side routing`.

    In server-side-routing we request a new page from the server any time we want to navigate to new content that doesnt already exist on the current page. It retrieves the new page, discards the old page, causes a refresh and serves the new document to the user. 

    Conversely, in client-side-routing the initial request is still to the server, but it retrieves the web app in it's entirety. A change in the URL equates to a changed stated of the application--causing the content(s) on the page to change and or different component(s) being rendered with the use of a routing library.

2.  What does HTTP stand for?

    Hypertext Transfer Protocol.

3.  What does CRUD stand for?

    Acronym used for http resource methods: 
    Create (post)
    Read    (get)
    Update (put)
    Destroy (delete)

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

post, get, put, delete


5.  Mention three tools we can use to make AJAX requests.
       
        postman
        axios
        browser