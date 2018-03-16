
### 1. Explain the differences between client-side routing and server-side routing.

Server side routing is historically the most traditionally used method for routing a website or application and involves the client sending a request to the server for a completely new document as a consequence of some user interaction. For example, clicking the "about" link from the homepage of a website using server side routing will send a request to the server for the "about" html document even if components or elements of that document overlap in some way such as header, footer, or styling. Client side routing on the otherhand is the opposite. All of the routing of the app gets done internally by javascript which may send a request to the server asking for information to update the state of a component, but ultimately only a single page is rendered with an evolving state.


### 2. What does HTTP stand for?

Hypertext Transfer Protocol


### 3. What does CRUD stand for?

Create, Read, Update, Delete


### 4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
get, post, put, delete

### 5. Mention three tools we can use to make AJAX requests.
Axios, Fetch API, and JQuery $.ajax