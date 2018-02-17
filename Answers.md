#Questions

1. Explain the differences between `client-side routing` and `server-side routing`.
   * Server-side routing has been the standard for a long time and referes to routing handled by your server application. However, when using this style of routing URL changes reesult in a full page reload. A perk of server side routing is that data is only requested when we need it.
   * Client-side routing is the new kid in town and occurs when changes in the URL are handled in your client app by Javascript. This form of routing requires the website to load all of the data it needs initially. However a perk to this is that you can then view your data without calls to the server. This makes for a faster smoother app.
2. What does HTTP stand for? - Hypertext Transfer Protocol / A protocol in which information is sent from a users browser to a website.(or vice versa).
3. What does CRUD stand for? - Create / Read / Update / Delete
4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
   * Create = Get
   * Read = Post
   * Update = Put
   * Delete = Delete
5. Mention three tools we can use to make AJAX requests. Axios / Fetch / JQuery / Superagent
