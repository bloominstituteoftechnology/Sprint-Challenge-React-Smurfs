## 1. Explain the differences between `client-side routing` and `server-side routing`.

#### Client-side routing means that all of the HTML, CSS, and JS for the entire site are loaded right away. Then when you route to a new page on the site, the HTML, CSS, and JS needed for that page area already available to it goes to that page extremely quickly. Conversly, server-side routing means the user will only recieve the HTML, CSS, and JS for the page they are requesting. When the user wants to go to a different page, another server request is sent to get the correct HTML, CSS, and JS files needed to render that page. This results in slower navigation through the site, but a faster initial load time.

## 2. What does HTTP stand for?

#### HTTP stands for 'HyperTest Transfer Protocol'.

## 3. What does CRUD stand for?

#### Create, Read, Update, Destroy

## 4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

#### Create => `.post()`

#### Read => `.get()`

#### Update => `.put()`

#### Destroy => `.delete()`

## 5. Mention three tools we can use to make AJAX requests

#### We learned about 2 tools we can use to make AJAX requests. The fetch api and axios. Upon further research, I have found other ways such as using jQuery, the Request library, and the SuperAgent library.
