1.	Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application State vs. React/Component State?
    Single Source of Truth refers to the state tree. If you want access to a piece of information you write it once and use it everywhere.
    With Redux Application State the current state is held in the central ‘store’ while React Component State holds the current state of each component within the component.

2.	Describe what an Action is/does.
    An action is the function which signals the reducer. It can carry a ‘payload’ which is the new information for the reducer.

3.	Describe what a Reducer is/does.
    A reducer is an internal event listener. It’s always listening for its call and when it is called, it adds the new information that it is given. It doesn’t override the existing information.

4.	What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
    Hypertext Transfer Protocol
    Create, Read, Update, Delete
    Post, Get, Put/Patch, Delete
