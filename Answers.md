1.  Explain the differences between `client-side routing` and `server-side routing`.
> Server Side routing is when a you request a html file or template to your browser. The server will bring it all together and render it back to the browser so it can read it correctly. Which this will happen each time you get a new URL. It will do a fresh page load on the server. Then it will get sent back to the browser.
> Client Side routing is when you will have javascript in the client application to manage the data of the application. And will save what it has in its own memory. Then we can render different pages from what based in the memory. If there is new data that maybe needed we can then request it from a simple API request to get the data we need.

1.  What does HTTP stand for?
> HyperText Transfer Protocall. HTTP helps set rules on how to govern webs clients, browsers, and communcate with other web servers throughout the internet.
1.  What does CRUD stand for?
> Create Read Update and Delete.  We use CRUD which is our HTTP Methods for server operations and resources. It will allow us to Get informtion, Post Information, Put the informtion, and delete the information to the web and db server.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
> The HTTP Methods, POST = Create, GET= Read, PUT = Update, Delete = Delete
1.  Mention three tools we can use to make AJAX requests
> For any Ajax request we need a fetch or a Promise this gets a async Ajax request. We then need a .then which is the repsonse from the api, and a catch to catch all the errors that may happen during the repsonse or before.