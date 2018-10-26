1.  Explain the differences between `client-side routing` and `server-side routing`.
Client side routing recieves all of the HTML/CSS/Javascript available for the site, does an intial load with it, and does need to contact an outside server for that information again. Once the initial load is done, our apps are able to load and function much more quickly. With server-side touting, every time a new Component or page is need, a request is sent the server and the corresponding information is sent back. It requires much less time for an initial load, but is not as quick to navigate through considering it needs to make requests and wait on the return of information
2. What does HTTP stand for?
It stands for Hypertext Transfer Protocol, and is a set of rules that regulate how clients transfer and recieve information with servers.
3.  What does CRUD stand for?
Create, Read, Update, Destroy
4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
Create- Post
Read - Get
Update - Put
Destroy- Delete
5. Mention three tools we can use to make AJAX requests
I assume this is asking about methods involved in AJAX request???
If so....
we can use a fetch method to essentially do a very similar thing to what get does. Fetch is just not being used right now, because it is not as widely supported amongst browsers. Afte that, we use a then method which is used to handle our response from the server, and how we want to update our application with the data we've just recieved. The catch method is used to supply an error message if any of the incoming data is not a format we are looking for.
If not....

