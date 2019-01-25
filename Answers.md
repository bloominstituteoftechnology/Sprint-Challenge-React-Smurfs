1.  Explain the differences between `client-side routing` and `server-side routing`.
Server side routing requires that the entire webpage refresh when new information is requested by the user. Its pros are that it only requests data that is needed and it has been industry standard for so long that SEO's use it. Its cons are the full page refresh which could take time
Client side routing is when the route is done by JS internally. It updates the state of the page and shows the new information instead of sending a request for a whole new page. It can be faster and smoother than server side but the initial load of the website could take longer because it has to grab all the information including stuff that may not be initially rendered to the screen.

1.  What does HTTP stand for? HYPER TEXT TRANSFER PROTOCOL

1.  What does CRUD stand for? CREATE, READ, UPDATE, DELETE.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
For Create we can use Post
For Read we use Get
For Update we use Put
For Delete we use Delete.
1.  Mention three tools we can use to make AJAX requests
1. Fetch-we use it to retrieve the data from the API.
2. Then-we use it to initiate a function using the data.
3. catch- we use it to cover any errors we  may get when retrieving the data.
