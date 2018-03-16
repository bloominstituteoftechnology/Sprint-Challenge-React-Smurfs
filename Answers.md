1.)		Explain the differences between client-side routing and server-side routing.
Answer: When browsing, the adjustment of a URL can make a lot of things happen. This will happen by clicking on a link,
		which in turn will request a new page from the server. This is called server-side routing, a whole new document 
		is served to the user. This is because a new GET request is sent to the server which responds with a new document.
		A client-side route happens when the route is handled internally by the JS that is loaded on the page. When a user
		clicks on a link, the URL changes but the request to the server is prevented. It is important to note that the whole
		page won't refresh when using client-side routing.

2.)		What does HTTP stand for?
Answer: HTTP stands for "Hypertext Transfer Protocol"

3.)		What does CRUD stand for?
Answer: CRUD stands for "Create, Read, Update, Delete"

4.)		Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
Answer:	Create: Post, Read: GET, Update: PUT, Delete: DELETE.

5.)		Mention three tools we can use to make AJAX requests.
Answer: jQuery, Fetch API, Axios.