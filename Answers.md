1.  Explain the differences between `client-side routing` and `server-side routing`.
        Server-side routing was created before we developed the strong browsers we have today. When you click on a link, it sends a request to a server and gets the data it needs to display the data on your screen.  Pros are that it only sends what you need so the initial load is quick.  Con is that everytime you click a somewhere on the page, you have to redownload everything.

        Client-side routing - with the advent of our newer browsers, we are able to offload some of the work the server was previously doing onto the client's browser.  We usually have this for single page applications I think.  Pros are that when you navigate within the page, only the data you need at that time is sent.  This way it's faster.  Con is the initial load is slower.

1.  What does HTTP stand for?
        HyperText Transfer Protocol - it's a series of standards/protocols developed to determine how info should be formatted and sent thru the web and how it should be interpreted by the server and browser

1.  What does CRUD stand for?
        Create-Read-Update-Destroy

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
        Post-Get-Put-Delete

1.  Mention three tools we can use to make AJAX requests
    axios, fetch, node-fetch