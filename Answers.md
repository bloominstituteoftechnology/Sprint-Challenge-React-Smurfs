**1.  Explain the differences between `client-side routing` and `server-side routing`.**

Traditionally, server-side routing was how data was transferred from a server to a user. If a user went to a different part of the website, the URL changed and the page reloaded, and new data was transferred to the user's web browser.

Client-side routing involves loading all page assets on the _initial_ page load, so that no network activity has to take place afterwards, and all subsequent routing is handled by JavaScript (i.e. the state changes, rather than new data being sent and received).

Client-side routing is good because it's arguably better for low-bandwidth connections, and data load times (and animations) are faster. Server-side routing is good because only data that's requested in transferred -- no more, no less.

**2.  What does HTTP stand for?**

Hypertext transfer protocol. 

**3.  What does CRUD stand for?**

Create, Read, Update, Delete/Destroy -- the four things you can do with data in persistant storage.

**4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.**

Little bit confused by the wording of the question, but I think Put/Post maps to Create/Update, Get/Head maps to Read, and Delete maps to Delete.

**5.  Mention three tools we can use to make AJAX requests**

- Axios.get
- Fetch()
- JQuery Ajax method? https://www.w3schools.com/jquery/ajax_ajax.asp