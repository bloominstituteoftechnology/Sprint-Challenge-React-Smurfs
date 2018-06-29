1.  Explain the differences between `client-side routing` and `server-side routing`.
    > Client-side routing - All of the routes are stored inside of a history object and that history object is modified based on navigation within the browser. Node gives us access to this history object and it can be used to intercept requests to the server for navigation. React Routing is especially different from any other frontend routing system in that other frontends declare their routes ahead of time while React does not. Each of React Router's Routes are actually Route components and behave exactly like components should. The component that you pass down as props actually becomes a child of the Router.
    > Server-side routing sends http requests to a server that is listening for those requests. After it recieves a request, it then sends a response. It's response determines what data will be available to and loaded to the page. React can actually be routed on the Server to increase SEO Ranking.
1.  What does HTTP stand for?
    > Hyper Text Transfer Protocol
1.  What does CRUD stand for?
    > Create, Read, Update, Destroy
1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    > GET, POST
1.  Mention three tools we can use to make AJAX requests
    > Fetch, Axios, Postman
