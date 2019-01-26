# Explain the differences between `client-side routing` and `server-side routing`.

## Server-Side

- a request to the server for an entire, new document, can be initiating by clicking a link.
- causes the whole page to refresh
  - Due to new GET request; server responds with new document
  - Discards old page.
- **Pros:**
  - Only requests necessary data
  - Search engines are optimised for webpages that come from the server
- **Cons:**
  - Each request is a new document no matter what.
  - Can be slow if the document is huge or the internet is slow

## Client-Side:

- The rquest never reaches the server. It is instead stopped by Javascript and handled internally via state.
- Only the changed information will refresh, rather than the whole page. \*
- **Pros:**
  - It can be faster to load due to not needing to load the entire document every time.
  - Smooth transitions/animations between views are easier to implement.
- **Cons:**
  - Everything that could possibly be used gets loaded from the beginning, whether it will be used or not. This can make the initial load time longer than desired.
  - It's not the standard, so the developer has to implement it manually.
  - Search engines aren't quite used to it but are getting better. This means your site may suffer SEO-wise.

# What does HTTP stand for?

- **H**yper
- **T**ext
- **T**ransfer
- **P**rotocol

# What does CRUD stand for?

- **C** reate
- **R** ead
- **U** pdate
- **D** elete

# Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

- Create - POST
- Read - GET
- Update - PUT
- Delete - DELETE

# Mention three tools we can use to make AJAX requests

- You can build an XMLHTTPRequest yourself, but it's difficult.
- You can use axios methods.
- You can also use Ajax methods, for which JQueryy is famous.
