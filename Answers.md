## Questions

1.  Explain the differences between `client-side routing` and `server-side routing`.
* With server-side routing, you will make a get request and reload the page whenever a get request is triggered.  With client-side routing, no get requests are made, and there is no page refresh.  When your app downloads initially, it may take longer, but events generally load faster as page refreshes are prevented.  

* A more detailed explanation I'd like to record for reference.  Source: ```https://github.com/facebook/react/issues/9681```:

* _Server side rendering is when HTML is created on server and sent to client. Eg: Nunjucks/Express. In client side rendering HTML is created in browser by JS. Ex: Angular.js, React._

* _Traditionally in client side rendering you see ReactDOM render your target app first and then you render your own app inside that target app. Client sends api requests to server, receives all data that is needed and component is rerendered on the screen again._

* _In server-side rendering, server handles the initial render when an user first request for your app. When the server receives the request, it renders the required component into an HTML string, and then sends it as a response to the client. After that client does the render on its own.  Server also send the state of yout app along in the response, so the client can use it as the initial state. This is important because, if you preload any data before generating the HTML, you want your client to also have access to this data. Otherwise, the markup generated on the client won't match the server markup, and the client would have to load the data again._

2.  What does HTTP stand for?
* Hyper-text transfer protocol

3.  What does CRUD stand for?
* Create, read, update, delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
* Create (Put/Post)
* Read (Get)
* Update (Put/Post/Patch)
* Delete (Delete)

5.  Mention three tools we can use to make AJAX requests.
* Axios, Fetch API, and jQuery