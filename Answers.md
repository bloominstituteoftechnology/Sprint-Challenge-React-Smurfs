Describe the concept of a "Single Source of Truth" in Redux. 
Single Source of Truth is the State Tree, there is only one, and it is stored in an object. It has a one way flow of information using just one process to add and remove information from state. Reducers are the gate-keepers to that SSoT, and control the mutation of data /appending of state. Because of the one way flow, you cannot directly change the state.

Ex. What is the difference between Redux/Application State vs. React/Component State?
Global vs. Local. Redux handles the global state. React the local.

Describe what an Action is/does.
Actions are functions that pass the manipulated state from the Reducer to the component. This controls the flow of data, always downstream. The actions do the actual data mutation.

Describe what a Reducer is/does.
Reducer is a function that listens for specific things being triggered by the application. When triggered, they grab the data they’re responsible for, and manipulate their segment of the state. They return a new object, they do not mutate the original.

What does HTTP stand for? 
Hypertext Transfer Protocol – the set of rules by which online communication happens

What does CRUD stand for? 
Create, Read, Update, Delete. The basic foundations of persistent (the segments of state that outlive their creation processes) storage.

Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
Get: request a view of a particular resource
Post: Submits an entity to a particular resource – a change in state
Put: Overwrite a resource with the new payload
Delete: Remove the specified resource
