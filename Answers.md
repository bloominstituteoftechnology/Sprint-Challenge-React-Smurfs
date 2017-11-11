1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application State vs. React/Component State?

A:  In React, state is stored locally within a component and shared with other components
    through props. In Redux, state is stored globally in a store and components may subscribe
    to the store to gain access to the value(s) of the state. Additionally, the state is immutable
    and cannot be altered directly. There is also just a single state tree.

-------------------------------------------------------------------------------
2. Describe what an Action is/does.

A:  An Action is a JS Object that is emitted to change the state by describing what happened. It
    is an expression of intent to transform the state.

-------------------------------------------------------------------------------
3. Describe what a Reducer is/does.

A:  A Reducer is a pure function that takes the previous state and an action, and returns the next state
    using new state objects (instead of mutating the previous state objects).

-------------------------------------------------------------------------------
4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.

A:  HTTP = Hypertext Transfer Protocol
    CRUD = Create, Read, Update, Delete

    HTTP  <---> CRUD
    POST        CREATE
    GET         READ
    PUT         UPDATE
    DELETE      DELETE  