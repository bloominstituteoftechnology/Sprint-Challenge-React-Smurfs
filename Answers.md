#1 
Server-side routing was the way the internet worked when web-browser were not able to process too much information, and will cause the end user to only be given only the data for that specific url. Going to a different url, on the same website, will result in the server fetching all new data to the end user, which was inefficient as there would be a constant flow of data to and from the server. Client-side routing is when the client receives a lot more data, and the browser takes care of the routing by displaying and hiding components as needed when the user changes the url on the same website (changes url by clicking on components of the websites, which is a Link that works together with a Route). So, in modern day, web-browsers have enough processing to handle routing on its own, which results in more efficient data transfer to and from the server.
#2
HTTP = Hyper Text Transfer Protocol
#3
CRUD = Create, Read, Update and Delete
#4
When using AXIOS, the four methods that map to CRUD are .post, .get, .put, and .delete.
Create = post, Read = get, Update = put, Delete = delete.
#5
AJAX works with a Promise, so it will need one method (get, post, put, or delete), a 'then' method, and a 'catch' method in case the Promise fails to briing the requested data.