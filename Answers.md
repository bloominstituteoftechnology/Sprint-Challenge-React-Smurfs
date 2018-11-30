1.  Explain the differences between `client-side routing` and `server-side routing`.
Client side routing is when the routing o information happens faster because there is no need to query the server to switch the path of the client viewport. this is common with many single page applications and the basis of react router 4, a departure from previous versions.no refreshing necessary. 
On the other hand the more conventional server-side where the  link clicking will send a request to the server for new information, data or a different page. This causes the whole page to refresh, and a new page to appear
1.  What does HTTP stand for? This stands for "Hyper-Text Transfer Protocol" and is the  underlying method by which information is transported about on the  internet. It controls the messages format of communication, like when a URL is  entered in the browser, it direct the browser to send a specific command to a web server to request data. The http methods are used to perform crud
1.  What does CRUD stand for?
Crud Stands for "Create, Read, Update, Delete," and forms the basis of what operations a a server and its resources are used fro when interacting with clients via the Http protocol methods.
1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
Create, = Put Method, it for sending and updating the info on the server from a client side.
Read, = Get method allows us to see specifically requested information.
Update, = The put method can also be use to update too.
Delete, = Delete, removing information that was once part of data on the server
1.  Mention three tools we can use to make AJAX requests
Axios, then, catch; fetch; request;