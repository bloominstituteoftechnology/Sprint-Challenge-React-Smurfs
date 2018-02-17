1. Explain the differences between `client-side routing` and `server-side routing`.
- In server-side routing, requests to the server will result in full page refreshes as it serves a new document, and discards the previous one, in response to a `GET` request. In client-side routing, the client will already have all of the necessary elements downloaded, and navigating between them will simply hide and show different elements, with no need for further requests to the server.
---
1. What does HTTP stand for?
- **H**yper**t**ext **T**ransfer **P**rotocol
---
1. What does CRUD stand for? 
- **C**reate, **R**ead, **U**pdate, **D**elete
---
1. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
- **Create:** `PUT` / `POST`
- **Read:** `GET`
- **Update:** `PUT` / `POST` / `PATCH`
- **Delete:** `DELETE`
---
1. Mention three tools we can use to make AJAX requests.
- XMLHttpRequest API, Fetch API, Web Workers API