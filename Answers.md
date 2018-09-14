1.  Explain the differences between `client-side routing` and `server-side routing`.

server side routing is the older way of presenting routes and managing the data from a website or server. this is the process where all of the markup and presentational data are rendered before being sent to the client. This can be fairly slow depending upon what data is to be rendered and presented. This also takes up more bandwidth as for every new page load we are requesting the entire page render to be pushed over to the client from the server.

Client side routing is the newer and more efficient way to render smaller component sized pieces of a presentational display such as a website or web app. This method does a call to the server usually an ajax request to load in a partial pice or component to be rendered and a front end library will present the data bt only rendering the parts that have changed and this also means that the data requested should only be as large as the pice of the presentational layout that needs to be re rendered. The client usually in the case of a webpage or a webapp this would be a web browser is tasked with handling the rendering of the partial based upon what library or framework that may be in use.

1.  What does HTTP stand for?
  HTTP stands for "HyperText Transfer Protocol" 
  
  (This is the general term that is sometimes refered to the HTTP Protocol but this is a missuse of the acronym but is still in wide spread use as that would actually be the HyperText Transfer Protocol Protocol which is fairly nonsensical.)

1.  What does CRUD stand for?

CRUD is the acronym in data and database design and methodology that stands for "Create Read Update Delete".

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

The relation between CRUD and the HTTP methods are as follows:
 * POST => CREATE
 * GET => READ
 * PUT => UPDATE
 * DELETE => DELETE

1.  Mention three tools we can use to make AJAX requests

* "Postman" / "Advanced Restful Client" (the 2 are fairly Synonymous to each other).
* Axios (This is a library tool that can be installed via npm and can do ajax requests programatically).
* The Fetch API (this is a simple to understand API that returns data to the client but unlike axios it will require an extra step such as turning data in to Jason using the .Json() method).