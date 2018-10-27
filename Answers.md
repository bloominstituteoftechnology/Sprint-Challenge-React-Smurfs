1.  Explain the differences between `client-side routing` and `server-side routing`.

Server-side routing is the older, traditional method of rendering the HTML, CSS and JS. With each new request, the server would send back a new rendering of the page. On the downside, it can be slower as the user navigates through the website; on the upside, it only fetches needed data.

Client Side Routing is the newer method of rendering the HTML, CSS and JS. Upon initially loading the URL, the server loads all the data for the entire website, and all routing between elements and pages is then handled by the JS, not the server. On the upside, once the page loads, the user's engagement with the site is very fast; however, on the downside, the initial load time can be significantly longer as the server fetches all the data, not only the data the user is engaging with at that moment.

1.  What does HTTP stand for?
Hyper Text Transfer Protocol. It's the set of rules that govern how we request information from servers.

1.  What does CRUD stand for?

Create
Read
Update
Destroy

These are the HTTP methods

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create: post()
Read: get()
Update: put()
Destroy: delete()

1.  Mention three tools we can use to make AJAX requests

Fetch, Axios and JQuery.