1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application State vs. React/Component State?
    The state of your whole application is stored in an object tree within a single store.
    Redux/Application State has the users state to be stored globally which lets any component to access the state.
    React/Component state exists locally in a componenet. When it needs to get accessed, we would need to do a callback.

2. Describe what an Action is/does.
    An action is function that returns an object that is created with the purpose of changing the state.
    Actions are the only way data can be passed through to a store and must have a 'type'.
    They are alerted when something happens, actions themselves do not change the application's state.

3. Describe what a Reducer is/does.
    A reducer is a function that specify how an application state changes in response to the action being passed. 
    They take in the state and the previous action and returns the next state accordingly.
    They do not change the current state or action in any way. Instead, they receive them and outputs the next state.

3. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
    HTTP stands for HyperText Transfer Protocal. It communicates how the brower or servers should take in different commands and are stateless.
    CRUD stands for Create, Read, Update, Delete. It represents how data is handled (aka - the data life cycle).
    Get - Post - Put - Delete