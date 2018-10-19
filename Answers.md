1.  Explain the differences between `client-side routing` and `server-side routing`.
Server-side routing is when a server holds the data for an application. The server compiles the document or file, and then sends it to the browser to be rendered. In this model, the entire webpage must re-render. Client-side routing is when data lives within the application itself, in an object known as state. In this model the entire page doesn't need to update once the request has completed, rather just the part of the application that needs to update. This model is typically better in terms of performance and user experience, however it does hurt SEO which must be considered when choosing which approach makes the most sense for your application. Google and other search engines are currently developing solutions to the SEO issue in client-side routing apps, so perhaps one day SEO will not be an issue. 
1.  What does HTTP stand for?
HTTP stands for Hyper Text Transfer Protocol. It is essentially the set of rules or procedures for transmitting data between electronic devices. Pre-existing rules are needed to facilitate communication between computers/electronics, so that when a device receives data it knows how to interpret it and how to communicate back if needed. In order for 'the internet' to work, we needed a standard like HTTP to successfully create a network of computers/servers that could talk to each other. 
1.  What does CRUD stand for?
Crud stands for create, read, update, and delete. It describes the basic functions involved in persistent storage. Persistent storage is essentially a type of memory in a computer or application. 
1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
POST ------> Creates a new item to be stored in state
GET -------> Retrieves an existing item.
PUT -------> updates an existing item.
DELETE ----> Deletes an item from state
1.  Mention three tools we can use to make AJAX requests
Axios, JQuery, and Fetch 