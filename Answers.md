1. Explain the differences between `client-side routing` and `server-side routing`.

Server-side routing means when a request is made, a whole page will be sent from the server causing a full refresh. A new request completely discards the previous request.

Client-side routing is handled internally by the JavaScript on the page, adjusting URL but preventing a query from the server. This results in faster switching between pages, as it only refreshes the components that are changing and re-renders as needed.

2. What does HTTP stand for? 

Hyper Text Transer Protocol

3. What does CRUD stand for? 

Create, Retrieve, Update, Delete

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

C - Post: creates new resource on the server/API
R - Get: retrieves resources from the server/API
U - Put: Update existing resources from server/API
D - Delete: Deletes resources from server/API

5. Mention three tools we can use to make AJAX requests.

XHR - HMLHttpRequest
Fetch API
Axios (or other external libraries)