1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?

In redux your application state is global and sourced through container components which can delegate state to children through props. When updating state, changes happen via actions and reducers allowing for only controlled updates that meet the expectations of the application. In an application without flux architecture, state can be lifted from virtually anywhere. While changes technically happen the same way as redux, redux can simplify state-updating process by only allowing state changes to happen if the action type is predefined. This means that losing track of which component is updating which specific area of state is virtually impossible because every change flows through a predefined action and reducer. 

2. Describe what an _Action_ is/does.

An action is a definition of a permitted change to state. 

3. Describe what a _Reducer_ is/does.

A reducer is a description of how the action will effect state. It is the function associated with the action.

4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.

HTTP is hypertext transfer protocol. CRUD is create, read, update, delete. AXAJ and associated libraries have GET, POST, PUT, DELETE, and often several more methods for interfacing with our apis and servers.