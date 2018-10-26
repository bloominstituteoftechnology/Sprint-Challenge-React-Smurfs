1.  Explain the differences between `client-side routing` and `server-side routing`.

Server-side routing is the "traditional" way we think about getting web pages into our browser. You click a link, or enter a URL into your browser. Then your browser prepares a message to request a connection to the server. This message has to be encapsulated in several layers of transport messages, before it even makes it out of your home. Then each message is sent on a long journey through the Internet. This is all time consuming, and can really slow down the user experience. You don't want to go through this process every time you click a navigation link in a website. 

This is where client-side routing becomes a powerful tool to improve user experience. After the initial website files are downloaded to your computer, the goal of client-side routing is to limit any further requests from the server. Navigation links on the site will point to files stored on the client's machine, rather than an Internet address. It takes a split second to resolve client-side URLs, which simply point to files in local memory. This makes for snappy navigation, rather than sending files and messages back and forth thousands of miles every time you click a link. 

1.  What does HTTP stand for?

HyperText Transfer Protocol. It's the agreed-upon protocol for transmitting website data, email data, etc., to web browsers.

1.  What does CRUD stand for?

C- create
R- read
U- update
D- delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create- 
1.  Mention three tools we can use to make AJAX requests