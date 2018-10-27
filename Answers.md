1.  Explain the differences between `client-side routing` and `server-side routing`.

	Server-side routing used to be the defacto standard of web development, but now clients-side has
	become popular. With server-side routing, requests come in from the client and the server maps the
	incoming url to a particular handler function. This results in the whole page being reloaded for
	any request that comes in. Another thing server-side routing is used for is in the routing of API
	calls. In this case, a page refresh may not necessarily happen in the web browser, as the calls
    from the client are likely made asynchrononously.

    Client-side routing is for single page applications which hold the application in the client. After
    the initial page loads, most calls to the server are made asynchronously. In turn, the application
    has access to the web page's history object within the web browser, which allows it to go forward
    or backward as links are clicked. The application uses routing to map the url to a particular
    component.

    Server-side routing often leads to more duplicate data being transferred over the internet, which
    means slower load times. With client-side routing, the data is retrieved asynchronously. After the
    first page load, where all the assets are downloaded onto the client, the load time can increase
    dramatically as now only data is being fetched.

1.  What does HTTP stand for?

	Hypertext Transfer Protocol

1.  What does CRUD stand for?

	Create, Read, Update, Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

	Create	=	Post
	Read 	=	Get
	Update	=	Put
	Delete	=	Delete

1.  Mention three tools we can use to make AJAX requests

	jQuery, fetch, and axios