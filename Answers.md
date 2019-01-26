  Explain the differences between `client-side routing` and `server-side routing`.
  What does HTTP stand for?
  What does CRUD stand for?
  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
  Mention three tools we can use to make AJAX requests


  1. Server side is starts out making a request to a server and the server returns said info for the current page. Any time a new page is renders a new request is made to the server for the new info which can be seen by the page refresh. Basically only the data that is needed for that particular request is sent from the server. 
      
    In a client side the inital request is made to the server, however all the data pertaining to the application is sent at once. When new data is needed to be displayed to the screen, no new request and data trasfer is needed as the client already has all the data. This allows for a new render of the information  without a refresh of the page.

  2. Hyper Text Transfer Protocol

  3. Create Read Update Delete/Destroy

  4. Create => Post
      Read => Get
      Update => Put
      Delete => Delete

  5. Axios
      Fetch
      JQuery
