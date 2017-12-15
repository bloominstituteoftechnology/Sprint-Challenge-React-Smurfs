1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?

Single source of truth
The state of your whole application is stored in an object tree within a single store.  This makes it easy to create universal apps, as the state from your server can be serialized and hydrated into the client with no extra coding effort. A single state tree also makes it easier to debug or inspect an application; it also enables you to persist your app's state in development, for a faster development cycle. Some functionality which has been traditionally difficult to implement - Undo/Redo, for example - can suddenly become trivial to implement, if all of your state is stored in a single tree.

Redux manages state and state transformations and is often used with React, but React has its own concept of state.
React state is stored locally within a component. When it needs to be shared with other components, it is passed down through props. In practice, this means that the top-most component in your app needing access to a mutable value will hold that value in its state. If it can be mutated by subcomponents, you must pass a callback to handle the change into subcomponents.

When using Redux, state is stored globally in the Redux store. Any component that needs access to a value may subscribe to the store and gain access to that value. Typically, this is done using container components. This centralizes all data but makes it very easy for a component to get the state it needs, without surrounding components knowing of its needs.
2. Describe what an _Action_ is/does.
Actions that are handled by this middleware return a promise. This gives you the ability to chain actions. A good example of this might be a form. In the form you might dispatch an actions to store the form values. The normal flow of the action into the reducers would not be altered but you can chain a then/catch onto the initial dispatch.



3. Describe what a _Reducer_ is/does.
Actions describe the fact that something happened, but don't specify how the application's state changes in response. This is the job of reducers.It's very important that the reducer stays pure. Things you should never do inside a reducer:

Mutate its arguments;
Perform side effects like API calls and routing transitions;
Call non-pure functions, e.g. Date.now() or Math.random().
4. What does HTTP stand for? HTTP stands for "Hyper Text Transfer Protocol", the primary technology protocol on the Web that allows linking and browsing. This is the technology used to communicate between web servers and web users.

What does CRUD stand for? CRUD is what tech-savvy programmers call a backronym that describes all of the functions that can be done to data that is being stored within a database or application. As previously stated, these functions include Create, Retrieve, Update and Delete. Without all four of these functions, an application is not complete and will not function properly, according to Techopedia.

Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.