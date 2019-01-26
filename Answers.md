Q.1.  Explain the differences between `client-side routing` and 
`     server-side routing`.
Ans.Server-side routing:When a user clicks on a link seeking some information actually it is
 a call to the server for that particular information.User click on a link and  URL changes to 
 match the request, then the server goes and finds a template or some html file and sends
 it back to the user.All of this is handled and achieved on the server and server will then 
 refresh the web page that user is looking at, because a new request was made for information 
 and the information given was a bunch of DOM elements,needs to to re-paint the web page.
 
 Client-side routing:When Routing is handled internally by the JavaScript that is already on the page we achieve
   is known as Client-side routing.The page won’t refresh! The data is just there, displayed 
   when we ask for it. How this works is that when a user clicks on a requested resource,
    instead of the client asking for that resource from the server via a URL,
     JavaScript will prevent this. We then get the resource (state) that is already
      available to us rendered out and when using react, 
   this happens  through Component-Based Architecture. 
    
2.  What does HTTP stand for?

Ans.Hyper Text Transfer Protocol
3.  What does CRUD stand for?
Ans. C-Create 
     R-Read
     U-Update                             
     D-Delete                               
        
    
4.  Which HTTP methods can be mapped to the CRUD acronym that we use when 
    interfacing with APIs/Servers.
Ans. C-Create:post
     R-Read:get
     U-Update:put
     D-Delete:delete
        
5.  Mention three tools we can use to make AJAX requests
Ans.a)Fetch API b) Axios   c)JQuery