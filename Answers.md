1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?

The Single source of truth concept mean there is one place that stores all your app state. In Redux we call this the store. In React, state is stored locally within a component and when it needs to share state with other components it's passed down by props. In Redux stat is stored globally in the Redux store. Then each seperate component subscribes to the store to get access to the global state.

2. Describe what an _Action_ is/does.

Actions are called from your component through the connect function. They are simple Javascript objects that alway have a 'type:' and a 'payload'. They are the middle men between your components and reducers/store. Your component sends new data or gets data from the store through these objects.

3. Describe what a _Reducer_ is/does.

I reducer is a pure function that takes the previous state and the action and returns the new state.

4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.

HTTP: Hyper Text Tranfer Protocol
CRUD: CREATE, READ, UPDATE, DELETE
Mapping these would look like:
1. CREATE = POST
2. READ = GET
3. UPDATE = POST
4. DELETE = DELETE