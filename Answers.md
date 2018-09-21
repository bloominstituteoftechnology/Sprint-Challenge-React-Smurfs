1. Explain the differences between client-side routing and server-side routing.

	When using a server-side routing, a server-side request causes the whole page to refresh.
	This is because a new GET request is sent to the server which responds with a new document,
	completely discarding the old page altogether.

	When using a client-side routing, a client-side request won’t refresh whole page.
	There are just some elements inside the application that will change.

2. What does HTTP stand for?

	HTTP stands for Hyper Text Transfer Protocol,
	the primary technology protocol on the web that allows linking and browsing.
	This is the technology used to communicate between web servers and web users.

3. What does CRUD stand for?

	CRUD stands for Create, Read, Update and Delete.
	When we are building APIs, we want our models to provide four basic types of functionality.
	The model must be able to Create, Read, Update, and Delete resources.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers?

	GET
	POST
	PUT
	DELETE
	PATCH

5. Mention three tools we can use to make AJAX requests.

	axios
	superagent
	fetch