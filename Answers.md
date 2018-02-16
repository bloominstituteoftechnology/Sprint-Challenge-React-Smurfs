1. Explain the differences between `client-side routing` and `server-side routing`.
>Server-side routing is the traditional method for presenting a UI with multiple 'pages'.  In this schema, when the user clicks a link or other navigation element, the browser makes a request to the server for a new page to display, and several different pages hosted on the server are linked in this way.  By contrast, client-side routing only loads data from the server to the client once.  The illusion of different pages is created through the use of <Router> elements that modify the DOM elements displayed based on modifications made to the URL.
2. What does HTTP stand for?
>HyperText Transfer Protocol. Basically, it is a protocol for encoding nodes of text that can be linked to other nodes of text via 'links'.  This protocol is the backbone for communication on the Web.
3. What does CRUD stand for?
>Create, Read, Update, Delete.  This is an acronym for the basic operations that clients use to interact with databases/servers.
4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
>Create === POST, Read === GET, Update === PUT, Delete === DELETE.
5. Mention three tools we can use to make AJAX requests.
>The most straightforward way to use AJAX is creating and manipulating an XMLHttpRequest object directly.  However, this often necessitates the repeated entry of multiple parameters and can be manually clumsy in other ways, so it is more common to use alternatives like Fetch, or tools like axios.