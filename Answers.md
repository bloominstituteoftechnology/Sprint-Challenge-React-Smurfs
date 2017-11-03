1. Describe the concept of a "Single Source of Truth" in Redux. 
   Ex. What is the difference between Redux/Application State vs. React/Component State?

      Redux deals with the state of a whole application which is stored in an object tree within a single store, and more so, the store is an object that holds the state. In order to maintain a single source of truth there must be a single process for which the information is to be added and removed from the state.

      React State: Stored locally within the component. When the state need to be shared with other components it is passed down through [props].
      The highest level component in the application that needs access to a mutable value will hold that value in its state. If it can be mutated by children components, a callback must be passed to handle the change in the children components.

      Redux State: Stored globally in the Redux "store". When a component needs access to a value, it will "subscribe" to the store and gain access to that value, (which is mostly done in a container component). This helps put all data in one place and makes it very easy for a component to get the state it needs, without other components no being involved or knowing of what's happening.



2. Describe what an Action is/does.

    The Action is what is function that is invoked when the user performs and interacts with the application. The "type" in the Action is the signal we want to pass to the Reducer, and potentially pass along a Payload along with it. In which, the Payload is referring to what is actually being passed, such as an argument.

3. Describe what a Reducer is/does.

    A Reducer is the logic that is withing the store that repsonds and upadates in response to an action that is calling it. Reducers are always running in the application waiting for its chance to be called upon to pass along the information from the Action to the state. It is something you want to write once and be able to use it everywhere in the application.
    The one way directional pattern insures that there are no changes to the state directly and the reducers serve as gate keepers to the source of truth.


4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can    be mapped to the CRUD acronym that we use to interface with APIs/Servers.

    HTTP stands for HyperText Transfer Protocol 

    CRUD stands for:
                  **HTTP Methods**
    C: CREATE       {POST}
    R: READ         {GET}
    U: UPDATE       {PUT/PATCH}
    D: DELETE       {DELETE}
