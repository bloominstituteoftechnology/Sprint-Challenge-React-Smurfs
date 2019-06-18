1.  Explain the differences between `client-side routing` and `server-side routing`. <br>
    Server side routing requests only the data that's needed and search engines have optimized for pages coming from servers. Unfortunately, server side routing causes a full page refresh for every request made (meaning unnecessary data for elements that remain static is being requested over and over). Additionally, it can take a bit for a page to be rendered when a request is made to the server for every new page load.<br> 
    Client side routing takes longer on initial load (because the entire site loads, including some views the user may never access). Search engine crawling is less optimized for such sites. On the plus side, routing between views is generally faster and smooth transitions are easier to implement.
    <br><br>

2.  What does HTTP stand for? <br>
    HyperText Transfer Protocol. This protocol underlies the World Wide Web. It defines how messages are formatted and transmitted over the Web, and what actions Web servers and browsers should take in response to commands (GET, POST, PUT, DELETE, among others).
    <br><br>

3.  What does CRUD stand for? <br>
    CRUD refers to the 4 basic database functions: Create, Read, Update, Delete. The term was likely first popularized by James Martin in his 1983 book *Managing the Data-base Environment* (according to Wikipedia).
    <br><br>

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers? <br>
    GET = Read
    POST = Create
    PUT = Update
    DELETE = Delete
    <br><br>

5.  Mention three tools we can use to make AJAX requests: <br>
    *(This question may be outdated bc TK only discusses 2 methods.)*<br>
    The first tool we can use is XMLHTTPRequest. This tool takes a HTTP method and url as parameters. Use .send() to send the request to the server and then get the databack using .onreadystatechange(). The second tool we can use is .fetch(). Fetch returns a Promise object which enables us to handle async requests more easily. Fetch takes a url as a parameter. We use .then() to receive the returned data and .catch() to error handle. Axios is our third tool. It works quite similarly to fetch but we use axios.{method name} to return our Promise.