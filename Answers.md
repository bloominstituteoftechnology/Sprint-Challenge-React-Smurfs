1.  Explain the differences between `client-side routing` and `server-side routing`.
    A - In Server-Side routing when a link or a request is made, the request is sent to
    the server and the server response with the appropiate HTML, CSS and JS. On the initial load, the server only send the necessary files for that additional screen and nothing more. This method has a quicker initial load but navigation between screens is slower.

    In Client-Side routing everything gets sent to client in the initial load. So when a user clicks on a link, the window does not refresh. The screen changes to that screen almost immediately. This method has a longer initial load but navigation between screens is much quicker.

1.  What does HTTP stand for?
  A - It stands for Hyper Text Transfer Protocol. It is network protocol that dictates how a client communicates with the server.

1.  What does CRUD stand for?
  A - Create
      Read
      Update
      Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

  A - Create - POST
      Read - GET
      Update - PUT
      Delete - DELETE

1.  Mention three tools we can use to make AJAX requests

  A - Axios
      Fetch
      XML HTTP