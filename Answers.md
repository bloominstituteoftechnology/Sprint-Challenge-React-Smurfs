Chad Jemett
Done with MVP and Delete stretch at 10:52 PT.

1.  Explain the differences between `client-side routing` and `server-side routing`.

Server-side routing is the way websites have worked since the beginning of the web.  The client, your computer, would request data from the server. The server would send the whole HTML document to the client. This process would happen every time the user clicked a link or sent data via a form. The good thing about server-side routing is the process only requests the data that’s needed.  Server-side has been a standard for a long time. So search engines are optimized for this process.

The bad thing about server-side is every request means the web page refreshes. This can take a long time if the server is sending a lot of data or a large web page.


Client-side routing is when javascript makes the request for the data. There is no request from the server. The javascript program asks for data via an API request. Because of this, the page does not need to refresh. The good thing about client-side is that websites can be faster and more responsive. Users don’t have to wait around for the entire page to refresh.
However, the downsides is, the page will take longer to load at first. Client-side pages take a lot of work to program and set up. They require libraries and extra logic that’s not required in server-side websites. Finally, search engines can’t crawl the site. So a client-side site may have a tough time being viewed by people searching for it from a search engine.

1.  What does HTTP stand for?

  HTTP stands for Hyper-text transfer protocol.

1.  What does CRUD stand for?

  CRUD stands for Create Read Update Delete.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

|HTTP|CRUD|
|----|----|
|POST|Create|
|GET| Read|
|PUT|Update|
|DELETE|Delete|

1.  Mention three tools we can use to make AJAX requests

1. Axios. A library for making requests. Axios also returns a Promise object.
2. Postman. An application for HTTP requests. You use it to check the data you are getting from the API.
3. Fetch. Is a javascript library for making requests. It is not supported by all browsers.
