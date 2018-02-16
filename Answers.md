1. Explain the differences between `client-side routing` and `server-side routing`.

A: Routing is the method an app uses to handle user requests to navigate a website.  At its simplest, routing requests are for page changes, article access, ad details, etc.  They are also used to request data and submit data to databases and other endpoints.  Routes appear as extended URLs:  

https://www.google.com/search?q=mercedes+obd2+scanner&rlz=1C5CHFA_enUS749US749&oq=mercedes+ODB&aqs=chrome.2.69i57j0l5.41824j0j9&sourceid=chrome&ie=UTF-8

In the search request above the endpoint (destination) is google.com/search.  The strings after the "?" are the desired search parameters.  In this case I'm looking for "mercedes obd2 scanner".

Server-side Routing requests cause the server to send a new document to the browser.  This has been the standard way browsers have operated since their inception.  Server-side requests:
* Use more resources (client and server)
* Take longer to process (client -> Server -> Server Resources (i.e. databases) -> Client)
* Require more bandwidth (more data = more bytes transmitted)

Client-Side Routing requests are handled internally by the app.  The app uses Javascript statements and expressions to manage the request.  The code will modify the URL based on the request.  If I wanted to see a complete list of friends my URL might be:

http://localhost:5000/friends

To return a specific friend, for example the fifth friend on my list, the code would modify the url to be:

http://localhots:5000/friends/:id=5

Because the browser has the entire friend list in its cache it only needs to look to the cache to find the requested data and display Friend #5.  Saving time and resources.

2. What does HTTP stand for? 

A:  HTTP is an acronym for Hyper-Text Transfer Protocol.  It is telecommunications standard established in the early 1990's that allows the uniform transport of hypertext links across networks.  HTTP is protocol that rides on top of (transported by) IP (Internet Protocol).  IP is the basic protocol for directing data packets to network destinations.

3. What does CRUD stand for? 

A: In the context of data management, CRUD (C_reate R_ead U_pdate D_elete) represents the four basic operations of persistent storage.  You 'create' data that previously did not exist.  You 'read' (or 'retrieve') data that exists but not yet presented.  You 'update' (or modify/change) data that is present but needs to be transformed in some fashion (i.e. sum = 2 -> (sum + 2) = 4).  Data that is no longer required is 'deleted' (i.e. destroyed).

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
* C_reate = POST
* R_ead = GET
* U_date = PUT
* D_elete = DELETE

5. Mention three tools we can use to make AJAX requests.

A:  AJAX is a web development technique that allows web applications to send and retrieve data from a server without interfering with the display and behavior of the existing page. AJAX decouples data interchange from presentation (ref: OSI stack) so that the content of web pages can be changed dynamically without the need to reload the entire page.

Many libraries are available to implement AJAX in your code among these are JQuery, Axios and Fetch API.



