1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application State vs. React/Component State?

All the Redux/Application state is stored in one object, could be modified by reducer and shared between all the application containers. 
React/Component state is belongs to that specific component, and only readalbe by that component, and could be assigned as props to child component, and these props could be modified.



2. Describe what an Action is/does.

In Redux, Action describe these functions that will happen, but doesn't clarify how these functions will work. Each method defined in Action has tow properties: type and payload. 


3. Describe what a Reducer is/does.

These functions that are described in Action will be functionally defined in Reducer. All the application state is stored in one object, and the methods in Reducer could modify the state tree. 



4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.

HTTP: Hypertext Transfer Protocol. HTTP communicates between web browsers and web servers, for transmitting hypermedia documents, for example HTML. In computer programming, CRUD stands for four basic functions of persistent storage: Create, Read, Update, and Delete. Each letter could represent HTTP methods. Create -> PUT/POST; Read -> GET; Update -> PUT/POST/PATCH; Delete -> DELETE.