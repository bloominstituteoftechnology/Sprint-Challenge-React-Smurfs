1. Explain the differences between `client-side routing` and `server-side routing`.

Server-side Routing means that for every link clicked on a webpage, the entire page has to be refreshed to update. This is because when a link is clicked, a GET request is sent to the server, and a new page is delivered. This has been the standard for a long time. This also means that because the page is refreshing, sometimes unnecessary information has to be reloaded. This isn’t necessarily a problem unless the page is large, in which case it would slow things down. It is however, inefficient. 

Client-side Routing is pretty much the opposite of its predecessor. Instead of being a multi-page design, the entire web-page is actually only a single page application. So, in this instance, the entirety of a web-application must be loaded upon the initial visit of a user. But thereafter, whenever a link is clicked, instead of refreshing the entire page, only specific elements related to the link will be refreshed. Components may be alternated to provide a different view to the user. This isn’t as optimized with search engines yet, and it isn’t quite the norm, however, it seems to be becoming the standard and future of how we operate on the web.


2. What does HTTP stand for? 

HyperText Transfer Protocol.

3. What does CRUD stand for? 

CRUD - An Acronym for The Four Common HTTP Methods:
Create, Read, Update, Delete.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create (Post), Read (Get), Update (Put), Delete (Delete).

5. Mention three tools we can use to make AJAX requests.

Fetch API, Axios, and jQuery AJAX.