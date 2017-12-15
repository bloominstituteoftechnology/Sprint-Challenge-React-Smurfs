### What is the difference between Redux/Application State vs. React/Component State?

* 1. `React state` is stored locally within a component. When it needs to be shared with other components, it is passed down through props.

* When using `Redux`, `state` is stored globally in the Redux store. Any component that needs access to a value may subscribe to the store and gain access to that value. Typically, this is done using `container components`. This centralizes all data but makes it very easy for a component to get the state it needs, without surrounding components knowing of its needs.

### Describe what an Action is/does.

* 2.  An action `Actions` are `payloads` of information that send data from your application to your `store`. They are the only source of information for the store. You send them to the store using store.`dispatch()`.

### Describe what a Reducer is/does.

* 3. `Reducers` specify the how the application `state` changes in response to the actions.

### What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.

* 4. `HTTP` stands for HyperText Transfer Protocol.

* CRUD stand for (Create, Read, Update, Delete cycle).

* Four methods are GET, POST, PUT, DELETE