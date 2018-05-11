### 1. Explain the differences between `client-side routing` and `server-side routing`.

Routing in both cases refers to directing a user through a web-site or web-application as they navigate through it. That is, if a user clicks on a link that is part of the site, the user will go to a different page or view of the site.

In server-side routing, every time the user navigates to a new part of the web site, the browser sends a request to the server. The server receives the request, and serves up HTML (*et al*) to the browser to render. This HTML can be for a portion of the web page the user is currently viewing, or it can be a totally new page to render.

In client-side routing, the user receives information about the whole web app when they first enter. From there, every time the user navigates to a new part of the app, the *web app in the browser* changes the view. For example, if the user clicks on "About", the app renders the pre-loaded "About" page to the user. *No request is made to the server for view data*.

### 2. What does HTTP stand for?

HTTP stands for "**H**yper**T**ext **T**ransfer **P**rotocol". It's a fundamental protocol (*standard methods and procedures*) for computers to communicate with each other. Without it, the internet as we know it wouldn't exist.

### 3. What does CRUD stand for?

CRUD stands for:

**C**reate
**R**ead
**U**pdate
**D**elete

### 4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

**C**reate → POST

**R**ead → GET

**U**pdate → PUT

**D**elete → DELETE

### 5. Mention three tools we can use to make AJAX requests

The main tool we used this week to make AJAX requests is **Axios**. **JQuery** is also often used to make AJAX calls. 