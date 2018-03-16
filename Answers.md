# Sprint Challenge Routing Axios: 

## Self Study Questions:

1. What is the difference between _server side routing_ and _client side routing_?
* _serve side routing_, primarily used for static web pages, remains the most common method for render data onto a webpage.  Unlike with _client side routing_, which makes only a single request, with _server side routing_, when you open a website, the browser will make a request to the server that contains the contents of that website.  If you decide to visit a different _page_ on that website, then the browser must send out a new request to the server for entire new page with the desired changes.  This works fine with simple static websites, but with interactive web applications, which take much longer to build -- rebuilding the entire website each time a change is made, even if only a single section is altered, becomes very costly.  _client side routing_ presents one solution to this issue by integrating a programming language (such as JavaScript), so that website data from the server can be loaded once, and then manipulated (on the _client side_) for any pages within the website.  Lastly, it is worth nothing that it is often said that _client side routing_ also has significantly lower Search Engine Optimization - as search engine crawlers, may not be able to interpret _client side routed_ websites as effectively.
new set of 
2. What does HTTP stand for?
* Hypertext Transfer Protocol
3. What does CRUD stand for?
* Create, Read, Update, Delete
4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
* Create: post -- used to add new entries to server data
* Read: get -- used to request/retrieve data.
* Update: put -- used to replace current values (aka update)
* Delete: delete
5. Mention three tools we can use to make AJAX requests.
* Axios, jQuery, Fetch

