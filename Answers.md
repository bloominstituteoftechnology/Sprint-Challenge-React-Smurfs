1.  Explain the differences between `client-side routing` and `server-side routing`.

    Answer: 

        server - reloads whole page on data requests, may re-load data ( ie, header, footer ) that doesn't need to be re-rendered, used to be google liked these pages for SEO better

        client - (REACT) whole page is loaded to memory on first load, no whole page re-fresh on data requests, time between linked data requests is faster, more code needed for functionality.





2.  What does HTTP stand for?

    Answer: Hypertext Transfer Protocol - A network protocol or a set of rules that govern the way web clients work. How things like a browser communicate with web servers over the internet.


3.  What does CRUD stand for?

    Answer:  
        C - Create
        R - Read
        U - Update
        D - Delete


4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    Answer:
        Post - Create
        Get - Read
        Put - Update
        Delete - Delete


5.  Mention three tools we can use to make AJAX requests

    Answer: 
        1. 
            fetch()
                .then()
                .catch()

        2. 
            yarn add axios
            import axios from 'axios';
            axios
                .get()
                .then()
                .catch()

        3. jQuery ????

