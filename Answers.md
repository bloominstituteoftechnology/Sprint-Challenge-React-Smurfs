## Questions 
1. Describe the concept of a *"Single Source of Truth"* in Redux. Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?
    The concept of a _single source of truth_ refers to the flow of state in a React application. In short, regardless of the number of components, there is one master state  one master state almost all of the application, then that state is sent down as props to child components.

    *Redux/Application State* - This refers to state that is stored locally within the component -  other parts of the application could benefit from. Data that could be used by other parts of the application, original data that could be transformed into new/additional data by more than one of the application's components, data that drives more than one component, or data in which it would be beneficial to cache and reused instead of re-requesting it anew. When necessary, the state is shared shared with other components by being passed down through [props].

    *React/Component State* - Stored globally in the Redux store, these are encapsulated components that manage their own state. Data is utilized by a single component that subscribes to the store. The data is used and progresses through a life cycle without any of the components knowing or caring about the process.

2. Describe what an _Action_ is/does.
    *Actions* - are plain JavaScript objects that serve as the inventory for the store. They are payloads of information that originate in the developer's application.
3. Describe what a _Reducer_ is/does.
    *A Reducer* - is constantly-running logic that waits for an opportunity to pass information from action to the state. Reducers are written once and used globally throughout the application. Their one-way nature allows them to act as gatekeepers to the *single source of truth* mentioned in question 1. 
4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
    *HTTP* = HyperText Transfer Protocol.
    *CRUD* = Create, Read, Update, Delete

    A method that is related to _create_ is *post*.
    A method that is related to _read_ is *get*.
    A method that is related to _update_ is *put/patch*.
    A method that is related to _delete_ is *delete*.
