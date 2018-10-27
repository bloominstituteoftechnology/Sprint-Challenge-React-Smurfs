1.  Explain the differences between `client-side routing` and `server-side routing`.
	-Client Side Routing:
		In this version when the client clicks on a link to another page,
		prevents the browser from making an additional HTTP GET request, then
		the router manually changes the URL displayed and moves the appropriate
		components that need to be displayed

	-Server Side Routing:
		Sevrer side routing will wait for a 'detection' from the client that
		they are moving pages or doing "something". Then sends a HTTP GET request
		and loads in the content the client is trying to open up.

2.  What does HTTP stand for?
	"Hyper Text Transfer Protocol"

3.  What does CRUD stand for?
	"Create Read Update Delete"

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

	CRUD: Create = HTTP: Put
	CRUD: Read = HTTP: GET
	CRUD: Update = HTTP:PUT (Existing URI)
	CRUD: Delete = HTTP: DELETE


5.  Mention three tools we can use to make AJAX requests
	Fetch  API
	Axios  API
	jQuery API
