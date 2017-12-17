# **Answers** #


**Q1.**: Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?

The concept of "Single Source of Truth" refers to how redux uses a single JavaSript Object to represent it's entire application state. The difference between Redux/Application_State_ vs. React/Component_State_ is that the state in the latter is stored locally within a component. The state in the former is stored globally in the Redux store. In React, when the state needs to be shared with other components, it is passed down through props. In Redux, surrounding components do not need to know anything. Any component that needs access to a value may subscribe to the store and it will then have access - this is done using container components.

**Q2.**: Describe what an _Action_ is/does.

An action is JavaScript Object with a property: type. The property, payload, often accompanies type, but not always. An action is a payload of info that sends data from your application to your store.

**Q3.** Describe what a _Reducer_ is/does.

Reducers specify how an application's state will change in response to the actions. 

**Q4.** What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.

Hyper Text Transfer Protocol. Create Read Update Delete.  Four HTTP methods are: Get - Requests data from a specified resource, Post - Submits data to be processed to a specified resource, Put - Modifies data, Delete - Removes data. 

