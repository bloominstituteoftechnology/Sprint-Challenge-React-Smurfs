1.	Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application State vs. React/Component State?

* Redux/Application state is stored globally that is done using container components. Which makes centralized access for a component to get the state it needs without surrounding components knowing it.
* When we use React, state is stored locally inside the component. i.e. if it needs to be shared with other components it should passed using props. i.e the top most component is our app.

2. Describe what an Action is/does.
* Actions are used to send data form application to store using ` store.dispatch()` method.

3.	Describe what a Reducer is/does.

* Reducers are responsible for specifying how the application state changes in response to an action.

4.	What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.

* **HTTP** stands for _*"HyperText-Transfer-Protocol"*_
* **CRUD** stands for _* CREATE, READ, UPDATE,DELETE *_
* **PUT** a method used for replacing all current reprsentaion of the target             resource.
* **GET** a method that is used to retrieve data from a given server.
* **POST** a method that is used to send data to the server.
* **DELETE** a method used for removing all current representations of the                  target resource.

