# Explain the differences between client-side routing and server-side routing.
with client side rendering the virtual dom is affected and in turn the actual dom is affected when the time comes. This allows the user to change information on the client machine itself without sending info back to the server and waiting on a response from said server. 

with server side rendering the entire data is sent to the server and the server returns back what needs to be updated usually then having the actual dom re-render the whole page with the new data available. With one only the client needs to see the change to affect a change to the user with the other it needs to be sent down the and the server needs to return the change which is then put into effect. 

# What does HTTP stand for?
Hypertext Transfer protocal
# What does CRUD stand for?
(create, read, update, destroy) or create retrieve update destroy
# Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
post, get ,put , delete
# Mention three tools we can use to make AJAX requests.
axios, postman, jquery