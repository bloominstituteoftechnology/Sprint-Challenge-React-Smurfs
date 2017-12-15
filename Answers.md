1. The concept of a “Single Source of Truth” in Redux is referring to the fact thst state is stored in a single place. When using Redux, the state of the whole application is stored in an object tree within a single store. The difference between React state and Redux state is that React state is stored locally within a component, and passed down as props; in Redux,state is held globally in the store.

2. Actions are packets of information that send data from your application to you store. They are the only source of information for the store. Actions are plain Javascript objects, they are stateless, and must have a type. Actions describe the fact that something happened, but they don’t specify how state changes in response.

3. Reducers specify how state changes. This is where the logic of the application takes place.

4.HTTP stands for Hypertext Transfer Protocol. CRUD stands for Create, Read/Retrieve, Update, Delete. POST is the HTTP method that correspond with the Create portion of the CRUD acronym. GET is the HTTP method that corresponds to the Read or Retrieve portion of the CRUD acronym. PUT is the HTTP method that corresponds to the Update portion of the CRUD acronym. DELETE is the HTTP method that corresponds to the Delete portion of the CRUD acronym.
