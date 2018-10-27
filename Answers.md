1.  Explain the differences between `client-side routing` and `server-side routing`.

Client side routing loads all the data upfront. Server side loads data as needed. 
client side routing is slower in the beginning but faster afterwards. Server side is faster in beginning but can waste network activity and load time by constantly having to refresh the page when getting new data.

2.  What does HTTP stand for?

HyperText Transfer Protocol

3.  What does CRUD stand for?

Create,Read,Update,Destroy.

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create uses axios.post to create new entry. Read uses axios.get reads the database so we can set it to state or use somewhere else. Update uses axios.put to update the database. Destroy uses axios.delete to remove an item from database.

5.  Mention three tools we can use to make AJAX requests
Axios,Fetch,Request