1.  Explain the differences between `client-side routing` and `server-side routing`.

- The differences between `client-side routing` and `server-side routing` are the methods in which the client and the server interact. In server side rendering, when a client interacts with the website (via buttons or links), the server will then go to find the html file linked with that interaction and load up a new html file to go back to the user, refreshing the page. The main strength with this is SEO, or search engine optimization. Client side rendering refers to when the routing is done internally by the JavaScript already on the page. Here, when the user interacts with the website (again via button press, or link etc), the information will already be there, but is only displayed when asked for it. Thus, no refresh needed.


1.  What does HTTP stand for?
- HTTP stands for `HyperText Transfor Protocol`. Basically, its just a guidline that defines how messages are defined across the web.

1.  What does CRUD stand for?
- CRUD stands for `Create, Read, Update, and Delete`. These are the four essential functions/actions a database has.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
C reate ---> POST (HTTP Method)
R ead ---> GET (HTTP Method)
U pdate ---> PUT (HTTP Method)
D elete ---> DELETE (HTTP Method)

1.  Mention three tools we can use to make AJAX requests
- Axios.get
- fetch
- Jquery