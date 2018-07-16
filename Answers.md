1.  Explain the differences between `client-side routing` and `server-side routing`.

Server-side routing: You request information from a server, and the server returns what you wanted. When you request to be taken to a new page or make a change on the page that causes dynamic behavior that should change the state of the page, the local machine requests information from a server, and the webpage renders the whole page. 

Client-side routing: You request information from a server, and the server returns what you wanted not only for the webpage you are viewing, but also what you would want to see any other page that routed to from the root page . This happens on the initial page load. After the initial page load, your browser has this information and can store the state of the application. When routing to a different webpage or to make a change on the page that causes dynamic behavior, the information and computation needed is stored in your local memory so that the webpage or dynamic behavior loads without sending back and forth page data to a server like in server-side routing. 

1.  What does HTTP stand for?

Hyper Text Transfer Protocol 

1.  What does CRUD stand for?

Create
Read
pUt
Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create - .post
Read - .get
pUt - .put
Delete - .delete

1.  Mention three tools we can use to make AJAX requests

-Axios API
-Fetch API
- componentDidMount (?)

