## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.
1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?
    The state of the entire application is stored in a single object tree within a single store. This allows for easy creation of universal apps, as the state can be serialized with no extra coding.
2. Describe what an _Action_ is/does.
    An action is the only way to change the state. It is an object describing what happened.
3. Describe what a _Reducer_ is/does.
    A reducer is a pure function that takes the previous state and an action and returns the next state.
4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
    HTTP: Hyper-Text-Transfer-Protocol. CRUD: Create, Read, Update, Delete.
    Create = Post (submits data to be processed to a specific resource)
    Read = Get (requests data from a specific resource)
    Update = Put (uploads a representation of the specific URI)
    Delete = Delete (deletes the specific resource)