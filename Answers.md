1.  Explain the differences between `client-side routing` and `server-side routing`.
With Server-side rendering the when you make a request for a particular website, the bowser that you are making that request from will go to the websites server and request for the content of that website.  Once the request has completed the browser will get the full HTML site and display it on the screen. If you make a request to another part of that site, the browser will have to make another request to the server and bring back the contents for the new information requested. When it comes to Client-side rendering we are rendering the content in the browser using Javascript. So unlike SSR where we are getting the full HTML document, with CSR we are getting just a barebones HTML document and a Javascript file that will render the rest of the site you are using. Server-side rendering has been the standard for many years and because of this it has SEO benefits that Client Side Rendering does not.

1.  What does HTTP stand for?
Hyper-Text Transfer Protocol

1.  What does CRUD stand for?
Create Read Update Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
Create - Post
Read - Get
Update - Put
Delete - Delete

1.  Mention three tools we can use to make AJAX requests
Axios
Browser Fetch API
Redux Middleware