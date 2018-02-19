
###Explain the differences between `client-side routing` and `server-side routing`.
CSR is managed by javascript and only select amount of code renders at a time. If you are visiting
multiple pages on the site that display the same information but have subtle differences, CSR only renders
information that has not been presented yet. The drawback is that you have to wait for javascript to load .

SSR loads the the entire HTML page every time. So every request results in a refresh of the page, thus loading unnecessary data, while taxing the performance and speed of every interaction. Users with slow internet speeds have the biggest disadvantage, their user interactions are hindered when data constantly re-renders.

###What does HTTP stand for?
HTTP stand for Hyper Text Transfer Protocol

###What does Crud stand for?
Create, Read, Update, DELETE


###Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
Post represents Create, The get method represents Read and Put method represents Update/create. Delete is, well, DELETE.


###Mention three tools we can use to make AJAX requests.
We can use Axios, Fetch, or XMLHttpRequest
