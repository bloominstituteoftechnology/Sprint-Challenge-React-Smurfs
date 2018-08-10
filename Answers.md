1.  Explain the differences between `client-side routing` and
    `server-side routing`.

_Answer_

Client side routing invovles navigating between different pages in the view
layer. The pages are switched based on changes to URL but the switching of the
pages is independent of the server i.e. changing the view without refreshing the
page. This is done by using the browser's history object as the state and the
components being re-rendered as a result of changing the states.

Server side routing also involves changing the views based on URLs but for every
change a GET request is sent to the web server by the browser and a new page is
loaded by the browser by parsing the response text. This involves a page refresh
unlike client side routing.

1.  What does HTTP stand for?

_Answer_

HyperText Transfer Protocol

1.  What does CRUD stand for?

_Answer_

Create Read Update Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when
    interfacing with APIs/Servers.

_Answer_

| Operation | HTTP method |
| --------- | ----------- |
| Create    | `POST`      |
| Read      | `GET`       |
| Update    | `PUT/PATCH` |
| Delete    | `DELETE`    |

1.  Mention three tools we can use to make AJAX requests

_Answer_

- Using the browsers native XMLHttpRequest API
- Any JS library like Axios/jQuery
- An application like Postman
- On linux-like shells the `curl` utility
- All programming languages have a library/API for sending AJAX requests
