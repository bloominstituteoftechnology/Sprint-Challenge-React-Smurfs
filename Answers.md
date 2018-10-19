1.  Explain the differences between `client-side routing` and `server-side routing`.
One of the major differences between the two is a page refresh. When you click on a button on a page that is server-side routing, the whole page will refresh because the server sends new html back to your computer, but with client side routing, you could click on the same button and the content on the page would load without a total page refresh because the request is handled internally by the javascript


2.  What does HTTP stand for?
Hyper
Text
Transfer
Protocol

it is a standard for how web clients (like a browser) iteract and communicate with the web servers.


3.  What does CRUD stand for?

At the heart of any dynamic application is a database and CRUD represents all the major functions that may be implemented in correlation with the database. 
Create, Read, Update, Delete.

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create- a POST request is used to ask the server to create a new resourse
Read- a GET request retrieves a resourse
Update- a PUT request will update the content
Delete- a DELETE request will delete the specific content


5.  Mention three tools we can use to make AJAX requests
axios with .get, .then & .catch,