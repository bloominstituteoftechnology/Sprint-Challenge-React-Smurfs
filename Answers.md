1. Question: Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?
    * React State pertains to the speciffic component only, it can be changed through setState(), components get full acess to the state object within them, and or parents can pass on their state properties as props to the children components.
    * Redux State is accessible from any component provided it is connected to props, but it can be changed only through using actions and by the reducers. You can map speciffic properties of the redux state to each component's own React-State and this increases flexibility.
2. Question: Describe what an _Action_ is/does.
    * Actions are functions that act upon some premise; they instruct the reducers to act upon the Redux/Application State.
3. Describe what a _Reducer_ is/does.
    * A reducer receives a modified object from the executed action, and ads it to the Redux / Application State.
4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
    * HTTP: Hyper Text Transfer Protocol, a set of rules for sending information down the internet.
    * CRUD: Create, Read, Update, Delete, some of the instructions acted upon persistent data in a communication from server / client using a protocol like HTTP to access each others.
    * HTTP Methods that can be mapped to CRUD: Put, Post, Get, Patch, Delete.