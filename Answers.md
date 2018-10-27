1.  Explain the differences between `client-side routing` and `server-side routing`.

`Client-side routing` is a lot more old school and it shen the browser runs scripts on the user's end. The code is transferred from the server to the user's browser over the internet. `Server-side` routing is run through a web server. This generates dynamic HTML pages into the client browser. It's typically used for a more interactive webiste, but takes longer to load.

2.  What does HTTP stand for?

HTTP stands for Hyper Text Transfer Protocol. It's a set of rules that govern that way browsers communicate with servers.

3.  What does CRUD stand for?

CRUD stands for Create, Read, Update, and Delete. It refers to how data can be manipulated between a server and browser.

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create - .put
Read - .get
Update - .post
Detele - .delete

5.  Mention three tools we can use to make AJAX requests

You can do it without a library through the browser with certain calls (but that isn't supported in all browsers yet[I think this is Fetch API]), or you can use libariries like axios, jQuery, etc, and Postman is, I think, mimics an API to help it work properly.