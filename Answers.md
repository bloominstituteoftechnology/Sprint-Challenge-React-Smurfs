#### 1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application State vs. React/Component State?

* The single source of truth in redux is the concept of having abstracted a single state object for the whole application. Having a single source of truth allows for easy debugging and many other features, like redoing, undoing
and hydrating state changes. Compared to React Component state, having a single source of truth means that your components will always be up to date with the same data and are not responsible for keeping their own state and passing
it around to other components.

#### 2. Describe what an Action is/does.
* In redux an action is a function that is dispatched by redux and returns an action creator which is a simple object with a type and a payload. Only the type is required, any other properties are up to us. 

#### 3. Describe what a Reducer is/does.
* In redux a reducer is a function that handles a chunk of state from the source of truth object. A reducer takes in the previous state, and an action, the reducer will then look at the action type and act accordingly, usually through
a switch statement to modify and return a new state chunk. 

#### 4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
* HTTP stands for hypertext transfer protocol. CRUD stands for CREATE, READ, UPDATE, and DELETE. 
```
POST => CREATE
GET => READ
PUT/PATCH => UPDATE 
DELETE => DELETE
```
