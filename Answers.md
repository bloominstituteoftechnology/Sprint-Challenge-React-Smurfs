1.  Explain the differences between `client-side routing` and `server-side routing`.

        client-side routing allows you to navigate a website's pages without the requirement of requesting information from the server each time a new page is loaded.  instead, the data is loaded in the initial load of the site, is stored in the browser, and is routed and rendered when called for.  server-side routing only loads what is available for the specific page, meaning in order to go to another page within the website, the browser must request data from the server in order to load the page.  server-side routing will have a shorter initial load time, but will require more load times when navigating across the site.  client-side routing will have a longer initial load time, but will not require any more requests to navigate the rest of the site.

1.  What does HTTP stand for?

        HyperText Transfer Protocol.

1.  What does CRUD stand for?

        Create, Read, Update, Delete.  

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

        .get <=> Read
        .put <=> update
        .post <=> create
        .delete <=> delete

1.  Mention three tools we can use to make AJAX requests

    axios, fetch, and promise methods like .then and .catch