1.  Explain the differences between `client-side routing` and `server-side routing`.
    Client side is the browser and the user, so client side routing is routing within the browser itself, server side routing has to do with the server so it is routing through the server. Server side routing is more of an older, and the original way of routing, it uses the server to hold the app files, the app then requests files to the server, the server returns the file to display, the browser then refreshes to show the new file handed by the server. With client side routing, since everything happens in the browser, there is no handoff of files, the file is already there, and it is one big file, so now the client can route through the browser and does not need to refresh everytime it requests a new route, the only downside to that is that the file is loaded in its entirety when first rendered so the initial load might take longer

1.  What does HTTP stand for?
hyper text transfer protocol


1.  What does CRUD stand for?
create read update delete


1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
get requests to read(and retrieve) .. post requests to create .. put requests to update .. delete requests to delete


1.  Mention three tools we can use to make AJAX requests
older libraries like jquery, newer libraries like axios, vanilla js with fetch api