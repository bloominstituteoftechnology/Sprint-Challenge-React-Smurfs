1.  Explain the differences between `client-side routing` and `server-side routing`.
    With server side routing when we visit a webpage the website
    requests data from a server. The Server returns data like
    a HTML file or document to the browser so the browser can 
    render the page. Each time we go to a new URL a fresh page
    is loaded on the server then sent to the browser, then the 
    browser refreshes in order to render the new page.

    Client-side routing differs in that the data is managed by
    the browser/application within it's own memory. As a result,
    the browser now has what is required in memory to render
    different pages. When additional data is required/requested,
    that is not being held in memory, an API request is made and 
    simple json is returned rather than the entire page. The Browser no longer needs to refresh between routes because the server is no longer compiling the page for the browser.

2.  What does HTTP stand for?
    HTTP stands for Hypertext Transfer Protocol. This is the foundation of communication over the web. I believe it was 
    started so that researchers could exchange research papers
    and data over the internet using hyper links.

3.  What does CRUD stand for?
    CRUD is an acronym in programming that stands for 
    Create, Read, Update, and Delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    The following methods that we can use when mapping to the 
    interface with APIs/Servers are; 'Post' for C (create), 
    'Get' for R (read), 'Put' for U (update), and 'Delete' for D (delete). So Post==Create, Get==Read, Put==Update, Delete==Delete.

5.  Mention three tools we can use to make AJAX requests
    1. Axios
    2. JQuery
    3. Fetch
