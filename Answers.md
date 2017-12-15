### 1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application State vs. React/Component State?

- The single source of truth refers to the state tree that shouldn't be mutated. There is a one way directional pattern that ensures the state is not changed directly with reducers acting as a bridge.

### 2. Describe what an Action is/does.

- An action is a function invoked when we to pass a payload to the store and have a type property indicating the type of action being performed.

### 3. Describe what a Reducer is/does.

- A reducer is a fuction that listens to a signal from an action and inject the payload info from it into the state almost like an internal event listener.

### 4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.

- HTTP stands for Hyper Text Transfer Protocol. CRUD stands for Create, Read, Update and Delete. HTTP uses the POST, GET, PUT, and DELETE methods that map CRUD to interface with API's/Servers.