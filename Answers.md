##Answers

1. On a webpage that uses `server-side routing`, clicking on a link causes the browser to send an HTTP GET request to the server, causing the server to send back a new HTML page to the browser, which the browser then loads, discarding the old page.

On a webpage that uses `client-side routing`, on the other hand, clicking on a link produces a GET request, but that GET request never reaches the server, but is instead handled by a `Router` object, which then sends back a particular `View` (the `V` in `MVC`) to the browser, which replaces the `View` already in the browser, but loads it into the same underlying HTML page as before without having to refresh the page.

2. `HTTP` stands for `HyperText Transfer Protocol`.

3. `CRUD` stands for `Create, Read, Update, Delete` (or according to some sources, `Destroy`).

4. 
    * `Create`: `POST`
    * `Read`: `GET`
    * `Update`: `PUT`/`PATCH`
    * `Delete`/`Destroy`: `DELETE`

5. Three tools we can use to make `AJAX` requests are `fetch`, `Axios`, and `jQuery`.