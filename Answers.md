##1.  Explain the differences between `client-side routing` and `server-side routing`.
With client side most of the data you need is loaded onto your local browser upon initial contact with the page.  You then route between different pages or views based mostly on the information you already downloaded, with AJAX calls for small chunks of data when necessary.  With server side routing you request each page individually, which makes initial load faster, but the overall experience of using the app seem much slower. Every time you change routes, you reload an entire new page from the requested route on a remote server.

##2.  What does HTTP stand for?
Hyper text transfer protocol. 
##3.  What does CRUD stand for?
Create Read Update Destroy.
##4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
Create-Post
Read- Get
Update- Post
Destroy- Delete
##5.  Mention three tools we can use to make AJAX requests

You can use the built in promise/fetch functions in Javascript and write out the functionailty of it yourself, or you can use a promise library like Axios to automate most of this behind the scenes. A lot of older apps use jquery to manipulate AJAX requests.