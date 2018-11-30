1.  Explain the differences between `client-side routing` and `server-side routing`.
With server-side routing, every time the URL in the browser changes, a new HTML file is requested from the server and served up. It causes the whole page to refresh. This discards the old page completely.

With client-side routing, routing is handled by the javascript that's loaded on the page. When the URL in the browser changes, the whole page does not refresh. This is because the refresh is prevented by react-router since react-router is essentially hijacking the routing abilities of the browser. Instead, only the view changes, and maybe some state is updated, depending on the situation. Then, depending on the URL, different components are rendered.

2.  What does HTTP stand for?
Hyper Text Transfer Protocal

3.  What does CRUD stand for?
Create, Read, Update, Delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
GET maps to Read
POST maps to Create
PUT maps to Update
DELETE maps to Delete

5.  Mention three tools we can use to make AJAX requests
I'm not quite sure what is meant here by "tools".
1 - We use the componentDidMount method. This allows for asynchronous loading the page so that the other parts of the page don't need to wait for data from an API request to be returned.
2 - We can use Promises
3 - We can use axios, which is a library that makes creating Promises easy.