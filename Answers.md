#Answers
1. Explain the differences between client-side routing and server-side routing.
Server-side routing is when each link is its own new page/document. Client-side routing is something that's handled by JavaScript. It is when the site is a single page web application, and new links simply change the state of the application, not load a whole new page.

The advantage to server-side routing is SEO. The advantage to client-side routing is speed when changing views. Note that client-side routing does take a bit longer to initialize, as it loads all the data when the user navigates to the site.

2. What does HTTP stand for?
HTTP stands for Hypertext Transfer Protocol. Essentially it is a set of rules that enable standardized communication between browsers and servers. MDN has a great, easy to understand reference on HTTP here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

This week, we have worked with GET and POST HTTP requests, as well as PUT and DELETE requests. The GET method requests data from a resource (in our requests, an API), and a POST request submits data (for processing) to the resource.

3. What does CRUD stand for?
CRUD stands for create, read, update, and delete. "These are the four basic functins of persistent storage."1 The definition is also used in UI conventions "that allow viewing, searching and modifying information through computer-based forms and reports."2

1,2 - https://stackify.com/what-are-crud-operations/

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
- Create: POST
- Read: GET
- Update: PUT
- Delete: DELETE

More info: https://www.ibm.com/support/knowledgecenter/SSFPJS_7.5.1/com.ibm.wbpm.bpc.doc/topics/rdev_restapis_httpmethods.html

5. Mention three tools we can use to make AJAX requests.
We have been using a library called Axios to make requests. A google search revealed some other popular tools include Superagent and fetch as two popular alternatives.
