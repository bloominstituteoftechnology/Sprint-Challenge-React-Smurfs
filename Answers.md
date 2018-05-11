1.  Explain the differences between `client-side routing` and `server-side routing`.
* Route allow user to move around the content an App provide. 

* Server-side route is governed by HTTP request. Each time an user wants to consum a new piece of App's content, the 'client' ask to the 'server' for that chunk os code, then the server send that chunk of data over the internet to be deliverred to the user's client, then the 'client' parse and render that content. ...and so on for every piece of content -> ask for 'all' the data/resources.then(parse).then(render).

* Client-side route diverge from its sibling, the server-side, in a way that the first do not have to ask and await for the big chunk of data.then(parse).then(render); the 'client' alredy has the most part of the App parsed. When a user wants to consum  a new piece of data the 'client' just have to 'render' (not parse, is alredy parsed) that specific chunk of data (this is very fast), if there are any additional kilobyte of data needed, the 'client' ask for that compact-small-tiny-agile speck of date via an AJAX request to the corresponding API.

2.  What does HTTP stand for?
* Hipertext Transfer Protocol

3.  What does CRUD stand for?
* C -> Create (POST)
* R -> Read (GET)
* U -> Update (PUT)
* D -> Delete (UPDATE)

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
* Please, refer to previous quetion (N. 3)

5.  Mention three tools we can use to make AJAX requests
* Tools
1. Postman
2. Netcat
3. Axios
4. Fetch API
5. jQuery.AJAX