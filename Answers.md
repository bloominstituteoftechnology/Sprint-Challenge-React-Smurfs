# Answers
1. Explain the differences between client-side routing and server-side routing.
    * Server side only requests the data that is needed. every request results in a full page refresh. Client side loads all the data initially thus granting a slower init load time but fast traversal through pages and data without refreshing. seo is less optimized and it requires more code to get setup because server side is the standard.
2. What does HTTP stand for?
    * HTTP is (Hyper Text Transfer Protocol) is a protocol that allows linking and browsing the web. It allows communication between web-servers and web-users.
3. What does CRUD stand for?
    * Create, Read, Update and Delete.
4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    * Create = Post()
    * Read = Get()
    * Update = Put()
    * Delete = Delete()

5. Mention three tools we can use to make AJAX requests

    * Fetch API come from node.js it is a newer standarized api.
    * Axios is a promised based HTTP client for node.js and the browser.
    * jQuery a javascript libary for manipulating the dom and making asynchronous calls.